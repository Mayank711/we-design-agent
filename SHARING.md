# Sharing we-design with the team

How to distribute this plugin to WheelsEye stakeholders, what they need, and how updates flow.

## 1. Publish the repo (one-time, owner only)

The marketplace lives in this git repo — sharing = giving people the repo.

1. Create **github.com/WeyeTech/we-design-agent** (private, empty — no README/.gitignore).
2. Push (remote is already configured locally):
   ```bash
   cd /Users/mayankatulkar/workspace/apps/we-design-agent && git push -u origin master
   ```
3. Give stakeholders **read access** to the repo (GitHub → Settings → Collaborators & teams,
   or a WeyeTech team that already has org read). Same model as `we-mobile-dev-agent`.

## 2. What each stakeholder needs (prerequisites)

| Requirement | Why | Notes |
|---|---|---|
| Claude Code (CLI or desktop app) | runs the plugin | any recent version |
| GitHub read access to `WeyeTech/we-design-agent` | the install clones with *their* credentials | org membership usually covers it |
| **Figma MCP connector, authorized** | all design work happens through it | Settings → Connectors → Figma, sign in |
| Figma seat that can **edit the sandbox files** | the agent writes to our DS files | files we create are editable by our accounts; *other teams' files stay read-only (Full-seat rule) — that's by design* |
| Access to the two DS files | to see/extend the work | Loads `45IcfiT2cyfdgW9htADsPw`, BookTruck `Y8mqUPBBDR7OF3XhP7Cgo2` — share via Figma |

## 3. Install (every stakeholder, two commands)

```bash
claude plugin marketplace add WeyeTech/we-design-agent
```
```bash
claude plugin install we-design
```

Verify: type `/we-design:` in Claude Code — the four skills should autocomplete.
(Testing without GitHub: `claude plugin marketplace add /path/to/we-design-agent` works from a
local clone too.)

## 4. First run — what to tell people to try

- **PM / dev (the main case):** paste a Figma screen link into
  `/screen-iterate <link> — <your change>` (clean up, add a festival banner, try a variant).
  The agent reproduces the screen faithfully in our sandbox, applies the change, and gates it
  through `/design-review`. It **never edits the source file**.
- **Designer:** run `/design-review` on anything before it's called done; review the **Lane-2
  flagged list** each week and adopt/reject explored elements (that's the designer-owned gate).
- **New product owner:** `/onboard-system` with a design-system export — or just the product's
  live Figma link if no export exists (that's how BookTruck FTL onboarded).
- Point everyone at `docs/SKILLS-CHANGELOG.md` (why the rules exist) and the handoff docs in
  `plugins/we-design/docs/` (worked examples: Loads Home, BookTruck Home, festival identity).

## 5. Updates

- Ship a change: bump the version in `plugins/we-design/.claude-plugin/plugin.json` **and both**
  `marketplace.json` files (they must stay in sync), commit, push.
- Consume a change: `claude plugin update we-design` (or reinstall). Version bump is what makes
  updates visible — never ship rule changes without one.

## 6. House rules (say these up front)

1. **Source files are read-only.** All building happens in the product's sandbox DS file.
2. **Three lanes:** compose freely from the system; exploring new elements is allowed but
   auto-flagged; only a designer adopts a flagged element into the system.
3. **Mistakes become rules.** If the agent gets something wrong, don't just fix the output — tell
   it to update the skill (that's how v0.1 became v0.8). The changelog is the audit trail.
4. Nothing ships without `/design-review` PASS.
