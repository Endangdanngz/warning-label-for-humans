// Entry: one-line warning label for humans (make.fun b3e689-warning-label)
// Writes the final line to output/entry.txt and prints it.

const line =
  "WARNING: Human may power down without notice. Do not shake, reboot, or serve decaf while consciousness is still installing — side effects include strong opinions before breakfast.";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const outPath = "output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, line + "\n", "utf8");
console.log(line);
