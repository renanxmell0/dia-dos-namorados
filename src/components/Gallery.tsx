import { useState } from "react";
import porDoSol from "@/assets/porDoSol.jpg";
import primeiroEncontro from "@/assets/primeiroEncontro.jpg";
import passeioEspecial from "@/assets/passeioEspecial.jpg";
import paraSempre from "@/assets/paraSempre.jpg";
import aniversario from "@/assets/aniversarios.jpg";
import shopping from "@/assets/shopping.jpg";
import anvdeyasmin from "@/assets/anvdeyasmin.jpg";
import segundoencontro from "@/assets/segundoencontro.jpg";
import rua from "@/assets/rua.jpg";
import flor from "@/assets/flor.jpg";

// To replace photos: change the `src` URLs below. Use imports from src/assets/ for local files.
export const PHOTOS = [
  { src: primeiroEncontro, caption: "❤️" },
  { src: aniversario, caption: "❤️" },
  { src: porDoSol, caption: "❤️" },
  { src: shopping, caption: "❤️" },
  { src: passeioEspecial, caption: "❤️" },
  { src: anvdeyasmin, caption: "❤️" },
  { src: segundoencontro, caption: "❤️" },
  { src: rua, caption: "❤️" },
  { src: flor, caption: "❤️" },
  { src: paraSempre, caption: "❤️" },
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
