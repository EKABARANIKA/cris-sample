const stats = [
  { n: "15+", l: "Years of Experience" },
  { n: "1000+", l: "Students Guided" },
  { n: "4+", l: "Specialised Programs" },
  { n: "100%", l: "Child-Focused Learning" },
];

export function StatsSection() {
  return (
    <section className="container-app py-20">
      <div className="rounded-[2rem] bg-card border border-border shadow-[var(--shadow-soft)] p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display font-bold text-4xl md:text-5xl text-gradient">{s.n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
