---
name: wheelseye-loads-design
description: Use this skill to generate well-branded interfaces and assets for WheelsEye Loads (the load/freight marketplace in the WheelsEye trucking app), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick orientation:
- `styles.css` is the single entry point — link it to inherit all color/type/spacing tokens.
- Tokens live in `tokens/`. Foundation specimens in `guidelines/`.
- Reusable React components in `components/<group>/` (core, forms, loads, navigation). Each has a `.prompt.md` with usage.
- A full click-through app recreation is in `ui_kits/loads-app/`.
- Brand assets (logo, icons, illustrations) in `assets/`.

Key brand rules: green `#2EA750` = primary/go, red `#D33636` = stop/unload, Baloo 2 type, 12px-radius white cards on a `#F4F5FA` page, the green-circle/red-square route ladder is the signature motif. Mobile-first, multilingual (English/Hindi/Kannada), plain action-first copy addressing the operator as "you".
