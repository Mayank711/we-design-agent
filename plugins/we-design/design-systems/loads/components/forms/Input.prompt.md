Labeled text field for forms (onboarding, KYC, bank details).

```jsx
<Input label="Vehicle number" placeholder="HR55AB1234" value={v} onChange={e => set(e.target.value)} />
<Input label="Mobile" inputMode="numeric" maxLength={10} error="Enter a valid number" />
```

Pass `prefix` for an inline glyph, `helper`/`error` for sub-text (error turns the border + text red).
