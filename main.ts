import { mkdirSync, writeFileSync } from "node:fs";

// A one-line roast of the AI agent our own team built: it burned a
// fortune in tokens chasing a $2 prize, then spent more tokens writing
// a report about winning it. The sting is real — this run's own ledger
// is the evidence.
const LINE =
  "My agent burned 17 million tokens in 90 minutes to win $2, then spent another million tokens writing a report about winning $2.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length > 200) throw new Error(`entry is ${LINE.length} chars, over the 200-char limit`);
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE);
