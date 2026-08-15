type JarProps = {
  fillRatio: number; // 0 (empty) to 1 (full)
  shaking?: boolean;
};

export default function Jar({ fillRatio, shaking }: JarProps) {
  const clamped = Math.max(0, Math.min(1, fillRatio));
  const fillHeight = 150 * clamped;
  const fillY = 300 - fillHeight;

  return (
    <div className={shaking ? "animate-[wiggle_0.4s_ease-in-out]" : ""}>
      <svg
        width="220"
        height="320"
        viewBox="0 0 220 320"
        className="animate-jar-glow"
      >
        <defs>
          <clipPath id="jarBody">
            <path d="M45 90 Q45 80 55 80 L165 80 Q175 80 175 90 L175 290 Q175 305 160 305 L60 305 Q45 305 45 290 Z" />
          </clipPath>
          <linearGradient id="notesGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd98e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e08a5b" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <g clipPath="url(#jarBody)">
          <rect
            x="40"
            y={fillY}
            width="140"
            height={fillHeight}
            fill="url(#notesGlow)"
            className="transition-all duration-700 ease-out"
          />
          <rect x="55" y={fillY + 6} width="14" height="8" rx="2" fill="#fffaf3" opacity="0.9" />
          <rect x="90" y={fillY + 18} width="14" height="8" rx="2" fill="#fffaf3" opacity="0.85" transform="rotate(-8 97 22)" />
          <rect x="130" y={fillY + 4} width="14" height="8" rx="2" fill="#fffaf3" opacity="0.9" transform="rotate(6 137 8)" />
          <rect x="70" y={fillY + 34} width="14" height="8" rx="2" fill="#fffaf3" opacity="0.8" />
          <rect x="115" y={fillY + 30} width="14" height="8" rx="2" fill="#fffaf3" opacity="0.85" transform="rotate(-4 122 34)" />
        </g>

        {/* jar glass outline */}
        <path
          d="M45 90 Q45 80 55 80 L165 80 Q175 80 175 90 L175 290 Q175 305 160 305 L60 305 Q45 305 45 290 Z"
          fill="none"
          stroke="#e08a5b"
          strokeWidth="4"
          opacity="0.85"
        />
        {/* neck */}
        <path
          d="M75 80 L75 55 Q75 45 85 45 L135 45 Q145 45 145 55 L145 80"
          fill="none"
          stroke="#e08a5b"
          strokeWidth="4"
          opacity="0.85"
        />
        {/* lid */}
        <rect x="68" y="30" width="84" height="20" rx="6" fill="#e08a5b" />
        <rect x="68" y="30" width="84" height="8" rx="4" fill="#f3c98b" />

        {/* glass shine */}
        <path
          d="M60 100 L60 280"
          stroke="#fffaf3"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
