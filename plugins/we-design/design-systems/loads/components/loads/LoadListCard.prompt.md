The production load card used on the **All Loads** and **vehicle-anchored** listing screens. Data-driven exactly like the app: optional header/countdown/OTP strips, the green-circle/red-square address ladder, icon detail rows (a `GREEN` row becomes a violet pill), an optional thunder sticky pill, and one of four footer variants.

```jsx
// Quote footer (default new-load card)
<LoadListCard
  headerWidget={{ iconSrc: 'assets/icons/loads/clock.svg', text: 'Closes in <b>04:32</b>' }}
  addresses={[
    { type: 'LOADING', heading: 'Jaipur, Rajasthan', subHeading: 'Sitapura' },
    { type: 'UNLOADING', heading: 'Surat, Gujarat', subHeading: 'Sachin GIDC' },
  ]}
  items={[
    { iconSrc: 'assets/icons/loads/truck-gold.svg', desc: '32 ft Multi-axle · Full load' },
    { iconSrc: 'assets/icons/loads/magic.svg', desc: 'Earn 12% more on this lane', color: 'GREEN' },
  ]}
  footer={{ variant: 'quote', color: 'OK', desc: 'Expected price', amount: '₹48,000', buttonDesc: 'Send Quote' }}
/>

// Other footers:
footer={{ variant: 'confirm', desc: 'Token amount', amount: '₹2,000', buttonDesc: 'Confirm Load' }}
footer={{ variant: 'accept', buttonDesc: 'Accept Load' }}
footer={{ variant: 'bidding', desc: 'Bidding closes in 02:00 min', buttonDesc: 'Place Bid', rejectDesc: 'Not interested' }}
```

Footer `color` (quote only): `OK` (green tint + green CTA), `RED` (pink tint + red CTA), `GOLDEN` (gray tint + green CTA). Pass icon URLs from `assets/icons/loads/`.
