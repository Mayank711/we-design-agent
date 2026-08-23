Route ladder showing pickup → drop stops. Green circle = loading, red square = unloading, joined by a dashed line.

```jsx
<RouteLadder stops={[
  { heading: 'Jaipur, Rajasthan', subHeading: 'Sitapura Industrial Area', type: 'LOADING' },
  { heading: 'Surat, Gujarat', subHeading: 'Sachin GIDC', type: 'UNLOADING' },
]} />
```

Always end with an `UNLOADING` stop so the red square reads as the destination.
