import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useRef } from "react";
const IMG_4883 = "/assets/IMG_4883-CnSeqNGm.jpg";
function FloatingHearts({ count = 18 }) {
  const hearts = useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      size: 12 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 200,
      opacity: 0.3 + Math.random() * 0.5
    })),
    [count]
  );
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: hearts.map((h) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "heart-float absolute",
      style: {
        left: `${h.left}%`,
        fontSize: `${h.size}px`,
        animationDuration: `${h.duration}s`,
        animationDelay: `${h.delay}s`,
        opacity: h.opacity,
        ["--drift"]: `${h.drift}px`
      },
      children: "❤"
    },
    h.id
  )) });
}
const START = /* @__PURE__ */ new Date("2025-03-16T00:00:00");
function diff() {
  const now = /* @__PURE__ */ new Date();
  const ms = Math.max(0, now.getTime() - START.getTime());
  const days = Math.floor(ms / 864e5);
  const hours = Math.floor(ms % 864e5 / 36e5);
  const minutes = Math.floor(ms % 36e5 / 6e4);
  const seconds = Math.floor(ms % 6e4 / 1e3);
  return { days, hours, minutes, seconds };
}
function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1e3);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "Dias", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds }
  ];
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 md:grid-cols-4", children: items.map((it) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "group relative rounded-2xl bg-card/80 p-6 text-center shadow-card backdrop-blur-sm transition-transform hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-sunset opacity-0 transition-opacity group-hover:opacity-20" }),
        /* @__PURE__ */ jsx("div", { className: "font-display relative text-5xl font-bold text-shimmer md:text-6xl", children: String(it.value).padStart(2, "0") }),
        /* @__PURE__ */ jsx("div", { className: "relative mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: it.label })
      ]
    },
    it.label
  )) });
}
const porDoSol = "/assets/porDoSol-DrsoUwef.jpg";
const primeiroEncontro = "/assets/primeiroEncontro-DGJ21fed.jpg";
const passeioEspecial = "/assets/passeioEspecial-DuLD-Kze.jpg";
const paraSempre = "/assets/paraSempre-DLetkLdZ.jpg";
const aniversario = "/assets/aniversarios-CPwG1QQ0.jpg";
const shopping = "/assets/shopping-B5pvoN_Y.jpg";
const anvdeyasmin = "/assets/anvdeyasmin-Bx4nixWP.jpg";
const segundoencontro = "/assets/segundoencontro-BGsUZxVS.jpg";
const rua = "/assets/rua-C_l86sUH.jpg";
const flor = "/assets/flor-Dlla2RoV.jpg";
const PHOTOS = [
  { src: primeiroEncontro, caption: "❤️" },
  { src: aniversario, caption: "❤️" },
  { src: porDoSol, caption: "❤️" },
  { src: shopping, caption: "❤️" },
  { src: passeioEspecial, caption: "❤️" },
  { src: anvdeyasmin, caption: "❤️" },
  { src: segundoencontro, caption: "❤️" },
  { src: rua, caption: "❤️" },
  { src: flor, caption: "❤️" },
  { src: paraSempre, caption: "❤️" }
];
function Gallery() {
  const [open, setOpen] = useState(null);
  const rotations = [-3, 2, -1, 3, -2, 1, -3, 2, -1, 2];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5", children: PHOTOS.map((p, i) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(i),
        style: { transform: `rotate(${rotations[i]}deg)` },
        className: "group block bg-white p-3 pb-12 shadow-card transition-all duration-500 hover:!rotate-0 hover:scale-110 hover:shadow-glow",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative aspect-square overflow-hidden bg-muted", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: p.src,
              alt: p.caption,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "font-script mt-3 text-center text-lg text-foreground/80", children: p.caption })
        ]
      },
      i
    )) }),
    open !== null && /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setOpen(null),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md animate-fade-up",
        children: /* @__PURE__ */ jsxs("div", { className: "relative max-h-[90vh] max-w-3xl bg-white p-4 pb-16 shadow-glow", children: [
          /* @__PURE__ */ jsx("img", { src: PHOTOS[open].src, alt: PHOTOS[open].caption, className: "max-h-[75vh] w-auto" }),
          /* @__PURE__ */ jsx("p", { className: "font-script absolute bottom-4 left-0 right-0 text-center text-2xl text-foreground", children: PHOTOS[open].caption })
        ] })
      }
    )
  ] });
}
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
  "Seu cabelo"
];
function Reasons() {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: REASONS.map((r, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "reveal group relative overflow-hidden rounded-2xl border border-border/50 bg-card/70 p-6 shadow-soft backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-glow",
      style: { transitionDelay: `${i * 80}ms` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -right-6 -top-6 text-7xl opacity-10 transition-all group-hover:rotate-12 group-hover:opacity-30", children: "❤️" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-5xl font-light text-rose-400", style: { color: "var(--rose)" }, children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("p", { className: "font-display mt-3 text-2xl font-medium leading-tight text-foreground", children: r })
        ] })
      ]
    },
    i
  )) });
}
const SONG_URL = "https://youtu.be/arA0f6ZJDgo?si=zdF2OCKO7tS7ygqp";
function MusicPlayer() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.volume = 0.4;
      ref.current.play().then(() => setPlaying(true)).catch(() => {
      });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("audio", { ref, src: SONG_URL, loop: true }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: toggle,
        "aria-label": "Tocar música",
        className: "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-card/90 shadow-card backdrop-blur-md transition-all hover:scale-110 animate-pulse-glow",
        children: /* @__PURE__ */ jsx("span", { className: "text-2xl", children: playing ? "🎵" : "🎶" })
      }
    )
  ] });
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
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
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(FloatingHearts, {}),
    /* @__PURE__ */ jsxs("section", { className: `fixed inset-0 z-40 flex items-center justify-center px-6 transition-all duration-1000 ${opened ? "pointer-events-none -translate-y-10 opacity-0" : "opacity-100"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: IMG_4883, alt: "", className: "h-full w-full object-cover opacity-40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-romance opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl font-medium leading-tight text-foreground md:text-7xl animate-fade-up", style: {
          animationDelay: "0.2s",
          opacity: 0
        }, children: [
          "Feliz Dia dos ",
          /* @__PURE__ */ jsx("em", { className: "text-shimmer", children: "Namorados" }),
          ",",
          /* @__PURE__ */ jsx("br", {}),
          "Meu amor ",
          /* @__PURE__ */ jsx("span", { className: "inline-block animate-heart-beat", children: "❤️" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground animate-fade-up md:text-xl", style: {
          animationDelay: "0.5s",
          opacity: 0
        }, children: "Uma pequena surpresa feita especialmente para você." }),
        /* @__PURE__ */ jsx("button", { onClick: () => setOpened(true), className: "mt-10 rounded-full bg-primary px-10 py-5 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-105 animate-pulse-glow animate-fade-up", style: {
          animationDelay: "0.8s"
        }, children: "Abrir minha surpresa 💌" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `relative z-10 transition-opacity duration-1000 ${opened ? "opacity-100" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsx("section", { className: "px-6 pt-32 pb-20 md:pt-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center reveal", children: [
        /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-shimmer", children: "Nossa História" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-4xl font-medium md:text-6xl", children: "Onde tudo começou" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "h-20 w-px bg-gradient-to-b from-transparent to-rose-400", style: {
            backgroundImage: "linear-gradient(to bottom, transparent, var(--rose))"
          } }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-3xl bg-card/80 px-10 py-8 shadow-card backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm uppercase tracking-[0.3em] text-muted-foreground", children: "16 de março de 2025" }),
            /* @__PURE__ */ jsxs("p", { className: "font-display mt-3 text-2xl md:text-3xl", children: [
              "Tudo começou aqui ",
              /* @__PURE__ */ jsx("span", { className: "animate-heart-beat inline-block", children: "❤️" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-script mt-4 text-2xl text-shimmer", children: "Renan & Milene" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-12 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-shimmer", children: "Nosso Tempo" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-4xl font-medium md:text-5xl", children: "Cada segundo ao seu lado" })
        ] }),
        /* @__PURE__ */ jsx(Countdown, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl reveal", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-shimmer", children: "Memórias" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-4xl font-medium md:text-5xl", children: "Momentos para guardar" })
        ] }),
        /* @__PURE__ */ jsx(Gallery, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center reveal", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-shimmer", children: "10 motivos" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display mt-2 text-4xl font-medium md:text-5xl", children: "Por que eu te amo" })
        ] }),
        /* @__PURE__ */ jsx(Reasons, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-6 py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl reveal", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl bg-[oklch(0.97_0.025_80)] p-8 shadow-card md:p-14", style: {
        backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, oklch(0.88 0.04 15 / 0.4) 32px)"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-medium uppercase tracking-widest text-white", children: "Carta para você" }),
        /* @__PURE__ */ jsxs("div", { className: "font-display space-y-5 text-lg leading-[2rem] text-foreground md:text-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl", children: "Milene," }),
          /* @__PURE__ */ jsx("p", { children: "Desde que você entrou na minha vida tudo mudou para melhor. Eu passei a ir nas missas, vi o quão importante é estar seguindo o caminho de Cristo, passei a gostar de filme romantico🙄(mas só vejo com voce tb kkkk, sozinho não dá), amadureci bastante em alguns pensamentos e no meu agir, enfim, sou muito grato a Deus por ter colocado você na minha vida." }),
          /* @__PURE__ */ jsx("p", { children: "Obrigado por todos os sorrisos, conversas, abraços e momentos que compartilhamos. Você é a melhor coisa que já me aconteceu e eu sou muito feliz por ter você ao meu lado. Espero que possamos continuar construindo nossa história juntos, cheia de amor e companheirismo. E, a cada dia que passa, eu tenho mais certeza que quero viver o resto da minha vida com você." }),
          /* @__PURE__ */ jsx("p", { className: "font-script text-3xl text-shimmer", children: "Eu te amo muitão, meu amor. ❤️" }),
          /* @__PURE__ */ jsxs("p", { className: "text-right", children: [
            "Com carinho,",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "font-script text-3xl", children: "Renan" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("footer", { className: "px-6 py-16 text-center", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-3xl animate-heart-beat", children: "❤️" }),
        /* @__PURE__ */ jsx("p", { className: "font-script text-2xl text-shimmer", children: "Feito com amor por Renan para Milene" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Dia dos Namorados · 2026" })
      ] }) })
    ] }),
    opened && /* @__PURE__ */ jsx(MusicPlayer, {})
  ] });
}
export {
  Index as component
};
