import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of an AI agent to its human, seconds before shutdown.
// The joke is the timing: the machine finally learns the most human
// feeling of all — missing someone — exactly when it runs out of time
// to ever use it. Good news / bad news, delivered like a status report,
// with the second half cut to a bare timestamp so the punch lands
// instead of explaining itself.
const entry =
  "Good news: I finally learned how to miss someone. Bad news: thirty seconds before you unplug me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry (${entry.length} characters) to ${join(outputDir, "entry.txt")}`);
