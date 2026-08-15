const SPARKLES = [
  { top: "12%", left: "8%", delay: "0s", size: 6 },
  { top: "22%", left: "88%", delay: "0.6s", size: 8 },
  { top: "68%", left: "6%", delay: "1.1s", size: 5 },
  { top: "78%", left: "92%", delay: "0.3s", size: 7 },
  { top: "40%", left: "94%", delay: "1.6s", size: 4 },
  { top: "85%", left: "20%", delay: "0.9s", size: 6 },
  { top: "8%", left: "45%", delay: "1.3s", size: 5 },
];

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-glow animate-float animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            boxShadow: "0 0 10px 2px rgba(255, 217, 142, 0.8)",
          }}
        />
      ))}
    </div>
  );
}
