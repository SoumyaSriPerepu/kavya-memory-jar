type JarProps = {
  total: number;
  remaining: number;
  shaking?: boolean;
};

const NOTE_COLORS = ["#f7c9d1", "#bcd7e8", "#fbe2a7", "#c9e4c5", "#d9c9e8"];

const COLS = 3;
const ROW_HEIGHT = 20;
const COL_WIDTH = 34;
const BOTTOM_Y = 288;
const LEFT_X = 62;

function buildNotes(total: number) {
  const notes = [];
  for (let i = 0; i < total; i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const jitterX = Math.round(Math.sin(i * 12.9) * 5 * 100) / 100;
    const jitterY = Math.round(Math.cos(i * 7.3) * 4 * 100) / 100;
    const rotation = Math.round(Math.sin(i * 5.7) * 22 * 100) / 100;
    notes.push({
      x: LEFT_X + col * COL_WIDTH + jitterX,
      y: BOTTOM_Y - row * ROW_HEIGHT + jitterY,
      rotation,
      color: NOTE_COLORS[i % NOTE_COLORS.length],
    });
  }
  return notes;
}

export default function Jar({ total, remaining, shaking }: JarProps) {
  const notes = buildNotes(total).slice(0, remaining);

  return (
    <div className={shaking ? "animate-[wiggle_0.4s_ease-in-out]" : ""}>
      <svg
        width="220"
        height="330"
        viewBox="0 0 220 330"
        className="animate-jar-glow"
      >
        <defs>
          <clipPath id="jarBody">
            <path d="M42 96 Q40 84 55 82 L165 82 Q180 84 178 96 L182 280 Q183 300 165 305 L55 305 Q37 300 38 280 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#jarBody)">
          {notes.map((note, i) => (
            <g key={i} transform={`translate(${note.x} ${note.y}) rotate(${note.rotation})`}>
              <rect x={-11} y={-7} width={22} height={14} rx={2} fill={note.color} stroke="#fffaf3" strokeWidth="1" />
              <path d={`M -11 -7 L 0 -1 L -11 5 Z`} fill="rgba(255,255,255,0.35)" />
            </g>
          ))}
        </g>

        {/* jar glass outline */}
        <path
          d="M42 96 Q40 84 55 82 L165 82 Q180 84 178 96 L182 280 Q183 300 165 305 L55 305 Q37 300 38 280 Z"
          fill="rgba(255,255,255,0.12)"
          stroke="#e08a5b"
          strokeWidth="4"
          opacity="0.9"
        />
        {/* neck */}
        <path
          d="M76 82 L74 52 Q74 44 84 44 L136 44 Q146 44 146 52 L144 82"
          fill="rgba(255,255,255,0.1)"
          stroke="#e08a5b"
          strokeWidth="4"
          opacity="0.9"
        />

        {/* twine wrap around the neck */}
        <g stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
          <path d="M73 58 L147 52" />
          <path d="M73 66 L147 60" />
          <path d="M73 74 L147 68" />
        </g>
        {/* twine bow */}
        <g transform="translate(162 62)">
          <circle r="4" fill="#a97c50" />
          <path d="M0 0 Q14 -10 20 2 Q14 6 0 0" fill="none" stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0 0 Q14 12 22 6 Q14 -2 0 0" fill="none" stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* cork stopper */}
        <path
          d="M70 20 Q70 12 80 12 L140 12 Q150 12 150 20 L150 46 Q150 52 140 52 L80 52 Q70 52 70 46 Z"
          fill="#d9a066"
          stroke="#b97f47"
          strokeWidth="2"
        />
        <path d="M74 24 L146 24" stroke="#b97f47" strokeWidth="1.5" opacity="0.6" />
        <path d="M74 34 L146 34" stroke="#b97f47" strokeWidth="1.5" opacity="0.6" />
        <path d="M74 44 L146 44" stroke="#b97f47" strokeWidth="1.5" opacity="0.6" />

        {/* glass shine */}
        <path
          d="M52 110 L48 270"
          stroke="#fffaf3"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
