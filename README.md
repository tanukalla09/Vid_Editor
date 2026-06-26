# Vid_Editor (ClipAI)

Full-stack video editing workflow: import YouTube videos, create clips, add captions, search stock assets, and publish to social platforms.

## Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand, TanStack Query
- **Backend:** FastAPI, MongoDB (Beanie), Celery + Redis, yt-dlp, ffmpeg, Cloudinary

See [KT.md](./KT.md) for detailed architecture and API reference.

## Local development

### Backend

1. Create a virtual environment and install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
2. Copy `backend/.env.example` to `backend/.env` and fill in MongoDB, Redis, JWT, and API keys.
3. Start MongoDB and Redis locally.
4. Run the API:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
5. Start a Celery worker (optional but required for downloads/clips):
   ```bash
   celery -A app.celery_worker.celery_app worker --loglevel=info
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Copy `frontend/.env.example` to `frontend/.env.local` and set `NEXT_PUBLIC_API_URL`.
3. Run the dev server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Deploy frontend (Vercel)

1. Import the repo in [Vercel](https://vercel.com) and set **Root Directory** to `frontend`.
2. Add environment variable: `NEXT_PUBLIC_API_URL` → your deployed backend URL.
3. Deploy. The included `frontend/vercel.json` configures the Next.js build.

The FastAPI backend requires MongoDB, Redis, Celery, and ffmpeg; host it on a platform suited for long-running workers (e.g. Railway, Render, Fly.io), not Vercel serverless.

## Scripts

| Location   | Command           | Description        |
|-----------|-------------------|--------------------|
| frontend  | `npm run dev`     | Dev server         |
| frontend  | `npm run build`   | Production build   |
| frontend  | `npm run lint`    | ESLint             |
