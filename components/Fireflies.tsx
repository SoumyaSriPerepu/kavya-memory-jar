const STARS = [
  { top: "10%", left: "8%", delay: "0s", size: 16 },
  { top: "20%", left: "88%", delay: "0.6s", size: 20 },
  { top: "66%", left: "6%", delay: "1.1s", size: 14 },
  { top: "78%", left: "90%", delay: "0.3s", size: 18 },
  { top: "38%", left: "93%", delay: "1.6s", size: 12 },
  { top: "85%", left: "18%", delay: "0.9s", size: 15 },
  { top: "6%", left: "44%", delay: "1.3s", size: 13 },
];

function Star({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ filter: "drop-shadow(0 0 6px rgba(255, 217, 142, 0.9))" }}
    >
      <path
        d="M12 1.5 L14.7 8.8 L22.5 9.3 L16.4 14.2 L18.5 21.8 L12 17.6 L5.5 21.8 L7.6 14.2 L1.5 9.3 L9.3 8.8 Z"
        fill="#ffd98e"
      />
    </svg>
  );
}

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <span
          key={i}
          className="absolute animate-float animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        >
          <Star size={s.size} />
        </span>
      ))}
    </div>
  );
}
