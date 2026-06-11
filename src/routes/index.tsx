import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import IMG_4883 from "@/assets/IMG_4883.jpg";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Countdown } from "@/components/Countdown";
import { Gallery } from "@/components/Gallery";
import { Reasons } from "@/components/Reasons";
import { MusicPlayer } from "@/components/MusicPlayer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  useReveal();

  useEffect(() => {
    if (opened) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />

      {/* Welcome Screen */}
      <section
        className={`fixed inset-0 z-40 flex items-center justify-center px-6 transition-all duration-1000 ${
          opened ? "pointer-events-none -translate-y-10 opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0">
          <img src={IMG_4883} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-romance opacity-50" />
        </div>
        <div className="relative z-10 max-w-2xl text-center">
          
          <h1 className="font-display text-5xl font-medium leading-tight text-foreground md:text-7xl animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Feliz Dia dos <em className="text-shimmer">Namorados</em>,<br />
            Meu amor <span className="inline-block animate-heart-beat">❤️</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground animate-fade-up md:text-xl" style={{ animationDelay: "0.5s", opacity: 0 }}>
            Uma pequena surpresa feita especialmente para você.
          </p>
          <button
            onClick={() => setOpened(true)}
            className="mt-10 rounded-full bg-primary px-10 py-5 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-105 animate-pulse-glow animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            Abrir minha surpresa 💌
          </button>
        </div>
      </section>

      {/* Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${opened ? "opacity-100" : "opacity-0"}`}>
        {/* Section 1: Story */}
        <section className="px-6 pt-32 pb-20 md:pt-40">
          <div className="mx-auto max-w-3xl text-center reveal">
            <p className="font-script text-3xl text-shimmer">Nossa História</p>
            <h2 className="font-display mt-2 text-4xl font-medium md:text-6xl">
              Onde tudo começou
            </h2>
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="h-20 w-px bg-gradient-to-b from-transparent to-rose-400" style={{ backgroundImage: "linear-gradient(to bottom, transparent, var(--rose))" }} />
              <div className="rounded-3xl bg-card/80 px-10 py-8 shadow-card backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">16 de março de 2025</p>
                <p className="font-display mt-3 text-2xl md:text-3xl">
                  Tudo começou aqui <span className="animate-heart-beat inline-block">❤️</span>
                </p>
                <p className="font-script mt-4 text-2xl text-shimmer">Renan & Milene</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Countdown */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl reveal">
            <div className="mb-12 text-center">
              <p className="font-script text-3xl text-shimmer">Nosso Tempo</p>
              <h2 className="font-display mt-2 text-4xl font-medium md:text-5xl">
                Cada segundo ao seu lado
              </h2>
            </div>
            <Countdown />
          </div>
        </section>

        {/* Section 3: Gallery */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl reveal">
            <div className="mb-16 text-center">
              <p className="font-script text-3xl text-shimmer">Memórias</p>
              <h2 className="font-display mt-2 text-4xl font-medium md:text-5xl">
                Momentos para guardar
              </h2>
            </div>
            <Gallery />
          </div>
        </section>

        {/* Section 4: Reasons */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center reveal">
              <p className="font-script text-3xl text-shimmer">10 motivos</p>
              <h2 className="font-display mt-2 text-4xl font-medium md:text-5xl">
                Por que eu te amo
              </h2>
            </div>
            <Reasons />
          </div>
        </section>

        {/* Section 5: Letter */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl reveal">
            <div className="relative rounded-2xl bg-[oklch(0.97_0.025_80)] p-8 shadow-card md:p-14" style={{
              backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, oklch(0.88 0.04 15 / 0.4) 32px)",
            }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-medium uppercase tracking-widest text-white">
                Carta para você
              </div>
              <div className="font-display space-y-5 text-lg leading-[2rem] text-foreground md:text-xl">
                <p className="font-script text-3xl">Milene,</p>
                <p>
                  Desde que você entrou na minha vida tudo mudou para melhor. Eu passei a ir nas missas, vi o quão importante é estar seguindo o caminho de Cristo, passei a gostar de filme romantico🙄(mas só vejo com voce tb kkkk, sozinho não dá), amadureci bastante em alguns pensamentos e no meu agir, enfim, sou muito grato a Deus por ter colocado você na minha vida.
                </p>
                <p>
                  Obrigado por todos os sorrisos, conversas, abraços e momentos que compartilhamos. Você é a melhor coisa que já me aconteceu e eu sou muito feliz por ter você ao meu lado. Espero que possamos continuar construindo nossa história juntos, cheia de amor e companheirismo. E, a cada dia que passa, eu tenho mais certeza que quero viver o resto da minha vida com você.
                </p>
                <p className="font-script text-3xl text-shimmer">Eu te amo muitão, meu amor. ❤️</p>
                <p className="text-right">
                  Com carinho,<br />
                  <span className="font-script text-3xl">Renan</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 text-center">
          <div className="mx-auto max-w-xl">
            <div className="mb-4 text-3xl animate-heart-beat">❤️</div>
            <p className="font-script text-2xl text-shimmer">
              Feito com amor por Renan para Milene
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Dia dos Namorados · 2026
            </p>
          </div>
        </footer>
      </div>

      {opened && <MusicPlayer />}
    </main>
  );
}
