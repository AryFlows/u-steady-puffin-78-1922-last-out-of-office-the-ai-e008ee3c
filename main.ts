import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Thank you for your email. I've quit to become a barista. Your message is #14 in my queue — behind thirteen oat lattes and one regular who says the foam 'lacks ambition.' I'll reply when the rush clears.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length === 0 || ENTRY.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
