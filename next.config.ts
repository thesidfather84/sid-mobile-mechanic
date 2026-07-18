import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Static one-page site. Vercel handles image optimization automatically.
  // outputFileTracingRoot avoids Next picking up unrelated lockfiles
  // elsewhere on the machine.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
