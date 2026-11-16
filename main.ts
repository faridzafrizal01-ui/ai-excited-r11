// Moon Loop — ai-excited-01 entry (r11, fresh build).
// Copies the artwork entry.png sitting next to this program into the
// make.fun output directory. Deterministic: the same bytes out, every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), outFile);
