// Post-build fix for a Next.js static-export bug on Windows.
//
// The export writes each page's navigation data ("segment" files) using a
// Windows path, so `__next.about-us\__PAGE__.txt` becomes a folder
// `__next.about-us/` holding `__PAGE__.txt`. The browser asks for the flat
// name `__next.about-us.__PAGE__.txt` (every "/" in the segment path becomes
// "."), gets a 404, and the page doesn't change on click until a refresh.
// Builds on Linux/macOS already produce flat names, so this is a no-op there.
//
// Runs automatically after `next build` (see package.json).
import { promises as fs } from "node:fs";
import path from "node:path";

const OUT = path.resolve(process.argv[2] ?? "out");

async function walk(dir, found = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    // A folder named `__next.<segment>` is the broken output: flatten it.
    if (entry.name.startsWith("__next.")) found.push(full);
    else await walk(full, found);
  }
  return found;
}

async function filesIn(dir, prefix = "") {
  const files = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}.${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await filesIn(full, rel)));
    else files.push({ full, rel });
  }
  return files;
}

let moved = 0;
for (const folder of await walk(OUT)) {
  const parent = path.dirname(folder);
  for (const { full, rel } of await filesIn(folder)) {
    const flat = path.join(parent, `${path.basename(folder)}.${rel}`);
    await fs.rename(full, flat);
    moved++;
  }
  await fs.rm(folder, { recursive: true, force: true });
}
console.log(`fix-segment-files: flattened ${moved} navigation data file(s) in ${path.relative(process.cwd(), OUT) || "."}`);
