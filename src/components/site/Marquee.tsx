import type { ReactNode } from "react";

export function Marquee({ children, speed = 40 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="group relative overflow-hidden marquee-mask">
      <div
        className="flex p-4 w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex gap-5 shrink-0">{children}</div>
        <div className="flex gap-5 shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
