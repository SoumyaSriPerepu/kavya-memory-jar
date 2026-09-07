import type { NextConfig } from "next";

// GitHub Pages serves this repo at /kavya-memory-jar/, so assets need that
// prefix when built in CI. Local dev keeps running at the root. Set via
// NEXT_PUBLIC_BASE_PATH (not GITHUB_ACTIONS) so the same value is available
// to client-side code — see lib/basePath.ts.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: GitHub Pages only serves static files, no Node server.
  output: "export",
  basePath,
  images: {
    // No image optimization server on GitHub Pages.
    unoptimized: true,
  },
  // Don't regenerate AGENTS.md / CLAUDE.md on every `next dev` run.
  agentRules: false,
};

export default nextConfig;
