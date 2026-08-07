<!--
  Dean Huang — Resume（遊戲為主：Game Client Engineer / Senior Web Engineer）
  瀏覽器轉 PDF 建議：直接開同資料夾的 Dean-Huang-Resume.html → Cmd/Ctrl+P → Save as PDF
  本檔為可編輯來源；HTML 版在同一目錄。
-->

<div align="center">

# DEAN HUANG（欣迪）

**Game Client Engineer · Web + Canvas · Frontend Lead**

TypeScript · Cocos Creator · PixiJS · Spine / FairyGUI · WebSocket / Protobuf · Jenkins CI/CD

[linkedin.com/in/Dean-6979939a](https://www.linkedin.com/in/Dean-6979939a/) · [github.com/hcd1983](https://github.com/hcd1983) · [it-monk.tw](https://it-monk.tw/) · [Portfolio](https://portfolio.hcd-design-studio.com/en/)

🇹🇼 Mandarin (native) · 🇬🇧 English (professional) · Fully remote ready

</div>

---

## Profile

I work at the seam between **web engineering and real-time canvas rendering**—and I am solid on both sides, not one borrowed from the other. Day to day that means gameplay code in **Cocos Creator** and **PixiJS**, a FairyGUI runtime written against the binary spec, and texture budgets that have to survive low-memory phones—alongside the company brand site, the game admin console, and Jenkins pipelines moving **70+ titles** through four environments.

I lead the frontend team and work daily with product, design, backend, marketing, and operations—clarifying requirements fast and shipping reliably when priorities move.

> **Bar for “done”:** merged ≠ done. Done means verified live, documented, traceable, and handoff-ready.

---

## Snapshot

| 70+ | 18 | 3 | −18% |
|:---:|:---:|:---:|:---:|
| Game products shipped | Game types on shared stack | Render stacks in production | Texture VRAM after tuning |

---

## Core Skills

### Game Client & Rendering
- **Cocos Creator + TypeScript**: core gameplay, shared runtime modules, custom GLSL effects
- **PixiJS 8**: texture / VRAM budgeting, atlas consolidation, draw-call and texture-bind reduction
- **Spine** runtime integration and format migration; **FairyGUI** binary package parsing
- Networking: **WebSocket** with heartbeat and reconnection, **Protobuf**, HTTP; frontend–backend contract alignment
- Patterns: state machines, observable event bus, object pooling, service containers
- HTML5 for **mobile and desktop**; packaging, on-device debugging, low-memory device triage

### Web Engineering
- **TypeScript** daily; **Vue** (primary) + **React**, chosen per problem rather than per habit
- Nuxt / Vite / Next.js; component systems across a multi-repo portfolio
- State architecture with explicit boundaries and predictable data flow
- **Electron** desktop tooling (Vue 3 + Quasar, IPC via contextBridge, S3 and Google Drive integration)
- Company brand site and game admin console; helped other teams move admin tools to a decoupled frontend/backend architecture
- Reading and improving large, long-lived codebases

### Delivery & Automation
- **Jenkins** CI/CD design and maintenance; build nodes; DEV / STG / REL / PROD promotion
- Deploy manager + version dashboard (“is it live, and on which version?”)
- Release notes incl. hotfix; backup verification and REL↔PROD alignment
- MCP / AI agent toolchains absorbing deploy, i18n sync, and repo setup

---

## Selected Outcomes

### 1. Rendering & memory optimization (PixiJS 8)
Cut texture VRAM on a live title by **18%** — consolidating atlases, halving mask and VFX resolutions, and moving to PixiJS resolution suffixes, with logical sizes unchanged and no edits to rendering code. Worked the same budget against GPU-memory ceilings on low-memory handsets, and cut the preload set by roughly two thirds to shorten first-screen load.

### 2. FairyGUI runtime on PixiJS 8, written from the binary format
Built a ~1,000-line runtime that parses FairyGUI's published binary package directly—big-endian byte reader, string-table references, sprite trim rects—then merges 14 scattered images into a single atlas to cut draw calls and texture binds. Covers loader, controllers, transitions, and the gear system; the parser validates 29/29 against XML ground truth.

### 3. Spine 3.8 → 4.2 migration tooling
Wrote a converter that repaired three silent data-loss bugs in the runtime upgrade: bone rotation keys (`angle` → `value`), slot colour timelines (`color` → `rgba`), and Bézier curves (normalized → absolute coordinates). Without it, rotations flattened to zero and whole colour tracks were dropped. Verified frame by frame against the artists' reference capture.

### 4. Cocos Creator across a 70+ title portfolio
Core gameplay and shared runtime in Cocos Creator + TypeScript: a custom GLSL effect for time-driven gradient text, a WebSocket client with heartbeat and reconnection over Protobuf, a mask-filtered observable event system, xstate-driven state machines, and a service-container app context reused across titles. Unified protocols and 11 shared modules behind 42 standalone and 9 multiplayer games, with 12-locale i18n sync.

### 5. Reliability under device pressure
Animation completion callbacks in a canvas runtime quietly depend on several conditions holding at once—the object staying in-frame, textures surviving memory pressure, state not changing mid-animation. I trace those dependencies and put timeout fuses on the critical paths, so a callback that never fires degrades the animation instead of stalling the whole flow.

### 6. Delivery governance and web systems
Own CI/CD and four-environment releases across 18 game types and 70+ variants, with an internal deploy manager and version dashboard consolidating deployment, backup verification, and release reporting. Maintain the brand site and game admin console, support marketing and operations on campaigns and internal tools, and built an Electron desktop app for internal asset workflows.

---

## Experience

### Frontend Team Leader — ELS Tech（Gemini frontend line）
**2023/02 – Present**

- Lead game client development for **70+ live products** (Cocos Creator + TypeScript); newer titles on **PixiJS 8 + Spine + FairyGUI**
- Own shared infrastructure: WebSocket / Protobuf protocols, runtime config, webview layer, i18n, shared bundles, merchant loading rules
- Own release last-mile: STG / REL / PROD, Jenkins pipelines and build nodes, deploy reports, backup and version alignment
- Maintain the company brand site and game admin console; support other teams migrating admin tools to a decoupled frontend/backend architecture
- Technical planning, staffing, and in-repo plans / checklists / guides for traceability and handoff

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

## Education

- **M.I.D.** Industrial Design — National Cheng Kung University（成大）, 2005–2008
- **B.I.D.** Industrial Design — Chang Gung University（長庚）, 2001–2005

---

## Links

- Portfolio: https://portfolio.hcd-design-studio.com/en/
- LinkedIn: https://www.linkedin.com/in/Dean-6979939a/
- GitHub: https://github.com/hcd1983
- Blog: https://it-monk.tw/
