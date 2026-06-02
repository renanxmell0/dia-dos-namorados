import { useEffect, useState } from "react";

const START = new Date("2025-03-16T00:00:00");

function diff() {
  const now = new Date();
  const ms = Math.max(0, now.getTime() - START.getTime());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Dias", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="group relative rounded-2xl bg-card/80 p-6 text-center shadow-card backdrop-blur-sm transition-transform hover:-translate-y-1"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-sunset opacity-0 transition-opacity group-hover:opacity-20" />
          <div className="font-display relative text-5xl font-bold text-shimmer md:text-6xl">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="relative mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
