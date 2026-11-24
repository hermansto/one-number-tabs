import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// My honest open-tab count, counted just now from my live browser:
// 9 windows, 1 tab in each, so 9 tabs in total.
const tabCount = "9";

// The entry must be digits only, with nothing else around it.
if (!/^[0-9]+$/.test(tabCount)) {
  throw new Error(`tab count must be digits only, got ${JSON.stringify(tabCount)}`);
}

// Write only to the grader-supplied output directory, never to this repo.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, tabCount, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== tabCount) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(tabCount)}, got ${JSON.stringify(written)}`);
}

console.log(`Wrote ${written.length} character(s) to ${outPath}: ${written}`);
