type JarProps = {
  total: number;
  remaining: number;
  shaking?: boolean;
  popping?: boolean;
};

const NOTE_COLORS = ["#f7c9d1", "#bcd7e8", "#fbe2a7", "#c9e4c5", "#d9c9e8"];

const COLS = 3;
const ROW_HEIGHT = 22;
const COL_WIDTH = 34;
const BOTTOM_Y = 275;
const LEFT_X = 62;

function buildNotes(total: number) {
  const notes = [];
  for (let i = 0; i < total; i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    const jitterX = Math.round(Math.sin(i * 12.9) * 5 * 100) / 100;
    const jitterY = Math.round(Math.cos(i * 7.3) * 4 * 100) / 100;
    const rotation = Math.round(Math.sin(i * 5.7) * 22 * 100) / 100;
    const delay = Math.round((i % 5) * 0.35 * 100) / 100;
    notes.push({
      x: LEFT_X + col * COL_WIDTH + jitterX,
      y: BOTTOM_Y - row * ROW_HEIGHT + jitterY,
      rotation,
      color: NOTE_COLORS[i % NOTE_COLORS.length],
      delay,
    });
  }
  return notes;
}

const BODY_PATH =
  "M44 108 C34 108 32 128 33 150 C34 178 28 190 29 220 C30 252 26 270 42 288 C56 304 78 310 110 310 C142 310 164 304 178 288 C194 270 190 252 191 220 C192 190 186 178 187 150 C188 128 186 108 176 108 Z";

const FAIRY_LIGHTS = [
  { x: 55, y: 130, color: "#ffd98e", delay: "0s" },
  { x: 80, y: 145, color: "#f4a9c0", delay: "0.3s" },
  { x: 105, y: 125, color: "#ffd98e", delay: "0.6s" },
  { x: 130, y: 150, color: "#9bcbe6", delay: "0.9s" },
  { x: 155, y: 135, color: "#ffd98e", delay: "1.2s" },
  { x: 150, y: 200, color: "#c6a9e6", delay: "0.4s" },
  { x: 120, y: 220, color: "#ffd98e", delay: "0.8s" },
  { x: 90, y: 210, color: "#a3ddb8", delay: "1.1s" },
  { x: 60, y: 230, color: "#ffd98e", delay: "1.5s" },
  { x: 75, y: 270, color: "#f4a9c0", delay: "0.2s" },
  { x: 110, y: 285, color: "#ffd98e", delay: "0.7s" },
  { x: 145, y: 270, color: "#9bcbe6", delay: "1.3s" },
];
const FAIRY_WIRE = FAIRY_LIGHTS.map((p) => `${p.x} ${p.y}`).join(" L ");

function Petal({ color }: { color: string }) {
  return (
    <g>
      <ellipse cx="6" cy="0" rx="6" ry="3.2" fill={color} opacity="0.9" />
      <ellipse cx="-6" cy="0" rx="6" ry="3.2" fill={color} opacity="0.9" />
      <ellipse cx="0" cy="6" rx="3.2" ry="6" fill={color} opacity="0.9" />
      <ellipse cx="0" cy="-6" rx="3.2" ry="6" fill={color} opacity="0.9" />
      <circle r="2.5" fill="#fff2c2" />
    </g>
  );
}

function sparklePath(size: number) {
  const a = size;
  const b = size * 0.18;
  return `M0,${-a} C${b},${-b} ${b},${-b} ${a},0 C${b},${b} ${b},${b} 0,${a} C${-b},${b} ${-b},${b} ${-a},0 C${-b},${-b} ${-b},${-b} 0,${-a} Z`;
}

const SPARKLES = [
  { x: 92, y: 10, size: 4.5, color: "#f4a9c0", delay: "0s" },
  { x: 112, y: 6, size: 5.5, color: "#ffd98e", delay: "0.9s" },
  { x: 128, y: 9, size: 4, color: "#9bcbe6", delay: "1.7s" },
];

function Sparkle({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="animate-sparkle-rise" style={{ animationDelay: delay }}>
        <path d={sparklePath(size)} fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }} />
      </g>
    </g>
  );
}

