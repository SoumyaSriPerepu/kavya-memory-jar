# Kavya's Memory Jar 🫙

A little birthday website: an animated jar of memories that reveals one at a
time when you pull from it.

## Personalize it before sending the link

1. Open [`lib/memories.ts`](lib/memories.ts) and replace the placeholder
   captions with real memories.
2. Drop any photos into [`public/memories/`](public/memories/) and reference
   them from the `image` field of each memory (see the README in that
   folder). Photos are optional — memories without one just show as a note.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

The project is a stock Next.js app, so it deploys to Vercel with zero
config:

```bash
npx vercel
```

or connect the GitHub repo at vercel.com/new and it'll auto-detect Next.js.

## Deploy to GCP (Cloud Run) later

A `Dockerfile` is already set up for this (Next.js "standalone" output).
Once you're ready to move it to GCP:

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/kavya-memory-jar
gcloud run deploy kavya-memory-jar \
  --image gcr.io/PROJECT_ID/kavya-memory-jar \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

Swap `PROJECT_ID` for your actual GCP project ID.
