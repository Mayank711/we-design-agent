The primary content unit of WheelsEye Loads — a bookable load. Composes `RouteLadder`, icon detail rows, and a colored fare footer.

```jsx
<LoadCard
  banner="Closes in 04:32" bannerTone="accept"
  stops={[
    { heading: 'Jaipur, Rajasthan', type: 'LOADING' },
    { heading: 'Surat, Gujarat', type: 'UNLOADING' },
  ]}
  details={[
    { text: '32 ft Multi-axle • Full load' },
    { text: '21 Tonnes • Cement' },
  ]}
  fareLabel="Fixed price" fare="₹48,000"
  footerTone="ok" ctaLabel="Book load" onCta={book}
/>
```

`footerTone`/`bannerTone`: `ok` (green), `accept` (gold), `alert` (red). Pass `premiumNote={<PremiumPill>…</PremiumPill>}` to surface a bid nudge.
