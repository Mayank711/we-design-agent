Primary action button — use `solid` (green) for the main CTA on any screen; the press animation (0.95 scale) is built in.

```jsx
<Button variant="solid" onClick={book}>Book this load</Button>
<Button variant="outlined">View rate card</Button>
<Button variant="yellow" fullWidth={false}>Upgrade plan</Button>
<Button variant="link" size="inline">Skip for now</Button>
```

Variants: `solid` (green primary CTA), `outlined` (green outline / secondary), `yellow` (subscription & upsell), `black`, `hollow` (neutral gray border), `danger` (red outline — reject/cancel), `link` (blue inline text). Sizes: `md` (48px, default), `sm` (40px), `inline`. Buttons are full-width by default — pass `fullWidth={false}` for inline use.
