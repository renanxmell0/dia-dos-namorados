import { useEffect, useRef, useState } from "react";

const SONG_URL = encodeURI(
  "https://strict-gold-wxs0guae.edgeone.app/Zezé Di Camargo & Luciano - É o Amor (Áudio Oficial).mp3"
);

export function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.pause();
      }
    };
  }, []);

  const toggle = async () => {
    const audio = ref.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      return;
    }

    audio.volume = 0.4;

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Falha ao tocar a música:", error);
    }
  };

  return (
    <>
      <audio
        ref={ref}
        src={SONG_URL}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label="Tocar música"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-card/90 shadow-card backdrop-blur-md transition-all hover:scale-110 animate-pulse-glow"
      >
        <span className="text-2xl">{playing ? "🎵" : "🎶"}</span>
      </button>
    </>
  );
}
