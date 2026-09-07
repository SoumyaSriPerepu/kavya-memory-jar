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
          </defs>

          {/* glass body fill + notes */}
          <path d={BODY_PATH} fill="url(#glassFill)" />
          <g clipPath="url(#jarBody)">
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
        </svg>

        <div className="absolute left-1/2 top-[112px] -translate-x-1/2 rotate-[-4deg] rounded-sm border border-dashed border-accent/40 bg-card px-3 py-1 text-center shadow-sm">
          <p className="font-hand text-base leading-none text-foreground whitespace-nowrap">
            ♡ Kavya&apos;s Memories ♡
          </p>
        </div>
      </div>
    </div>
  );
}
