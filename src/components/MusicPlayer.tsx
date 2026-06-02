import { useRef, useState } from "react";

// Replace with your own song URL (mp3)
const SONG_URL = "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d57a.mp3";

export function MusicPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) {
      ref.current.pause();
      setPlaying(false);
    } else {
      ref.current.volume = 0.4;
      ref.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={ref} src={SONG_URL} loop />
      <button
        onClick={toggle}
        aria-label="Tocar música"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-card/90 shadow-card backdrop-blur-md transition-all hover:scale-110 animate-pulse-glow"
      >
        <span className="text-2xl">{playing ? "🎵" : "🎶"}</span>
      </button>
    </>
  );
}
