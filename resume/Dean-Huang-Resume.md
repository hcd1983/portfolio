<!--
  Dean Huang — Resume（AI 跨領域整合 / Applied AI Engineering Lead）
  瀏覽器轉 PDF 建議：直接開同資料夾的 Dean-Huang-Resume.html → Cmd/Ctrl+P → Save as PDF
  本檔為可編輯來源；HTML 版在同一目錄。
-->

<div align="center">

# DEAN HUANG（欣迪）

**Applied AI Engineering Lead · Cross-Domain Integration · Frontend**

TypeScript · Claude Code Skills / MCP · PixiJS · Cocos Creator · Svelte / Vue / React · Jenkins CI/CD

AWS Certified AI Practitioner

[linkedin.com/in/Dean-6979939a](https://www.linkedin.com/in/Dean-6979939a/) · [github.com/hcd1983](https://github.com/hcd1983) · [it-monk.tw](https://it-monk.tw/) · [Portfolio](https://portfolio.hcd-design-studio.com/en/)

🇹🇼 Mandarin (native) · 🇬🇧 English (professional) · Fully remote ready

</div>

---

## Profile

I lead frontend at a game studio. The turn toward **applied AI** started at an AWS conference last year — I came away convinced this was how the work would be done from now on, and began converting the repetitive, predictable, cross-discipline work in the department into tooling that runs. Not "using AI to write a function," but rebuilding the process end to end.

When the team later went from five people to two without the delivery load dropping, that judgement paid off: the groundwork was already in place when the pressure arrived.

The result is a **semi-automated game production line**: design rules, math validation, art and audio generation, the frontend SDK, and post-launch analytics, each with agent-callable tooling, each stage feeding the next. Work that used to take several roles and a lot of meetings.

> **How I work now:** I set the architecture and the acceptance bar, agents produce, I verify. Models get replaced and output drifts, so the acceptance bar lives *outside* the model as a hard boundary — permission limits defined by a human, automated checks wired into CI that block the build when they fail.

---

## Snapshot

| 5 → 2 | 1 wk → 2 d | 80+ | 6 |
|:---:|:---:|:---:|:---:|
| Team size, delivery flat | Reskin turnaround | Titles still shipping | Pipeline stages wired |

---

## Core Skills

### AI & Automation
- **Claude Code Skills / MCP servers**: agent-callable workflows for deploy, analytics, doc sync, error triage, issue fixing
- Pipeline design across disciplines; machine-verifiable contracts as the handoff format
- A cross-project knowledge base (90+ repositories) giving agents the context that makes their output usable
- Hard boundaries: CI-enforced checks that block on failure, plus explicit limits on what an agent may decide
- Departmental adoption: building the tools, then getting a team to actually use them

### Game Client & Web
- **PixiJS 8** and **Cocos Creator + TypeScript**: gameplay, custom GLSL effects, texture/VRAM budgeting
- **Spine** runtime integration and format migration; low-memory device triage
- **TypeScript** daily; **Svelte**, **Vue** (primary), **React**; Nuxt / Vite / Next.js; **Electron** desktop tooling
- Networking: **WebSocket** with heartbeat and reconnection, **Protobuf**, HTTP; frontend–backend contract alignment

### Delivery & Data
- **Jenkins** CI/CD design and maintenance; DEV / STG / REL / PROD across 40 game types and 80+ reskinned variants
- Deploy manager and version dashboard; backup verification and environment alignment
- **ClickHouse-family** warehousing; re-runnable query and triage flows shared by ops and engineering

---

## Selected Outcomes

### 1. A semi-automated game production line
Broke building a game into six stages — design, math, art, audio, frontend, post-launch analytics — built agent-callable tooling for each, and made every stage feed the next. The design rules document is the single source of truth and flows downstream into a verifiable math contract; art and audio consume the same theme definition; the frontend builds against the same event structure. It now runs from a theme brief to a demo-ready build.

### 2. Frontend SDK and hands-on rendering
Contributed to a **Svelte 5 + PixiJS 8** slot-game frontend SDK — a monorepo of 14 game apps and 29 shared packages — as its single largest contributor (~60% of commits). Event-driven architecture: the server returns a round as a sequence of events the client replays, making rounds reproducible and independently testable. The low-level work continues alongside: cut texture VRAM on a live title by **18%** (atlas consolidation, halved mask and VFX resolutions, resolution suffixes — logical sizes and rendering code untouched), and wrote the Spine 3.8 → 4.2 converter that repaired three silent data-loss bugs in the runtime upgrade.

### 3. Art generation: "consistent style" as an executable spec
16 generation skills covering theme proposals, a visual style guide, batch image generation, character poses, sprite sheets, autotile terrain, parallax backgrounds and UI components. The key decision: produce the style guide first, then inject it into every downstream prompt — a batch drifts as it grows, and that spec is the only thing that holds it together.

### 4. Math: turning a design document into a machine-verifiable contract
A math pipeline covering 40+ titles. It expands the design rules into a mechanics matrix, interrogates every ambiguous cell until it is pinned down, and emits a machine-verifiable contract. Every batch of computed results must clear hard checks — matrix gaps, whether a declared mechanic actually appears, field and behaviour assertions — and nothing ships until it passes. One line drawn deliberately: the pipeline runs on its own, but the final call on a payout table stays with the game designer. It now operates without me — I go back in only when the spec has to change.

### 5. Putting live operations data within reach of an agent
An analytics MCP server exposing the data warehouse as 16 agent-callable tools — revenue and partner rankings, period comparison, player behaviour analysis, single-round replay. On top sit 5 analysis agents and a daily triage routine chaining "check revenue → find anomalous games → shortlist suspects → investigate → report" into one command. Read-only access, query timeouts and row caps so an agent cannot take the warehouse down.

---

## Experience

### Frontend Team Leader — ELS Tech（Gemini frontend line）
**2023/02 – Present**

- Built **MCP servers and agent workflows** for deployment, analytics, doc sync and issue diagnosis; the math and art-reskin lines now run without me — I step in only when the spec itself changes — QA files a ticket, an MCP server picks it up, the agent pulls project context and past fixes from a knowledge base spanning 90+ repositories, and a human signs off
- Wired design, math, art, audio, frontend and analytics into a single cross-discipline pipeline
- Lead game client development for **40 game types, 80+ reskinned products live** (Cocos Creator + TypeScript); newer work on PixiJS 8 + Spine
- Own shared infrastructure: WebSocket / Protobuf protocols, runtime config, webview layer, i18n, shared bundles
- Own release last-mile: DEV / STG / REL / PROD, Jenkins pipelines, deploy reports, backup and version alignment
- Held delivery flat after the frontend team went from five people to two
- Technical planning and in-repo plans / checklists / guides for traceability and handoff

### Freelancer / Advisor / Engineer
**2014 – 2023/02**

- Freelancer (company registered 2017); UI/UX & frontend advisor (Othe Technology); frontend engineer (meet.jobs)
- Large Vue / React websites, product UI systems, and long-lived codebase maintenance

### Earlier

| Period | Role |
|--------|------|
| 2013 | Interactive UI lecturer — Lunghwa University of Science and Technology |
| 2012/10 – 2014/02 | UI / Frontend — AppWorks accelerator team |
| 2011/01 – 2012/09 | Design team lead — SHEICO Group |
| 2009/05 – 2010/12 | Industrial design engineer — Saint-Fun International |

---

## Certification & Education

- **AWS Certified AI Practitioner**
- **M.I.D.** Industrial Design — National Cheng Kung University（成大）, 2005–2008
- **B.I.D.** Industrial Design — Chang Gung University（長庚）, 2001–2005

---

## Links

- Portfolio: https://portfolio.hcd-design-studio.com/en/
- LinkedIn: https://www.linkedin.com/in/Dean-6979939a/
- GitHub: https://github.com/hcd1983
- Blog: https://it-monk.tw/
