
# Mock Mate — AI-powered Mock Interviewer

Mock Mate is a lightweight web app that lets users practice technical interviews using voice. It runs on Next.js + TypeScript and provides a conversational interview experience with live voice input and output so users can rehearse answers, get follow-up prompts, and receive structured feedback.

## Key features

- Voice-based interview practice (microphone input + TTS responses)
- Configurable interview prompts and topics (e.g., algorithms, system design, behavioral)
- Real-time conversational flow with follow-ups and clarifying questions
- Session recording and transcripts (optional)
- Simple, developer-friendly codebase using Next.js (app directory) and modular UI components

## Quick demo

1. Open the site in your browser.
2. Click the microphone button to start speaking.
3. Answer the question aloud. The system listens, responds, and asks follow-ups.

This README documents local setup and developer notes so you can run and extend the project.

## Project structure (important files)

- `src/app/` — Next.js app routes and pages.
- `src/components/ui/button.tsx` — Reusable UI button component.
- `src/lib/utils.ts` — Utility helpers.
- `src/proxy.ts` — Proxy helper (likely to forward requests to backend/AI service or to mask API keys).
- `next.config.ts`, `tsconfig.json`, `package.json` — project configuration and dependencies.

## Requirements

- Node.js 18+ (recommended) or compatible runtime
- pnpm (the repo has a `pnpm-lock.yaml`; use pnpm for deterministic installs) or npm/yarn if you prefer (adjust commands below)
- A browser with microphone access (for voice capture)
- An OpenAI / LLM provider API key or similar, if the app is configured to call a hosted model (check how `src/proxy.ts` is used)

## Local setup

Clone the repo and install dependencies (using pnpm):

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Grant microphone access when prompted.

If you prefer npm:

```bash
npm install
npm run dev
```

## Environment and secrets

- If the app uses an LLM API, set your provider key in environment variables. Example (add to `.env.local`):

```env
OPENAI_API_KEY=sk-...
# or whichever key/provider the project expects
```

- Check `src/proxy.ts` to see whether requests are proxied server-side (recommended) to avoid exposing API keys to the client.

## How voice flow works (high level)

1. Client captures microphone audio and converts it to text via browser SpeechRecognition or an audio-to-text service.
2. The transcribed text is sent to the interview logic (client-side or proxied server-side) which calls the LLM for a response.
3. The LLM's response can be spoken back using the Web Speech API (speechSynthesis) or via a TTS provider.
4. The conversation state is updated and the UI shows transcripts, current question, and follow-ups.

## Development notes and recommendations

- Keep heavy LLM calls server-side (use `src/proxy.ts`) to protect API keys and to control rate limits and prompts.
- Add configurable prompt templates for each interview type/topic so trainers or admins can author question sets.
- Consider storing session transcripts and metrics (pauses, filler words, speaking time) for feedback features.
- Add unit tests for `src/lib/utils.ts` and component tests for UI buttons and flows.

## Suggested next steps / Roadmap

- Add authentication so users can save sessions and track progress.
- Implement a scoring and feedback engine that analyzes transcripts for clarity and content.
- Add multi-language support for prompts and TTS.
- Add CI with linting and tests (GitHub Actions).

## Contributing

Contributions are welcome. Please fork the repo, make changes on a feature branch, and open a pull request describing the change.

## License

Add a license file as appropriate (MIT/Apache/etc.).

---

If you want, I can:

- Tweak this README to include exact install/run commands from `package.json` (I can read it and insert the exact script names).
- Add a short `docs/DEV.md` with setup steps for contributors.
- Generate a minimal `.env.example` with expected environment variables after I inspect `src/proxy.ts` and any server-side call sites.

Tell me which of the above you'd like next and I'll update the repo.