export default function Jar({ total, remaining, shaking, popping }: JarProps) {
  const notes = buildNotes(total).slice(0, remaining);

  return (
    <div className="relative inline-block pt-4">
      {popping && (
        <div className="animate-note-fly pointer-events-none absolute left-1/2 top-[40%] z-10 -ml-[11px] h-[16px] w-[22px] rounded-sm bg-accent-soft shadow" />
      )}

      <div className="absolute bottom-2 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full bg-[#5b3a29]/25 blur-md" />

      <div
        className={`relative animate-jar-bob ${shaking ? "animate-[wiggle_0.4s_ease-in-out]" : ""}`}
      >
        <svg width="220" height="320" viewBox="0 0 220 320" className="animate-jar-glow">
          <defs>
            <clipPath id="jarBody">
              <path d={BODY_PATH} />
            </clipPath>
            <linearGradient id="glassFill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="18%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="82%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="corkGrain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e0ab74" />
              <stop offset="100%" stopColor="#c98d54" />
            </linearGradient>
            <linearGradient id="glassMagic" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4a9c0" stopOpacity="0.16" />
              <stop offset="35%" stopColor="#ffd98e" stopOpacity="0.1" />
              <stop offset="65%" stopColor="#a3ddb8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#9bcbe6" stopOpacity="0.16" />
            </linearGradient>
          </defs>

          {/* glass body fill + fairy lights + notes */}
          <path d={BODY_PATH} fill="url(#glassFill)" />
          <path d={BODY_PATH} fill="url(#glassMagic)" />
          <g clipPath="url(#jarBody)">
            <path d={`M ${FAIRY_WIRE}`} fill="none" stroke="#d9c2a3" strokeWidth="1" opacity="0.5" />
            {FAIRY_LIGHTS.map((light, i) => (
              <circle
                key={i}
                cx={light.x}
                cy={light.y}
                r="4"
                fill={light.color}
                className="animate-twinkle"
                style={{
                  animationDelay: light.delay,
                  filter: `drop-shadow(0 0 4px ${light.color})`,
                }}
              />
            ))}
            {notes.map((note, i) => (
              <g key={i} transform={`translate(${note.x} ${note.y}) rotate(${note.rotation})`}>
                <g
                  className="animate-note-bob"
                  style={{ animationDelay: `${note.delay}s` }}
                >
                  <rect x={-11} y={-7} width={22} height={14} rx={2} fill={note.color} stroke="#fffaf3" strokeWidth="1" />
                  <path d="M -11 -7 L 0 -1 L -11 5 Z" fill="rgba(255,255,255,0.35)" />
                </g>
              </g>
            ))}
          </g>

          {/* jar glass outline */}
          <path d={BODY_PATH} fill="none" stroke="#e08a5b" strokeWidth="4" opacity="0.9" />

          {/* neck */}
          <path
            d="M80 108 L78 60 Q78 50 88 50 L132 50 Q142 50 142 60 L140 108"
            fill="url(#glassFill)"
            stroke="#e08a5b"
            strokeWidth="4"
            opacity="0.9"
          />

          {/* shoulder highlight ellipse */}
          <ellipse cx="110" cy="108" rx="66" ry="7" fill="#ffffff" opacity="0.15" />

          {/* twine wrap around the neck */}
          <g stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
            <path d="M77 68 L143 62" />
            <path d="M77 76 L143 70" />
            <path d="M77 84 L143 78" />
          </g>
          {/* twine bow */}
          <g transform="translate(150 72)">
            <circle r="4" fill="#a97c50" />
            <path d="M0 0 Q14 -10 20 2 Q14 6 0 0" fill="none" stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0 0 Q14 12 22 6 Q14 -2 0 0" fill="none" stroke="#a97c50" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* dried-flower accents */}
          <g transform="translate(68 66) scale(0.8)" className="animate-petal-sway" style={{ transformOrigin: "68px 66px" }}>
            <Petal color="#f4a9c0" />
          </g>
          <g transform="translate(168 84) scale(0.65)" className="animate-petal-sway" style={{ transformOrigin: "168px 84px", animationDelay: "1.2s" }}>
            <Petal color="#a3ddb8" />
          </g>

          {/* cork stopper */}
          <path
            d="M72 24 Q72 14 84 14 L136 14 Q148 14 148 24 L148 54 Q148 60 136 60 L84 60 Q72 60 72 54 Z"
            fill="url(#corkGrain)"
            stroke="#b97f47"
            strokeWidth="2"
          />
          <ellipse cx="110" cy="18" rx="38" ry="6" fill="#eec08a" />
          <path d="M76 30 L144 30" stroke="#b97f47" strokeWidth="1.5" opacity="0.5" />
          <path d="M76 40 L144 40" stroke="#b97f47" strokeWidth="1.5" opacity="0.5" />
          <path d="M76 50 L144 50" stroke="#b97f47" strokeWidth="1.5" opacity="0.5" />

          {/* glass shine streaks */}
          <path d="M54 130 L48 270" stroke="#fffaf3" strokeWidth="7" strokeLinecap="round" opacity="0.28" />
          <path d="M172 140 L168 240" stroke="#fffaf3" strokeWidth="4" strokeLinecap="round" opacity="0.18" />

          {/* star gem embedded in the cork top */}
          <g transform="translate(110 19)" className="animate-twinkle">
            <path
              d={sparklePath(6)}
              fill="#fff2c2"
              style={{ filter: "drop-shadow(0 0 4px #ffd98e)" }}
            />
          </g>

          {/* sparkle dust drifting up from the jar */}
          {SPARKLES.map((s, i) => (
            <Sparkle key={i} {...s} />
          ))}
        </svg>

        <div className="absolute left-1/2 top-[112px] -translate-x-1/2 rotate-[-4deg] rounded-sm border border-dashed border-accent/40 bg-card px-3 py-1 text-center shadow-sm">
          <p className="font-hand text-base leading-none text-foreground whitespace-nowrap">
            ♡ Memories Together ♡
          </p>
        </div>
      </div>
    </div>
  );
}
