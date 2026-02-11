import { useEffect, useState, useRef } from "react";

export function CosmicBackground() {
  const [stars, setStars] = useState([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const colors = ['#3b82f6', '#a855f7', '#6366f1', '#8b5cf6', '#0ea5e9'];
    const generated = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 120 - 10,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkleDelay: Math.random() * 5,
      floatDelay: Math.random() * -200,
      bright: Math.random() > 0.65,
    }));
    setStars(generated);

    const handleScroll = () => {
      const hero = document.querySelector('section');
      if (hero && bgRef.current) {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        const scroll = window.scrollY + window.innerHeight;
        if (scroll > heroBottom) {
          const fade = window.innerHeight * 0.5;
          bgRef.current.style.opacity = Math.max(0, 1 - (scroll - heroBottom) / fade);
        } else {
          bgRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1, transition: 'opacity 0.3s ease-out' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 15% 15%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 85% 25%, rgba(139,92,246,0.1) 0%, transparent 50%),
            radial-gradient(ellipse 55% 40% at 70% 85%, rgba(99,102,241,0.07) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 25% 75%, rgba(14,165,233,0.06) 0%, transparent 50%),
            #0a0a0a
          `
        }}
      />
      <div className="absolute inset-0">
        {stars.map((s) => (
          <div
            key={s.id}
            className={`absolute rounded-full star-drift ${s.bright ? 'star-bright' : 'star-dim'}`}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * (s.bright ? 6 : 3)}px ${s.color}`,
              animationDelay: `${s.floatDelay}s, ${s.twinkleDelay - 1}s`,
              opacity: s.bright ? 0.75 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
