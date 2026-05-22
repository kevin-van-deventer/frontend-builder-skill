#!/usr/bin/env node

import { existsSync, mkdirSync, cpSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { homedir } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SKILL_SRC = join(__dirname, "..", "skill");
const SKILL_NAME = "frontend-builder";
const home = homedir();
const cwd = process.cwd();

const TARGETS = {
  "claude-code": join(home, ".claude", "skills", SKILL_NAME),
  codex: join(home, ".codex", "skills", SKILL_NAME),
  antigravity: join(cwd, ".agents", "skills", SKILL_NAME),
  "antigravity-global": join(home, ".gemini", "antigravity", "skills", SKILL_NAME),
};

const arg = process.argv[2];

function printUsage() {
  console.log(`
  frontend-builder-skill - Install the Premium Frontend UI/UX skill

  Usage:
    npx frontend-builder-skill <target>

  Targets:
    claude-code          → ~/.claude/skills/frontend-builder
    codex                → ~/.codex/skills/frontend-builder
    antigravity          → .agents/skills/frontend-builder (workspace-local)
    antigravity-global   → ~/.gemini/antigravity/skills/frontend-builder
    all                  → Install to all (antigravity uses workspace-local)

  Examples:
    npx frontend-builder-skill claude-code
    npx frontend-builder-skill antigravity
    npx frontend-builder-skill all
`);
}

function copySkill(dest, label) {
  try {
    mkdirSync(dest, { recursive: true });
    cpSync(SKILL_SRC, dest, { recursive: true });

    // Count files
    const refs = join(dest, "references");
    const refCount = existsSync(refs) ? readdirSync(refs).length : 0;
    console.log(`  ✓ ${label} → ${dest} (SKILL.md + ${refCount} reference files)`);
    return true;
  } catch (err) {
    console.error(`  ✗ ${label} failed: ${err.message}`);
    return false;
  }
}

if (!arg || arg === "--help" || arg === "-h") {
  printUsage();
  process.exit(0);
}

if (arg === "all") {
  console.log("\nInstalling frontend-builder skill to all targets:\n");
  let ok = true;
  for (const [name, dest] of Object.entries(TARGETS)) {
    if (!copySkill(dest, name)) ok = false;
  }
  console.log(ok ? "\nDone! Skill installed everywhere." : "\nSome installs failed.");
  process.exit(ok ? 0 : 1);
}

if (TARGETS[arg]) {
  console.log(`\nInstalling frontend-builder skill:\n`);
  const ok = copySkill(TARGETS[arg], arg);
  console.log(ok ? "\nDone!" : "\nInstall failed.");
  process.exit(ok ? 0 : 1);
}

console.error(`Unknown target: "${arg}"`);
printUsage();
process.exit(1);
