import { useEffect, useRef, useState } from "react";
import browsing from "@/assets/cursor-browsing.png?url";
import pointing from "@/assets/cursor-pointing.png?url";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, label, summary, [data-cursor="pointer"], .cursor-pointer';

export function MascotCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const imgBrowsing = useRef<HTMLImageElement | null>(null);
  const imgPointing = useRef<HTMLImageElement | null>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [pointer, setPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Detect non-touch, fine pointer device
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Preload + fallback detection
    let failed = 0;
    const onErr = () => {
      failed += 1;
      if (failed >= 1) setEnabled(false);
    };
    imgBrowsing.current = new Image();
    imgBrowsing.current.onerror = onErr;
    imgBrowsing.current.src = browsing;
    imgPointing.current = new Image();
    imgPointing.current.onerror = onErr;
    imgPointing.current.src = pointing;

    document.documentElement.classList.add("mascot-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
      const el = e.target as Element | null;
      const isInteractive = !!(el && el.closest && el.closest(INTERACTIVE_SELECTOR));
      setPointer((prev) => (prev === isInteractive ? prev : isInteractive));
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => ref.current?.classList.add("is-down");
    const onUp = () => ref.current?.classList.remove("is-down");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("mascot-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`mascot-cursor ${visible ? "is-visible" : ""} ${pointer ? "is-pointer" : ""}`}
    >
      <div className="mascot-cursor__float">
        <img src={browsing} alt="" className="mascot-cursor__img mascot-cursor__img--browsing" draggable={false} />
        <img src={pointing} alt="" className="mascot-cursor__img mascot-cursor__img--pointing" draggable={false} />
      </div>
    </div>
  );
}
