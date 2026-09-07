// Mirrors the basePath computed in next.config.ts. Needs the NEXT_PUBLIC_
// prefix so its value gets inlined into client-side code, not just the
// Node-side config.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
