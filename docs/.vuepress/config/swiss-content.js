/** Swiss 完稿版型文案（與 design/pencil-layout-c-swiss 對齊） */
module.exports = {
  zh: {
    kicker: '跨領域整合 · AI 驅動的遊戲產線 · 前端 Lead',
    nameDisplay: 'DEAN HUANG',
    nameSub: '（欣迪）',
    headline:
      '我用 AI 把企劃、數值、美術、音效、前端、數據，串成一條會動的產線。',
    lead:
      '現職遊戲公司前端 Leader。這兩年幾乎把力氣都投在 AI 應用：從遊戲企劃、數值驗證、美術與音效生成，到前端 SDK 與上線後的數據分析，每一環都有工具實際在跑。我定架構與原則、Agent 產出、我驗收——這讓一個人的守備範圍，橫跨過去需要好幾個角色才蓋得住的區域。',
    statsLine:
      '團隊 5 → 2 人  │  換皮工時 1 週 → 2 天  │  80+ 款持續上線  │  6 個環節打通',
    pills: [
      'MCP Server 與 Agent 工作流設計',
      '跨領域產線整合',
      '硬邊界與驗收設計',
      'AWS Certified AI Practitioner',
    ],
    aboutTitle: 'ABOUT — 從工業設計到 AI 產線',
    aboutParas: [
      '我從工業設計碩士、產品設計師一路走到軟體工程，現在帶遊戲公司的前端團隊。轉向 AI 的起點是去年跟主管去了一趟 AWS 年會——我在那裡確定這會是往後的工作方式，回來就開始把部門裡重複的、可預期的、跨領域的工作，一項一項變成工具與流程。不是「用 AI 幫忙寫一段程式」，而是整條流程重做。後來團隊從五個人變成兩個人、交付量卻沒有跟著減少，這件事反而驗證了當初的判斷：先鋪好的東西，剛好接住了後來的壓力。',
      '工作方式也跟著變了。純手寫程式的比例變低，取而代之的是定架構、下原則、審結果，以及讓不同領域的產出能彼此對接。這不是離開技術，恰恰相反：要讓 Agent 產出可用的東西，你得比自己動手時更清楚什麼叫對——契約長什麼樣、驗收標準在哪、哪些決定不能交給機器。模型會換版、輸出會飄，所以我不把品質押在模型穩定上——驗收標準一律做成模型之外的硬邊界：權限邊界由人定義，數值那條線直接寫進 CI 自動檢核，過不了就擋下不准出貨。數值可以自動算，但賠付表最後由企劃拍板，這條線我從一開始就畫死。',
      '我對「完成」的定義沒有變：功能合併只是起點，真正的完成是可驗證上線、有文件、可追溯、可交接。差別是現在守這條線的不只有人——自動偵錯、部署驗證、文件同步、issue 修復都有工具在跑，人負責的是例外與判斷。設計背景留下來的影響也還在：我看一個功能，會先看它在玩家手上長什麼樣，再回頭決定規格怎麼寫。',
    ],
    skillsTitle: 'SKILLS — 核心職能',
    skillLines: [
      'AI 協作與 Agent 工作流（Claude Code Skills、MCP Server、自動化流程設計）',
      '跨領域產線整合（企劃、數值、美術、音效、前端、數據六個環節）',
      '架構原則與硬邊界設計（可機器驗證的契約、CI 自動檢核、權限與決策邊界）',
      '遊戲前端與渲染（Cocos Creator、PixiJS 8、Spine、GLSL、貼圖與記憶體預算）',
      'Web 工程（TypeScript、Svelte、Vue / React、Nuxt / Vite / Next.js、Electron）',
      '版本交付與部署（四環境推進、Jenkins 管線、自動偵錯與部署驗證）',
      '資料分析與營運支援（ClickHouse 系資料倉儲、可重跑的查詢與排查流程）',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      '六個方向，每個都有實際在跑的工具或系統支撐。面談時可針對任何項目深入展開。',
    outcomes: [
      {
        title: '一條半自動的遊戲產線',
        body:
          '把做一款遊戲拆成六個環節——企劃、數值、美術、音效、前端、上線後數據——每一環都做出可被 AI Agent 呼叫的工具，並讓上游的產出能直接餵給下游。企劃的規則文件是唯一權威，往下轉成數值可驗證的契約；美術與音效各自吃同一份主題設定，確保視覺與聽覺對得起來；前端照著同一套事件結構接。過去這是六個角色分頭做、靠會議對齊的流程。現在規格齊備的情況下，不含美術的 demo 版本用斷言機制數小時就能產出；換皮版本則取決於生圖量，約一天。整體來看，一款換皮遊戲原本美術與前端各要投入約一週，現在兩邊合計約兩天。',
      },
      {
        title: '前端 SDK 與渲染實作',
        body:
          '參與一套 Svelte 5 + PixiJS 8 的 slot 遊戲前端 SDK，以 monorepo 收斂成 14 個遊戲應用與 29 個共用套件，是專案內最主要的貢獻者（約六成 commits）。架構走事件驅動：伺服器回傳的結果是一串事件，前端逐一播放並驅動動畫，讓遊戲流程可重現、可單獨測試；滾輪、掉落消除、免費遊戲、獎勵關等機制都做成共用模組。渲染這一側也維持手感：把一款上線遊戲的貼圖 VRAM 降低 18%（合併圖集、遮罩與特效解析度減半、改用 resolution 後綴，邏輯尺寸不變、渲染程式碼零改動），並寫過 Spine 3.8 → 4.2 的轉檔工具，修掉升版時三個會靜默掉資料的問題。',
      },
      {
        title: '美術資產生成：把「風格一致」變成可執行的規範',
        body:
          '建了 16 個生成 skill，涵蓋主題提案、視覺規範文件、批次產圖、角色動作圖、sprite sheet、autotile 地形、視差背景與 UI 元件。關鍵設計是先產出一份視覺規範，再把它注入後續每一次 prompt——批次一大，風格就會越產越歪，這份規範是唯一擋得住的東西。同一份主題設定也往下接到音效生成，讓視覺與聽覺出自同一個來源。換皮這條路徑現在已經定型成固定做法，不需要我在旁邊看著。',
      },
      {
        title: '數值：把企劃文件變成可機器驗證的契約',
        body:
          '涵蓋 40+ 款遊戲的數值流程。核心是把企劃的規則文件展開成一張機制矩陣，逐格把模糊的地方問清楚，產出可機器驗證的契約；接著每一批運算結果都要通過數道硬性檢查——矩陣有沒有缺格、宣告的機制有沒有真的出現、欄位與行為斷言對不對——不通過就不准出貨。這些檢核綁在 CI 上，跟用哪個模型、模型換了幾版無關——邊界在模型外面，模型飄不動它。設計上刻意留了一條紅線：流程可以自動跑，但賠付表的最終決定權留在企劃手上。這條線現在已經可以獨立運作，只有在規範本身要調整時才需要我進去。',
      },
      {
        title: '讓 AI 直接查得到營運數據',
        body:
          '做了一套資料分析的 MCP Server，把資料倉儲包成 16 個 AI Agent 可直接呼叫的工具，涵蓋營收與代理商排名、時段比較、玩家行為分析，以及特定遊戲的單局回放與統計；再往上疊 5 個分析 Agent 與一組每日排查流程，把「查營收 → 找異常遊戲 → 篩可疑玩家 → 深入分析 → 出報告」串成一次指令跑完。工程面做了唯讀限制、查詢逾時與筆數上限，避免 Agent 把資料庫拖垮。營運與技術從此用同一套可重跑的查詢對齊問題，不再靠口頭來回與一次性查表。',
      },
      {
        title: '交付治理與 issue 自動修復',
        body:
          '負責 40 種遊戲類型、換皮後共 80+ 款產品的持續整合與四環境（DEV / STG / REL / PROD）上線；部署、備份驗證、版本對齊與上線報告收斂成同一套工具，任何人都能自己確認「是否已上線、上到哪一版」，不用來問我。issue 處理走同一套邏輯：QA 在 Jira 開單後由 MCP 自動讀取，Agent 從一個涵蓋 90+ 專案的知識庫取得該專案脈絡與過往修復經驗，做出診斷並提出修正方案，工程師據此接手實作。價值不在全自動——而在同一類 issue 在不同專案重複出現時，診斷與修法可以直接沿用，實作時間省下數倍。',
      },
    ],
    timelineTitle: 'TIMELINE',
    timelineDetail: '詳細年表',
    timelineExpand: '展開完整經歷',
    expBlock: `2023/02 – 至今 · ELS Tech · 前端 Leader（Gemini 前端線）
▸ AI 應用｜建置 MCP Server 與 Agent 工作流，涵蓋部署、資料分析、文件同步與 issue 診斷；數值與美術換皮兩條線現已可獨立運作，只在規範本身要調整時才需要我介入
▸ 跨領域產線｜串接企劃、數值、美術、音效、前端與上線後數據六個環節，讓上游產出可直接餵給下游
▸ 遊戲客戶端｜以 Cocos Creator + TypeScript 開發 80+ 款遊戲產品，新專案採 Svelte 5 + PixiJS 8 + Spine
▸ 共用架構｜維護 proto／WebSocket 協議、執行期設定、webview、i18n、共用資源包與商戶載入規則
▸ 發版交付｜負責 DEV／STG／REL／PROD 四環境推進、Release Note（含 hotfix）、部署報告與備份對齊
▸ 團隊營運｜前端團隊由五人調整為兩人後維持同樣交付量；品牌官網與遊戲管理後台維運、Jenkins 管線、技術規劃

2014 – 2023/02 · Freelancer（2017 登記公司）· 奧樂科技 UI/UX 與前端顧問 · meet.jobs 前端工程師

2013 · 龍華科技大學 · 互動介面設計講師

2012/10 – 2014/02 · AppWorks 育成團隊 · UI／前端

2011/01 – 2012/09 · SHEICO Group · 設計組組長

2009/05 – 2010/12 · 尚芳國際興業 · 工業設計工程師

2008 – 2009 · 海軍義務役

證照 · AWS Certified AI Practitioner

學歷 · 長庚大學工設學士（2001–2005）· 成大工設碩士（2005–2008）`,
    footerUrls: 'linkedin.com/in/Dean-6979939a · github.com/hcd1983 · it-monk.tw',
    footerNote: '中英內容以頂欄切換；外部連結另開新分頁。',
    footerBar: 'HCD PORTFOLIO · DEAN HUANG',
    nav: { about: '關於', skills: '技能', outcomes: '成果', exp: '經歷' },
  },
  en: {
    kicker: 'Cross-domain integration · AI-driven game pipeline · Frontend Lead',
    nameDisplay: 'DEAN HUANG',
    nameSub: '(Dean)',
    headline:
      'I used AI to wire design, math, art, audio, frontend, and analytics into one working pipeline.',
    lead:
      'Frontend lead at a game studio. For the past two years my focus has been applied AI: game design rules, math validation, art and audio generation, the frontend SDK, and post-launch analytics—each with tooling actually running. I set the architecture and the rules, the agents produce, I verify. One person now covers ground that used to take several roles.',
    statsLine:
      'team 5 → 2  │  reskin: 1 week → 2 days  │  80+ titles still shipping  │  6 stages wired',
    pills: [
      'MCP servers & agent workflow engineering',
      'Cross-domain pipeline integration',
      'Hard boundaries & acceptance design',
      'AWS Certified AI Practitioner',
    ],
    aboutTitle: 'ABOUT — From industrial design to an AI-run pipeline',
    aboutParas: [
      'I came to software through industrial design—a design master\'s, then years as a product designer—and I now lead the frontend team at a game studio. The turn toward AI started at an AWS conference I went to with my manager last year: I came away convinced this was how the work would be done from now on, and began converting the repetitive, predictable, cross-discipline work in the department into tools and pipelines—not "using AI to write a function," but rebuilding the process end to end. When the team later went from five people to two without the delivery load dropping, that judgement paid off: the groundwork was already in place when the pressure arrived.',
      'The way I work changed with it. I hand-write less code; I spend that time setting architecture, defining the rules, reviewing what comes back, and making sure output from one discipline can feed the next. That is not a step away from engineering—it is the opposite. To get usable work out of an agent you have to be clearer about what "correct" means than you ever were writing it yourself: what the contract looks like, where the acceptance bar sits, which decisions must never be handed to a machine. Models get replaced and output drifts, so I do not stake quality on model stability: the acceptance bar always lives outside the model as a hard boundary—permission limits defined by a human, and, for the math pipeline, automated checks wired into CI that block the build when they fail. The math can be automated; the payout table is still signed off by a human. I drew that line on day one.',
      'My bar for "done" has not moved: merging is the starting point, not the finish. A release is done when it is verified in production, documented, traceable, and ready for someone else to take over. What changed is that people are no longer the only thing holding that bar—error triage, deploy verification, doc sync, and issue fixes all run as tooling now, and the humans handle the exceptions and the judgement calls. The design background still shows too: I look at a feature from the player\'s end before deciding how to spec it.',
    ],
    skillsTitle: 'SKILLS — Core capabilities',
    skillLines: [
      'AI collaboration & agent workflows (Claude Code Skills, MCP servers, pipeline design)',
      'Cross-domain integration (design, math, art, audio, frontend, analytics)',
      'Architecture principles & hard boundaries (machine-verifiable contracts, CI-enforced checks, permission and decision limits)',
      'Game frontend & rendering (Cocos Creator, PixiJS 8, Spine, GLSL, texture and memory budgeting)',
      'Web engineering (TypeScript, Svelte, Vue / React, Nuxt / Vite / Next.js, Electron)',
      'Release & deployment (four environments, Jenkins pipelines, automated triage and deploy verification)',
      'Data analysis & ops support (ClickHouse-family warehousing, re-runnable query and triage flows)',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      'Six areas, each backed by tooling that actually runs. Happy to go deeper on any of them.',
    outcomes: [
      {
        title: 'A semi-automated game production line',
        body:
          'Broke building a game into six stages—design, math, art, audio, frontend, post-launch analytics—built agent-callable tooling for each, and made every stage feed the next. The design rules document is the single source of truth and flows downstream into a verifiable math contract; art and audio both consume the same theme definition, so what you see and what you hear belong to the same game; the frontend builds against the same event structure. This used to be six roles working separately and syncing in meetings. With the spec in place, an art-free demo build is now generated from assertions in a few hours; a reskin takes about a day, bounded by image-generation volume. End to end, a reskin used to cost art and frontend around a week each—it now takes about two days combined.',
      },
      {
        title: 'Frontend SDK and hands-on rendering',
        body:
          'Contributed to a Svelte 5 + PixiJS 8 slot-game frontend SDK—a monorepo of 14 game apps and 29 shared packages—as its single largest contributor (roughly 60% of commits). The architecture is event-driven: the server returns a round as a sequence of events that the client replays to drive animation, which makes a round reproducible and independently testable. Reels, cascading, free spins, and bonus rounds are all shared modules. The low-level work continues alongside it: cut texture VRAM on a live title by 18% (atlas consolidation, halved mask and VFX resolutions, resolution suffixes—logical sizes and rendering code untouched), and wrote the Spine 3.8 → 4.2 converter that repaired three silent data-loss bugs in the runtime upgrade.',
      },
      {
        title: 'Art generation: turning "consistent style" into an executable spec',
        body:
          '16 generation skills covering theme proposals, a visual style guide, batch image generation, character poses, sprite sheets, autotile terrain, parallax backgrounds, and UI components. The key design decision: produce the style guide first, then inject it into every downstream prompt—a batch drifts as it grows, and that spec is the only thing that holds it together. The same theme definition also feeds audio generation, so what you see and what you hear come from one source. The reskin path is settled practice now—it does not need me watching it.',
      },
      {
        title: 'Math: turning a design document into a machine-verifiable contract',
        body:
          'A math pipeline covering 40+ titles. It expands the design rules into a mechanics matrix, interrogates every ambiguous cell until it is pinned down, and emits a machine-verifiable contract. Every batch of computed results then has to clear a set of hard checks—gaps in the matrix, whether a declared mechanic actually appears in the output, field and behaviour assertions—and nothing ships until it passes. Those checks are wired into CI and are independent of which model produced the output, or how many times it has been replaced—the boundary sits outside the model, so drift cannot move it. One line was drawn deliberately: the pipeline runs on its own, but the final call on a payout table stays with the game designer. It now operates without me—I go back in only when the spec itself has to change.',
      },
      {
        title: 'Putting live operations data within reach of an agent',
        body:
          'Built an analytics MCP server that exposes the data warehouse as 16 agent-callable tools—revenue and partner rankings, period-over-period comparison, player behaviour analysis, plus single-round replay and statistics for specific games. On top of it sit 5 analysis agents and a daily triage routine that chains "check revenue → find anomalous games → shortlist suspect players → investigate → produce the report" into one command. The engineering underneath is deliberately defensive: read-only access, query timeouts, and row caps, so an agent cannot take the warehouse down. Ops and engineering now align on the same re-runnable queries instead of one-off lookups and back-and-forth over chat.',
      },
      {
        title: 'Delivery governance and automated issue fixing',
        body:
          'Own CI/CD and four-environment releases (DEV / STG / REL / PROD) across 40 game types and 80+ reskinned variants, with deployment, backup verification, version alignment, and release reporting consolidated into one toolset—anyone can confirm "is it live, and on which version" without asking me. Issue handling runs on the same logic: QA files a ticket, an MCP server picks it up, and the agent pulls that project\'s context and past fixes from a knowledge base spanning 90+ repositories, produces a diagnosis and proposes a fix; an engineer takes it from there. The value is not full autonomy—it is that when the same class of issue recurs across projects, the diagnosis and the fix carry over, cutting implementation time several-fold.',
      },
    ],
    timelineTitle: 'TIMELINE',
    timelineDetail: 'Full timeline',
    timelineExpand: 'Expand full experience',
    expBlock: `2023/02 – Present · ELS Tech · Frontend Team Leader (Gemini frontend line)
▸ Applied AI | Built MCP servers and agent workflows spanning deployment, data analysis, doc sync and issue diagnosis; the math and art-reskin lines now run without me—I step in only when the spec itself needs to change
▸ Cross-domain pipeline | Wired design, math, art, audio, frontend and post-launch analytics so each stage feeds the next
▸ Game client | Built 80+ game products with Cocos Creator + TypeScript; newer work on Svelte 5 + PixiJS 8 + Spine
▸ Shared infra | Maintained proto / WebSocket protocols, runtime configs, webview, i18n, shared bundles & merchant loading rules
▸ Release | Owned DEV / STG / REL / PROD progression, release notes (incl. hotfix), deploy reports & backup alignment
▸ Team ops | Held delivery flat after the frontend team went from five people to two; brand site and game admin console, Jenkins pipelines, technical planning

2014 – 2023/02 · Freelancer (company registered 2017) · Othe Technology UI/UX & FE advisor · meet.jobs FE engineer

2013 · Lunghwa University of Science and Technology · Interactive UI lecturer

2012/10 – 2014/02 · AppWorks accelerator team · UI / frontend

2011/01 – 2012/09 · SHEICO Group · Design team lead

2009/05 – 2010/12 · Saint-Fun International · Industrial design engineer

2008 – 2009 · R.O.C. Navy (conscription)

Certification · AWS Certified AI Practitioner

Education · Chang Gung University BID (2001–2005) · NCKU MID (2005–2008)`,
    footerUrls: 'linkedin.com/in/Dean-6979939a · github.com/hcd1983 · it-monk.tw',
    footerNote: 'Switch language in the top bar; external links open in a new tab.',
    footerBar: 'HCD PORTFOLIO · DEAN HUANG',
    nav: { about: 'About', skills: 'Skills', outcomes: 'Outcomes', exp: 'Experience' },
  },
}
