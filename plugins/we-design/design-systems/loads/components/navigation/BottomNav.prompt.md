Primary bottom navigation. Active item = green icon + label. Pass icon nodes (the design system ships truck/home/lanes/help glyphs in `assets/icons`).

```jsx
<BottomNav
  active={tab} onChange={setTab}
  items={[
    { id: 'loads', label: 'Loads', icon: <img src="assets/icons/truck-outlined.svg" />, activeIcon: <img src="assets/icons/truck-filled.svg" /> },
    { id: 'lanes', label: 'Lanes', icon: <img src="assets/icons/lanes-outlined.svg" /> },
    { id: 'help', label: 'Help', icon: <img src="assets/icons/help-outlined.svg" /> },
  ]}
/>
```
