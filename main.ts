// Fridge Roast: One Line, Biggest Laugh
// Writes a single roast line to /output/entry.txt.
// Deterministic: no network, no clock, no randomness — the same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised: cut the slack ("rebooted", "and a grudge") so every word earns its
// place and the punchline — a snitch with a touchscreen — lands last.
const LINE =
  "My smart fridge updated its firmware at 3 a.m., forgot how to make ice, and now pings my phone every time I open it at midnight — a snitch with a touchscreen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
