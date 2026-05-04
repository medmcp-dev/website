# Medical MCP — Developer Landing Page

A single-page, dark-mode marketing site positioning Medical MCP as infrastructure for AI medical agents (Stripe/Vercel/OpenAI docs aesthetic).

## Design system

- Dark theme by default (`dark` class on `<html>`)
- Background: near-black (`#0A0A0A` / HSL equivalent), elevated surfaces slightly lighter
- Accent: a clinical teal/emerald (`#10B981`-ish) for CTAs, code highlights, and risk indicators
- Typography: Inter for UI, JetBrains Mono for code/API output
- Subtle grid/dot background in hero, hairline borders, generous spacing
- Tokens added to `src/index.css` and `tailwind.config.ts` (HSL variables)

## Page sections (in `src/pages/Index.tsx`, composed of small components in `src/components/landing/`)

1. **Nav bar** — wordmark "Medical MCP", links (Docs, Use cases, API), "Request access" button
2. **Hero**
   - H1: "Medical risk layer for AI agents"
   - Sub: "Turn raw symptoms into structured clinical risk signals using a standardized MCP API."
   - CTAs: "Request API access" (primary), "View documentation" (ghost)
   - Right side: terminal-style card showing a sample request → JSON response
3. **Problem** — "AI medical agents are built on inconsistent reasoning" with 4 bullet cards
4. **Solution** — "A standardized MCP layer for medical AI systems" with short explainer + 3 feature pills (canonical schema, deterministic output, confidence scoring)
5. **Interactive demo** (key section)
   - Editable textarea pre-filled with `chest pain for 2 hours radiating to left arm`
   - "Analyze" button → simulated 600ms latency, then animated JSON output card:
     ```
     {
       "risk_level": "HIGH",
       "confidence": 0.87,
       "symptom_id": "SYMPTOM_CHEST_PAIN",
       "triage": "urgent"
     }
     ```
   - Risk level rendered as colored pill (low=slate, medium=amber, high=orange, critical=red)
   - Client-side keyword matcher maps a handful of inputs (chest pain, headache, fever, rash, shortness of breath) to plausible structured outputs; default falls back to a generic LOW result
6. **Code example** — tabbed snippet (cURL / JavaScript / Python) with syntax-highlighted block and copy button; JS tab matches the spec exactly
7. **Use cases** — 4-card grid: symptom checkers, healthcare copilots, triage automation, telemedicine assistants
8. **Why it matters** — single centered paragraph block with quote-style treatment
9. **CTA section** — three buttons: Get API access, Read docs, Join waitlist (waitlist opens a simple email capture dialog using existing shadcn dialog + toast — no backend, just confirmation toast)
10. **Footer** — wordmark, small print "Developer infrastructure. Not a diagnostic tool.", minimal links

## Technical notes

- Force dark mode by adding `dark` class on `<html>` in `index.html`
- New components under `src/components/landing/`: `Nav`, `Hero`, `ProblemSection`, `SolutionSection`, `DemoSimulator`, `CodeExample`, `UseCases`, `WhyItMatters`, `FinalCTA`, `Footer`
- Use existing shadcn `Button`, `Card`, `Tabs`, `Dialog`, `Input`, `Textarea`, `Badge`, `toast`
- Update page `<title>` and meta description in `index.html` for "Medical MCP — Medical risk layer for AI agents"
- All copy stays infrastructure-focused; add a small disclaimer in footer to reinforce non-consumer positioning
