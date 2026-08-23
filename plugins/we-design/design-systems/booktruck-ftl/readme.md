# BookTruck FTL (Full Truck Load)

Consumer booking app for **full truck load** — a distinct product from Loads (part truck load / PTL
marketplace). Same WheelsEye org, different design language: DM Sans, sky-blue home band, blue accent.

## Status

- **Onboarded from the live Figma file** (Booking Flow V3, `aBEY8fyww5wwaFJrbuItTN`) — no code
  design-system export exists yet, so tokens were captured with `get_variable_defs` and rebuilt as
  native variables in our sandbox (`Y8mqUPBBDR7OF3XhP7Cgo2`). See `tokens.json` for the set + flags.
- Source file is **read-only for the agent** (Figma requires a Full seat for MCP edits on files the
  connector account doesn't own). All work happens in the sandbox file; the source is never touched.
- Code export + adherence lint: **pending** (needs the BookTruck app repo export).

## Domain vocabulary (identification factor)

full truck, part load, loading location, via-point, OD (origin-destination), re-book,
frequent trips, book any truck, PIN codes.

## Proven flows

- FTL Home duplicated faithfully + redesigned dev-ready (see `docs/booktruck-ftl-home-handoff.md`).
