import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fixed: counting sheep now works. Sheep are capped at 12 per night; additional sheep will be queued.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
console.log(entry);
console.log(`chars: ${entry.length}`);
