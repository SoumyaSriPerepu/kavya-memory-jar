const ORBS = [
  { top: "8%", left: "10%", size: 140, color: "var(--pink)", delay: "0s" },
  { top: "15%", left: "78%", size: 180, color: "var(--blue)", delay: "1.5s" },
  { top: "62%", left: "5%", size: 130, color: "var(--mint)", delay: "3s" },
  { top: "70%", left: "85%", size: 160, color: "var(--lavender)", delay: "2s" },
  { top: "40%", left: "50%", size: 200, color: "var(--glow)", delay: "0.8s" },
];

export default function Bokeh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ORBS.map((o, i) => (
        <span
          key={i}
          className="animate-bokeh-drift absolute rounded-full opacity-25 blur-3xl"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: o.color,
            animationDelay: o.delay,
          }}
        />
      ))}
    </div>
  );
}
