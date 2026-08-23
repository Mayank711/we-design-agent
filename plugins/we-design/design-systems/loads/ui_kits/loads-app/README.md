# WheelsEye Loads — App UI Kit

A click-through recreation of the WheelsEye Loads truck-operator app, built entirely from the design system's component primitives.

## Files
- `index.html` — mounts the interactive app (open this).
- `screens.jsx` — `WelcomeScreen`, `HomeScreen`, `LoadDetailScreen`, and the phone-frame `App` shell. Exposed as `window.WheelsEyeApp`.

## Flow
1. **Welcome** — yellow hero, vehicle-type selection, Continue.
2. **Home feed** — green header (logo, language, alert toggle), New/My Loads segmented tabs, vehicle filter chips, a list of `LoadCard`s, bottom navigation.
3. **Load detail** — full route ladder, detail rows, loading-manager call, premium bid nudge, sticky fare footer with Book CTA.

## Composition
Screens use only DS components from `window.WheelsEyeLoadsDesignSystem_985cfc`: `Button`, `LoadCard`, `RouteLadder`, `SegmentedTabs`, `BottomNav`, `FilterChip`, `Badge`, `PremiumPill`, `ToggleSwitch`. Icons/logos come from `assets/`. Data is mocked inline — no network.
