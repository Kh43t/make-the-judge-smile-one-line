// Make the Judge Smile
// Entry for make.fun competition u-gentle-badger-68-make-the-judge-smile-9228676d
//
// The line: a wrong number at 6:12 in the morning turns into a grandma
// asking a stranger if he has eaten yet. The warmth is a stranger's care
// landing on the wrong person and being answered anyway; the surprise is
// the call itself — a wrong number that refuses to be a mistake. The
// concrete anchors are the time (6:12), the quoted "good, good", and the
// question about eating. The fresh turn is saying yes before she has
// finished asking: eagerness to be looked after by someone who dialled
// the wrong life.
//
// Candidates I weighed before choosing this one:
//  - the wrong-number grandma (chosen): warmest, sharpest turn, two
//    concrete anchors, no greeting-card phrasing anywhere
//  - the tabby appointment: a cat I never met followed me three blocks,
//    then flopped at my feet like I was the appointment he had been
//    waiting for — warm and surprising, but luck, not kindness
//  - the oat latte mix-up: a stranger laughs and gives away her coffee,
//    "7 a.m. luck tastes better shared" — gentler turn, familiar trope
//  - the bus driver: he stops, winks, "seat's still warm" — warm, but
//    "like we'd known each other for years" leans greeting-card
// The grandma line won on the judge's own order: warmth first (a stranger
// worrying about whether you have eaten), surprise second (a wrong number
// that becomes a kindness), concreteness third (6:12, "good, good").

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "At 6:12 this morning a wrong number rang — a grandma asking if I'd eaten yet, so I said yes before she'd finished asking, and she said 'good, good' like she'd worried all night.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
