const STARS = [
  { top: "10%", left: "8%", delay: "0s", size: 16, color: "#ffd98e" },
  { top: "20%", left: "88%", delay: "0.6s", size: 20, color: "#f4a9c0" },
  { top: "66%", left: "6%", delay: "1.1s", size: 14, color: "#9bcbe6" },
  { top: "78%", left: "90%", delay: "0.3s", size: 18, color: "#ffd98e" },
  { top: "38%", left: "93%", delay: "1.6s", size: 12, color: "#c6a9e6" },
  { top: "85%", left: "18%", delay: "0.9s", size: 15, color: "#a3ddb8" },
  { top: "6%", left: "44%", delay: "1.3s", size: 13, color: "#f4a9c0" },
  { top: "50%", left: "12%", delay: "2.1s", size: 11, color: "#9bcbe6" },
  { top: "30%", left: "60%", delay: "1.8s", size: 13, color: "#ffd98e" },
];

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    >
      <path
        d="M12 1.5 L14.7 8.8 L22.5 9.3 L16.4 14.2 L18.5 21.8 L12 17.6 L5.5 21.8 L7.6 14.2 L1.5 9.3 L9.3 8.8 Z"
        fill={color}
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
          <Star size={s.size} color={s.color} />
        </span>
      ))}
    </div>
  );
}
