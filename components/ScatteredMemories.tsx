import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { memories } from "@/lib/memories";

const PICKS = [
  { id: "1", top: "26%", left: "6%", rotate: -9 },
  { id: "8", top: "62%", left: "4%", rotate: 8 },
  { id: "4", top: "24%", left: "84%", rotate: 7 },
  { id: "12", top: "64%", left: "86%", rotate: -7 },
];

export default function ScatteredMemories() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {PICKS.map((p, i) => {
        const memory = memories.find((m) => m.id === p.id);
        if (!memory?.image) return null;
        return (
          <div
            key={p.id}
            className="animate-float absolute rounded-sm bg-card p-1.5 shadow-lg"
            style={{
              top: p.top,
              left: p.left,
              transform: `rotate(${p.rotate}deg)`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <Image
              src={`${basePath}${memory.image}`}
              alt=""
              width={70}
              height={90}
              className="h-[90px] w-[70px] object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
