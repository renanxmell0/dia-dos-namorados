const REASONS = [
  "Seu beijo😉",
  "Seu jeito carinhoso em nao ser carinhosa kkk",
  "Como você me apoia mesmo nao concordando muito comigo",
  "Como você me faz rir",
  "Sua companhia",
  "Seu abraço beem apertado",
  "Seu sorriso",
  "Seus olhos😍😍",
  "Seu coração",
  "Seu cabelo",
];

export function Reasons() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {REASONS.map((r, i) => (
        <div
          key={i}
          className="reveal group relative overflow-hidden rounded-2xl border border-border/50 bg-card/70 p-6 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-glow"
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          <div className="absolute -right-6 -top-6 text-7xl opacity-10 transition-all group-hover:rotate-12 group-hover:opacity-30">
            ❤️
          </div>
          <div className="relative">
            <div className="font-display text-5xl font-light text-rose-400" style={{ color: "var(--rose)" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <p className="font-display mt-3 text-2xl font-medium leading-tight text-foreground">
              {r}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
