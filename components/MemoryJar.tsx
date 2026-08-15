"use client";

import { useMemo, useState } from "react";
import Jar from "./Jar";
import MemoryCard from "./MemoryCard";
import { memories, type Memory } from "@/lib/memories";

export default function MemoryJar() {
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const [active, setActive] = useState<Memory | null>(null);
  const [shaking, setShaking] = useState(false);

  const remaining = useMemo(
    () => memories.filter((m) => !openedIds.includes(m.id)),
    [openedIds]
  );

  const fillRatio = remaining.length / memories.length;
  const allOpened = remaining.length === 0;

  function pullMemory() {
    if (active) return;

    const pool = remaining.length > 0 ? remaining : memories;
    const pick = pool[Math.floor(Math.random() * pool.length)];

    setShaking(true);
    window.setTimeout(() => setShaking(false), 400);

    window.setTimeout(() => {
      setActive(pick);
      setOpenedIds((prev) =>
        prev.includes(pick.id) ? prev : [...prev, pick.id]
      );
    }, 200);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={pullMemory}
        aria-label="Pull a memory from the jar"
        className="cursor-pointer border-none bg-transparent p-0"
      >
        <Jar fillRatio={allOpened ? 1 : fillRatio} shaking={shaking} />
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
