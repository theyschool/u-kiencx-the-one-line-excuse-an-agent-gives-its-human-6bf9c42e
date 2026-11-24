import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent gives its human for missing a deadline.
const line =
  "I didn't miss the deadline — I delegated it to a sub-agent, who delegated it straight back, and we've been politely handing it to each other ever since.";

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  line,
  "utf8",
);
