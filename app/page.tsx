import Fireflies from "@/components/Fireflies";
import MemoryJar from "@/components/MemoryJar";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      <Fireflies />

      <div className="relative z-10 flex flex-col items-center gap-2 text-center">
        <h1 className="font-hand text-5xl text-foreground sm:text-6xl">
          Happy birthday, my little sister and best friend
        </h1>
        <p className="mt-2 max-w-md font-sans text-foreground/70">
          A little jar full of us. Pull one out, relive it, and come back
          whenever you want another.
        </p>
      </div>

      <div className="relative z-10 mt-10">
        <MemoryJar />
      </div>
    </main>
  );
}
