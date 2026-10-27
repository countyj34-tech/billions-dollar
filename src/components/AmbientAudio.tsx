import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { useSiteOverrides } from "@/lib/site-store";

export function AmbientAudio() {
  const [overrides] = useSiteOverrides();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!overrides.audioUrl) return;
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.4;
    if (overrides.audioAutoplay) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [overrides.audioUrl, overrides.audioAutoplay]);

  if (!overrides.audioUrl) return null;

  return (
    <>
      <audio ref={audioRef} src={overrides.audioUrl} loop />
      <button
        onClick={() => {
          const a = audioRef.current;
          if (!a) return;
          if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
        }}
        className="fixed bottom-6 left-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-navy text-gold border border-gold/40 shadow-luxury hover:scale-110 transition"
        aria-label="Toggle music"
      >
        {playing ? <Pause size={16}/> : <Play size={16}/>}
        <Volume2 size={10} className="absolute bottom-1 right-1"/>
      </button>
    </>
  );
}
