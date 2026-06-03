import { useState } from "react";

// To replace photos: change the `src` URLs below. Use imports from src/assets/ for local files.
export const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600", caption: "Nosso primeiro encontro" },
  { src: "https://images.unsplash.com/photo-1529635141051-1ef9342fec5a?w=600", caption: "Risadas sem fim" },
  { src: "D:\Documents\facul\Outros\Projetos pessoais\milene-renan-s-love-story\src\assets/por do sol.jpg", caption: "Aquele pôr do sol" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600", caption: "Café da manhã juntos" },
  { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600", caption: "Passeio especial" },
  { src: "https://images.unsplash.com/photo-1521543387191-274e95667f5d?w=600", caption: "Abraço apertado" },
  { src: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=600", caption: "Nossa música" },
  { src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600", caption: "Aniversário" },
  { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600", caption: "Dias bons" },
  { src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600", caption: "Para sempre" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const rotations = [-3, 2, -1, 3, -2, 1, -3, 2, -1, 2];

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {PHOTOS.map((p, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            style={{ transform: `rotate(${rotations[i]}deg)` }}
            className="group block bg-white p-3 pb-12 shadow-card transition-all duration-500 hover:!rotate-0 hover:scale-110 hover:shadow-glow"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="font-script mt-3 text-center text-lg text-foreground/80">
              {p.caption}
            </p>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md animate-fade-up"
        >
          <div className="relative max-h-[90vh] max-w-3xl bg-white p-4 pb-16 shadow-glow">
            <img src={PHOTOS[open].src} alt={PHOTOS[open].caption} className="max-h-[75vh] w-auto" />
            <p className="font-script absolute bottom-4 left-0 right-0 text-center text-2xl text-foreground">
              {PHOTOS[open].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
