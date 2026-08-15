import Image from "next/image";
import type { Memory } from "@/lib/memories";

type MemoryCardProps = {
  memory: Memory;
  onClose: () => void;
};

export default function MemoryCard({ memory, onClose }: MemoryCardProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#5b3a29]/40 backdrop-blur-sm px-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-card p-6 shadow-2xl animate-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground/70 transition hover:bg-accent-soft hover:text-foreground"
        >
          &times;
        </button>

        {memory.image && (
          <div className="mb-4 overflow-hidden rounded-2xl">
            <Image
              src={memory.image}
              alt={memory.caption}
              width={600}
              height={450}
              className="h-56 w-full object-cover"
            />
          </div>
        )}

        {memory.date && (
          <p className="mb-1 text-sm uppercase tracking-wide text-accent">{memory.date}</p>
        )}
        <p className="font-hand text-2xl leading-snug text-foreground">{memory.caption}</p>
      </div>
    </div>
  );
}
