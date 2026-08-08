/** Swiss 完稿版型文案（與 design/pencil-layout-c-swiss 對齊） */
module.exports = {
  zh: {
    kicker: '遊戲客戶端工程 · Web + Canvas · 前端 Lead',
    nameDisplay: 'DEAN HUANG',
    nameSub: '（欣迪）',
    headline:
      'Web 工程與即時 canvas 渲染，兩邊都是本業——不是其中一邊借來的。',
    lead:
      '現職遊戲公司前端 Leader。日常是 Cocos Creator 與 PixiJS 的 gameplay、照二進位規格手刻的 FairyGUI runtime、要撐過低記憶體手機的貼圖預算，同時也顧品牌官網、遊戲管理後台，以及把 70+ 產品推過四個環境的 Jenkins 管線。',
    statsLine:
      '70+ 產品交付  │  18 種遊戲類型  │  3 種 render stack  │  貼圖 VRAM −18%',
    pills: [
      '渲染與記憶體最佳化',
      '跨產品共用架構',
      'CI/CD 與多環境交付',
      'AI 跨職能產能',
    ],
    aboutTitle: 'ABOUT — 渲染深度與工程紀律並重',
    aboutParas: [
      '我從工業設計碩士、產品設計師一路走到軟體工程，現在同時做兩件事：把 gameplay 與渲染寫到足以稱為本業的深度，以及把同一間公司 web 這一側的系統維持得夠穩。這兩邊在遊戲前端通常只有一邊是真本行、另一邊勉強撐著——我不想是那樣。',
      '我對「完成」的定義比較嚴格：功能合併只是起點，真正的完成是可驗證上線、有文件、可追溯、可交接。在 18 種遊戲類型、70+ 產品變體、四個環境的規模下守住這條線，是我花在技術規劃、發版節奏與整條交付鏈上的時間，並不比花在遊戲本身少的原因。',
      '設計師出身讓我習慣從使用者角度看問題，工程師身分讓我能直接動手解決。帶團隊之後，我最在意的是力氣花在哪——一次要落到 40 款遊戲的協議變更、每次都得用同一套方式驗證的部署，這些應該被系統吸收，而不是靠人加班盯。我的工作是持續縮小那塊面積，讓團隊的注意力留給真的需要人判斷的決定。',
    ],
    skillsTitle: 'SKILLS — 核心職能',
    skillLines: [
      '遊戲客戶端與渲染（Cocos Creator、PixiJS 8、自訂 GLSL 效果）',
      '貼圖與記憶體預算（圖集合併、draw call 與貼圖綁定縮減、低記憶體裝置排查）',
      'Spine 執行期整合與格式遷移、FairyGUI 二進位包解析',
      '網路層與前後端契約（WebSocket 心跳重連、Protobuf、協議演進）',
      'Web 工程（TypeScript、Vue / React、Nuxt / Vite / Next.js、Electron 桌面工具）',
      '版本交付與部署（四環境推進、Jenkins 管線、報告、備份與追溯）',
      'AI 流程與跨職能協作（產品、後端、維運、行銷、文件）',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      '六個方向，每個都有實際上線的產品、工具或系統支撐。面談時可針對任何項目深入展開。',
    outcomes: [
      {
        title: '渲染、記憶體與裝置壓力下的可靠性（PixiJS 8）',
        body:
          '把一款上線遊戲的貼圖 VRAM 降低 18%：合併圖集、將遮罩與特效解析度減半、改用 PixiJS 的 resolution 後綴，邏輯尺寸不變、渲染程式碼零改動。同一套預算也用來對付低記憶體手機的 GPU 記憶體上限，並把 preload 清單縮減約三分之二以縮短首屏載入。同類型的壓力也出現在動畫完成回呼上——它同時依賴物件留在畫面內、貼圖沒被記憶體壓力回收、狀態沒中途改變；我把這些相依攤開，在關鍵路徑加上逾時保險，讓沒被觸發的回呼只降級動畫，而不是卡住整條流程。',
      },
      {
        title: '從二進位格式手刻 FairyGUI runtime',
        body:
          '在 PixiJS 8 上寫出約一千行的 runtime，直接解析 FairyGUI 公開的二進位包格式——big-endian 位元組讀取、字串表引用、sprite 裁切矩形——再把 14 張散圖合併成單一圖集，降低 draw call 與貼圖綁定次數。涵蓋 loader、controller、transition 與 gear 系統，解析結果對照 XML 原始資料 29/29 驗證通過。',
      },
      {
        title: 'Spine 3.8 → 4.2 轉檔工具',
        body:
          '寫了一支轉檔工具，修掉執行期升版時三個會靜默掉資料的問題：骨骼旋轉關鍵影格（angle → value）、插槽顏色時間軸（color → rgba）、貝茲曲線（正規化 → 絕對座標）。沒有這支工具，旋轉會被壓成零、整條顏色軌會直接消失。逐格對照美術的參考錄影驗證。',
      },
      {
        title: '70+ 款產品的 Cocos Creator 與共用架構',
        body:
          '以 Cocos Creator + TypeScript 開發核心玩法與共用執行期：時間驅動漸層文字的自訂 GLSL 效果、帶心跳與斷線重連的 Protobuf WebSocket 客戶端、可遮罩過濾的可觀察事件系統、xstate 狀態機，以及跨產品複用的服務容器 App Context。統一通訊協議與 11 個共用模組支撐 42 款獨立遊戲與 9 款多人遊戲，並同步 12 語系資源；Webview 的遊戲紀錄與公平性驗證也從各遊戲各自實作，收斂為共用元件。',
      },
      {
        title: '交付治理與自動化工具鏈',
        body:
          '負責 18 種遊戲類型、70+ 產品變體的持續整合與四環境（DEV / STG / REL / PROD）上線；以內部部署管理工具與版本儀表，把部署、備份驗證、版本對齊與上線報告收斂成同一套腳本與介面，讓「是否已上線、上到哪一版」全隊都能自己查。另建置 5+ 個 MCP Server，將部署、多語系同步、新專案開倉檢核與議題／文件系統整合封裝成 AI Agent 可呼叫的工具鏈，並建立營運與技術共用的分析流程，讓遊戲狀態排查與玩家行為分析變成可重跑的查詢。',
      },
      {
        title: 'AI 跨職能：美術生成與數值把關',
        body:
          '把同一套做法延伸到工程以外。16 個美術生成 skill 能把一份主題簡報變成完整資產組——背景、符號圖示、角色 sprite sheet、autotile 地形、視差圖層、UI 元件——並將產生的視覺規範注入每一次 prompt，讓整批風格不走鐘。數值這一側，一條涵蓋 40+ 款遊戲的流程把企劃文件轉成可機器驗證的契約，每張賠付表都要通過審查才能出貨。流程交給 Agent 跑，數字仍然是人的決定。',
      },
    ],
    timelineTitle: 'TIMELINE',
    timelineDetail: '詳細年表',
    timelineExpand: '展開完整經歷',
    expBlock: `2023/02 – 至今 · ELS Tech · 前端 Leader（Gemini 前端線）
▸ 遊戲客戶端｜以 Cocos Creator + TypeScript 開發 70+ 款遊戲產品，新專案採 PixiJS 8 + Spine + FairyGUI
▸ 渲染與效能｜貼圖與記憶體預算、圖集合併、draw call 縮減、低記憶體裝置排查
▸ 共用架構｜維護 proto／WebSocket 協議、執行期設定、webview、i18n、共用資源包與商戶載入規則
▸ 發版交付｜負責 DEV／STG／REL／PROD 四環境推進、Release Note（含 hotfix）、部署報告與 S3 備份對齊
▸ Web 系統｜品牌官網與遊戲管理後台維運，協助其他團隊將後台改為前後端分離架構
▸ 團隊營運｜Jenkins 管線、技術規劃與人員調度，repo 內實作計畫／checklist／guide 保留追溯與交接脈絡

2014 – 2023/02 · Freelancer（2017 登記公司）· 奧樂科技 UI/UX 與前端顧問 · meet.jobs 前端工程師

2013 · 龍華科技大學 · 互動介面設計講師

2012/10 – 2014/02 · AppWorks 育成團隊 · UI／前端

2011/01 – 2012/09 · SHEICO Group · 設計組組長

2009/05 – 2010/12 · 尚芳國際興業 · 工業設計工程師

2008 – 2009 · 海軍義務役

學歷 · 長庚大學工設學士（2001–2005）· 成大工設碩士（2005–2008）`,
    footerUrls: 'linkedin.com/in/Dean-6979939a · github.com/hcd1983 · it-monk.tw',
    footerNote: '中英內容以頂欄切換；外部連結另開新分頁。',
    footerBar: 'HCD PORTFOLIO · DEAN HUANG',
    nav: { about: '關於', skills: '技能', outcomes: '成果', exp: '經歷' },
  },
  en: {
    kicker: 'Game Client Engineer · Web + Canvas · Frontend Lead',
    nameDisplay: 'DEAN HUANG',
    nameSub: '(Dean)',
    headline:
      'Web engineering and real-time canvas rendering—both are my own craft, not one borrowed from the other.',
    lead:
      'Frontend lead at a game studio. Day to day that means gameplay in Cocos Creator and PixiJS, a FairyGUI runtime written against the binary spec, and texture budgets that have to survive low-memory phones—alongside the company brand site, the game admin console, and Jenkins pipelines moving 70+ titles through four environments.',
    statsLine:
      '70+ titles shipped  │  18 game types  │  3 render stacks  │  −18% texture VRAM',
    pills: [
      'Rendering & memory optimization',
      'Cross-product shared architecture',
      'CI/CD & multi-environment delivery',
      'AI across art & game math',
    ],
    aboutTitle: 'ABOUT — Rendering depth with engineering discipline',
    aboutParas: [
      'I came to software through industrial design, and I now do two things at once: write gameplay and rendering deep enough to call it my own craft, and keep the web side of the same company running. In game frontend those two usually split—one is the real job and the other is barely held together. I did not want to be that.',
      'My bar for “done” is strict: merging is the starting point, not the finish. A release is done when it is verified in production, documented, traceable, and ready for someone else to take over. Holding that bar across 18 game types, 70+ product variants, and four environments is why I spend as much time on technical direction, release pacing, and the delivery chain as on the games themselves.',
      'What I care about most as a lead is where the effort goes. Anything predictable—a protocol change that has to land in 40 titles, a deploy that has to be verified the same way every time—should be absorbed by the system, not by someone staying late to check it. My job is to keep shrinking that surface, so the team\'s attention stays on the decisions that actually need a human.',
    ],
    skillsTitle: 'SKILLS — Core capabilities',
    skillLines: [
      'Game client & rendering (Cocos Creator, PixiJS 8, custom GLSL effects)',
      'Texture & memory budgeting (atlas consolidation, draw-call and texture-bind reduction, low-memory device triage)',
      'Spine runtime integration & format migration; FairyGUI binary package parsing',
      'Networking & frontend–backend contracts (WebSocket heartbeat/reconnect, Protobuf, protocol evolution)',
      'Web engineering (TypeScript, Vue / React, Nuxt / Vite / Next.js, Electron desktop tooling)',
      'Release & deployment (four environments, Jenkins pipelines, reports, backups, traceability)',
      'AI workflows & cross-functional collaboration (product, backend, ops, marketing, docs)',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      'Six areas, each backed by a product, tool, or system running in production. Happy to go deeper on any of them.',
    outcomes: [
      {
        title: 'Rendering, memory, and reliability under device pressure',
        body:
          'Cut texture VRAM on a live title by 18%—consolidating atlases, halving mask and VFX resolutions, and moving to PixiJS resolution suffixes, with logical sizes unchanged and no edits to rendering code. Worked the same budget against GPU-memory ceilings on low-memory handsets, and cut the preload set by roughly two thirds to shorten first-screen load. The same pressure surfaces in animation completion callbacks, which quietly depend on several conditions holding at once—the object staying in frame, textures surviving memory pressure, state not changing mid-animation. I trace those dependencies and put timeout fuses on the critical paths, so a callback that never fires degrades the animation instead of stalling the whole flow.',
      },
      {
        title: 'A FairyGUI runtime written from the binary format',
        body:
          'Built a ~1,000-line runtime on PixiJS 8 that parses FairyGUI\'s published binary package directly—big-endian byte reader, string-table references, sprite trim rects—then merges 14 scattered images into a single atlas to cut draw calls and texture binds. Covers loader, controllers, transitions, and the gear system; the parser validates 29/29 against XML ground truth.',
      },
      {
        title: 'Spine 3.8 → 4.2 migration tooling',
        body:
          'Wrote a converter that repaired three silent data-loss bugs in the runtime upgrade: bone rotation keys (angle → value), slot colour timelines (color → rgba), and Bézier curves (normalized → absolute coordinates). Without it, rotations flattened to zero and whole colour tracks were dropped. Verified frame by frame against the artists\' reference capture.',
      },
      {
        title: 'Cocos Creator and shared architecture across 70+ titles',
        body:
          'Core gameplay and shared runtime in Cocos Creator + TypeScript: a custom GLSL effect for time-driven gradient text, a WebSocket client with heartbeat and reconnection over Protobuf, a mask-filtered observable event system, xstate-driven state machines, and a service-container app context reused across titles. Unified protocols and 11 shared modules sit behind 42 standalone and 9 multiplayer games with 12 locales kept in sync—and game-history views and provably-fair verification, the mechanism that lets players independently confirm a result was not tampered with, became shared components instead of a per-title reimplementation.',
      },
      {
        title: 'Delivery governance and automation toolchain',
        body:
          'Own CI/CD and four-environment releases (DEV / STG / REL / PROD) across 18 game types and 70+ product variants, with an internal deploy manager and version dashboard consolidating deployment, backup verification, version alignment, and release reporting—so anyone on the team can answer “is it live, and on which version” without asking. Built 5+ internal MCP servers—Model Context Protocol, the interface that lets AI agents drive real systems—wiring the issue tracker, wiki, data warehouse, UI editor, and Git into agent-callable workflows, plus the analysis tooling ops and engineering share for game-state investigation and player behaviour review.',
      },
      {
        title: 'AI beyond engineering: art and game math',
        body:
          'Extended the same approach past engineering. A library of 16 art-generation skills turns a theme brief into a full asset set—backgrounds, symbol icons, character sprite sheets, autotile terrain, parallax layers, UI components—with a generated style guide injected into every prompt so batches stay visually consistent. On the math side, a pipeline covering 40+ titles converts game design documents into machine-verifiable contracts and gates every payout table on review before it ships. The agents run the process; the numbers stay a human decision.',
      },
    ],
    timelineTitle: 'TIMELINE',
    timelineDetail: 'Full timeline',
    timelineExpand: 'Expand full experience',
    expBlock: `2023/02 – Present · ELS Tech · Frontend Team Leader (Gemini frontend line)
▸ Game client | Built 70+ game products with Cocos Creator + TypeScript; newer titles on PixiJS 8 + Spine + FairyGUI
▸ Rendering & performance | Texture and memory budgeting, atlas consolidation, draw-call reduction, low-memory device triage
▸ Shared infra | Maintained proto / WebSocket protocols, runtime configs, webview, i18n, shared bundles & merchant loading rules
▸ Release | Owned DEV / STG / REL / PROD progression, release notes (incl. hotfix), deploy reports & S3 backup alignment
▸ Web systems | Maintained the brand site and game admin console; helped other teams move admin tools to a decoupled frontend/backend architecture
▸ Team ops | Jenkins pipelines, technical planning & staffing, in-repo plans / checklists / guides for traceability and handoff

2014 – 2023/02 · Freelancer (company registered 2017) · Othe Technology UI/UX & FE advisor · meet.jobs FE engineer

2013 · Lunghwa University of Science and Technology · Interactive UI lecturer

2012/10 – 2014/02 · AppWorks accelerator team · UI / frontend

2011/01 – 2012/09 · SHEICO Group · Design team lead

2009/05 – 2010/12 · Saint-Fun International · Industrial design engineer

2008 – 2009 · R.O.C. Navy (conscription)

Education · Chang Gung University BID (2001–2005) · NCKU MID (2005–2008)`,
    footerUrls: 'linkedin.com/in/Dean-6979939a · github.com/hcd1983 · it-monk.tw',
    footerNote: 'Switch language in the top bar; external links open in a new tab.',
    footerBar: 'HCD PORTFOLIO · DEAN HUANG',
    nav: { about: 'About', skills: 'Skills', outcomes: 'Outcomes', exp: 'Experience' },
  },
}
