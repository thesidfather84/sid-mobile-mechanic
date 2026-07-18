import fs from "node:fs";
import path from "node:path";

/**
 * Checks (at build time) whether a file exists inside /public.
 * Used to swap placeholder panels for real images automatically:
 * drop the image file in place, rebuild, and the site picks it up.
 */
export function publicFileExists(relativePath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", relativePath));
}
