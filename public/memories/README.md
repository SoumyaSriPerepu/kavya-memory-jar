# Photos go here

Drop your photo files in this folder (e.g. `beach-trip.jpg`), then reference
them from `lib/memories.ts` like:

```ts
{
  id: "1",
  caption: "That time we stayed up till 3am talking about nothing.",
  date: "Summer 2019",
  image: "/memories/beach-trip.jpg",
}
```

Memories without an `image` field just show as a text note — no image required.
