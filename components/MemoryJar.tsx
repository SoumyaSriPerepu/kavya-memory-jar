"use client";

import { useMemo, useState } from "react";
import Jar from "./Jar";
import MemoryCard from "./MemoryCard";
import { memories, type Memory } from "@/lib/memories";

export default function MemoryJar() {
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const [active, setActive] = useState<Memory | null>(null);
  const [shaking, setShaking] = useState(false);
  const [popping, setPopping] = useState(false);

  const remaining = useMemo(
    () => memories.filter((m) => !openedIds.includes(m.id)),
    [openedIds]
  );

  const allOpened = remaining.length === 0;

  function pullMemory() {
    if (active || popping) return;

    const pool = remaining.length > 0 ? remaining : memories;
    const pick = pool[Math.floor(Math.random() * pool.length)];

    setShaking(true);
    setPopping(true);
    window.setTimeout(() => setShaking(false), 400);
    window.setTimeout(() => setPopping(false), 700);

    window.setTimeout(() => {
      setActive(pick);
      setOpenedIds((prev) =>
        prev.includes(pick.id) ? prev : [...prev, pick.id]
      );
    }, 550);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={pullMemory}
        aria-label="Pull a memory from the jar"
        className="cursor-pointer border-none bg-transparent p-0 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <Jar
          total={memories.length}
          remaining={allOpened ? memories.length : remaining.length}
          shaking={shaking}
          popping={popping}
        />
      </button>

      <p className="font-sans text-sm text-foreground/70">
        {allOpened
          ? "Every memory's been pulled — shake it again for a favorite."
          : `${remaining.length} of ${memories.length} memories left in the jar`}
      </p>

      <button
        onClick={pullMemory}
        className="rounded-full bg-accent px-8 py-3 font-sans text-base font-semibold text-white shadow-md transition hover:bg-accent/90 active:scale-95"
      >
        Pull a memory
      </button>

      {active && (
        <MemoryCard memory={active} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
