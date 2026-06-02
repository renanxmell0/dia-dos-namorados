import { useState } from "react";

export function SurpriseButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden rounded-full border-2 border-dashed px-10 py-5 font-medium text-foreground transition-all hover:scale-105"
          style={{ borderColor: "var(--gold)" }}
        >
          <span className="relative z-10">Não clique aqui 👀</span>
          <div className="absolute inset-0 bg-gradient-sunset opacity-0 transition-opacity group-hover:opacity-30" />
        </button>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md animate-fade-up"
        >
          <div className="relative overflow-hidden rounded-3xl bg-card p-10 text-center shadow-glow md:p-16 max-w-xl">
            {Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="absolute text-2xl animate-heart-beat"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  color: "var(--rose)",
                }}
              >
                ❤
              </span>
            ))}
            <div className="relative">
              <div className="mb-6 text-6xl animate-heart-beat">💖</div>
              <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                "Eu escolheria você em todas as vidas, em todos os mundos e em todos os universos."
              </p>
              <p className="font-script mt-6 text-4xl text-shimmer">❤️</p>
              <button
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-primary px-6 py-2 text-sm text-primary-foreground hover:opacity-90"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
