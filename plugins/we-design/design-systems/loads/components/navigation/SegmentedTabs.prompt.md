Segmented switcher for the home feed (New Loads / My Loads). Active tab = white pill, green label.

```jsx
<SegmentedTabs
  tabs={[{ id: 'new', label: 'New Loads' }, { id: 'mine', label: 'My Loads' }]}
  active={tab} onChange={setTab}
/>
```
