import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces a self-contained server build so this can run in a small
  // Docker image on Cloud Run without needing node_modules copied in.
  output: "standalone",
  // Don't regenerate AGENTS.md / CLAUDE.md on every `next dev` run.
  agentRules: false,
};

export default nextConfig;
