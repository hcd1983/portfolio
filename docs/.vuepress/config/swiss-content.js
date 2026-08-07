/** Swiss 完稿版型文案（與 design/pencil-layout-c-swiss 對齊） */
module.exports = {
  zh: {
    kicker: '遊戲前端 Lead · 70+ 遊戲產品 · 交付與整合',
    nameDisplay: 'DEAN HUANG',
    nameSub: '（欣迪）',
    headline:
      '我讓 70+ 款遊戲的前端交付可預期、可驗證、可複用——從共用架構與協議，到部署工具鏈與 AI 自動化。',
    lead:
      '現職遊戲公司前端 Leader，主責 Cocos Creator、跨專案整合與三環境交付流程。設計師背景轉工程，兼具體驗判斷與系統化實作。',
    statsLine:
      '70+ 產品交付  │  40+ 並行專案  │  設計→工程  │  AI 流程與自動化',
    pills: [
      'CI/CD 與多環境交付',
      '跨產品共用架構',
      'Webview 與公平性體驗',
      '資料分析與 AI 工具鏈',
    ],
    aboutTitle: 'ABOUT — 設計思維與工程實作並重',
    aboutParas: [
      '我從工業設計碩士、產品設計師一路走到軟體工程。這段路讓我在做技術決策時，能直接帶入使用者體驗的判斷——Webview 遊戲紀錄的資訊層級、公平性驗證的互動流程，我習慣從體驗層反推技術規格，而不只是接規格做實作。',
      '我對「完成」的定義比較嚴格：功能合併只是起點，真正的完成是可驗證上線、有文件、可追溯、可交接。目前帶領遊戲前端團隊，負責 Cocos Creator 技術規劃、專案節奏、人力調度，以及從共用模組到三環境部署的整條交付鏈。',
      '設計師出身讓我習慣從使用者角度看問題，工程師身分讓我能直接動手解決。帶團隊之後，我把這兩個視角用在系統層面——讓跨產品整合有統一架構、讓交付流程有工具支撐、讓重複工作變成可被 Agent 呼叫的技能，而不是每次都靠人盯。',
    ],
    skillsTitle: 'SKILLS — 核心職能',
    skillLines: [
      '前端工程實作（結構、互動、型別與可維護性）',
      'Vue / React 生態與大型專案演進',
      '遊戲前端與 Cocos Creator（流程、通訊、效能）',
      '共用設定與跨專案整合（多產品同步、降低重工）',
      '版本交付與部署（多環境、報告、備份與追溯）',
      'AI 流程與自動化（將重複工作變成可重用流程）',
      '技術規劃與跨職能協作（產品、後端、維運、文件）',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      '六個方向，每個都有實際部署的工具或系統支撐。面談時可針對任何項目深入展開。',
    outcomes: [
      {
        title: '70+ 遊戲的交付治理',
        body:
          '負責 18 種遊戲類型、70+ 產品變體的持續整合與三環境（DEV / STG / REL）上線；以 deploy-manager 與 dashboard-version-pulse 將部署、備份驗證、版本對齊與上線報告收斂成儀表與腳本，降低人為漏步與環境落差，讓「是否已上線、上到哪一版」可被團隊一致確認。',
      },
      {
        title: '自動化工具鏈與 MCP 整合',
        body:
          '建置 5+ MCP Server（Jira、Confluence、ByteHouse、FairyGUI、Git），將部署、i18n 同步、新專案開倉檢核與議題／文件系統整合封裝成可被 AI Agent 呼叫的工具鏈，讓例行交付可由工具鏈執行，人員聚焦在例外與決策。',
      },
      {
        title: '18 類遊戲的共用架構',
        body:
          '同時維護 42 款獨立遊戲與 9 款多人遊戲；統一 bingoproto / hashproto 通訊協議、game-sdk-common 與 11 個共用模組，以 i18ncommon 管理 12 語系資源同步，並對齊 Webview 遊戲紀錄與公平性驗證體驗，減少重工與不一致。',
      },
      {
        title: 'Webview 體驗遷移與規格化',
        body:
          '推動 Hash 類遊戲（Crash、Hilo、Mines、Plinko 等 10+ 類型）往 Webview 體驗遷移：產出可對齊的規格與遊戲紀錄模板，並將公平性驗證拆解為可複用元件，利於跨團隊實作一致與後續擴充。',
      },
      {
        title: '資料分析與排查流程',
        body:
          '以 rtp-analyzer（PostgreSQL + Google Sheets）、bingo-analyzer 與 gemini-data-analyzer 建立遊戲狀態排查、玩家行為與策略分析的可重跑流程，搭配市場追蹤器，讓營運與技術能以同一套可查詢的流程對齊問題，減少口頭來回與一次性查表。',
      },
      {
        title: 'AI 輔助研發提效',
        body:
          '以 fgui-ai-tool（FairyGUI MCP Server）與 fe-claude CLI 導入 AI 輔助產圖與資產相依管理；建立 cocos3d-dice-template 等可複用模板，並探索 UI 編輯器整合，目標是縮短從需求到可驗收畫面的前置時間。',
      },
    ],
    timelineTitle: 'TIMELINE',
    timelineDetail: '詳細年表',
    timelineExpand: '展開完整經歷',
    expBlock: `2023/02 – 至今 · ELS Tech · 前端 Leader（Gemini 前端線）
▸ 遊戲開發｜以 Cocos Creator 開發 70+ 款遊戲產品，跨產品功能與修正批次同步
▸ 共用架構｜維護 proto／WebSocket 協議、執行期設定、webview、i18n、共用資源包與商戶載入規則
▸ 發版交付｜負責 STG／REL／PROD 三環境推進、Release Note（含 hotfix）、部署報告與 S3 備份對齊
▸ 文件流程｜repo 內實作計畫、checklist、guide，保留可追溯與交接脈絡
▸ 團隊營運｜遊戲管理後台與品牌官網維運、Jenkins 管線、專案技術規劃與人員調度

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
    kicker: 'Game Frontend Lead · 70+ Titles · Delivery & Integration',
    nameDisplay: 'DEAN HUANG',
    nameSub: '(Dean)',
    headline:
      'I make frontend delivery predictable, verifiable, and reusable—across 70+ games, from shared architecture and protocols to deployment tooling and AI automation.',
    lead:
      'Frontend lead at a game studio—Cocos Creator, cross-project architecture, and three-environment delivery. I came from product design, which means I catch experience problems pure-engineering teams miss, and I can write the spec that fixes them.',
    statsLine:
      '70+ titles shipped  │  40+ concurrent projects  │  Design → Engineering  │  AI across code, art & game math',
    pills: [
      'CI/CD & multi-environment delivery',
      'Cross-product shared architecture',
      'Provably-fair & webview UX',
      'Data analysis & AI toolchain',
    ],
    aboutTitle: 'ABOUT — Design thinking with engineering rigor',
    aboutParas: [
      'I lead frontend engineering for a portfolio of 70+ live games—and I got here through industrial design, not computer science. That path is the point: I make technical decisions with the experience layer in view, working backward from how a feature should feel to how it should be specified. Information hierarchy in a player\'s game-history view, the interaction flow for provably-fair result verification—these are design problems that happen to ship as code.',
      'My bar for “done” is strict: merging is the starting point, not the finish. A release is done when it is verified in production, documented, traceable, and ready for someone else to take over. Holding that bar across 18 game types, 70+ product variants, and 40+ concurrent projects in three environments is why I spend as much time on technical direction, release pacing, and the delivery chain as on the games themselves.',
      'What I care about most as a lead is where the effort goes. Anything predictable—a protocol change that has to land in 40 titles, a deploy that has to be verified the same way every time—should be absorbed by the system, not by someone staying late to check it. My job is to keep shrinking that surface, so the team\'s attention stays on the decisions that actually need a human.',
    ],
    skillsTitle: 'SKILLS — Core capabilities',
    skillLines: [
      'Frontend engineering (structure, interaction, types, maintainability)',
      'Vue / React ecosystems and large codebase evolution',
      'Game frontend & Cocos Creator (flows, comms, performance)',
      'Shared config & cross-project integration',
      'Release & deployment (multi-env, reports, backups, traceability)',
      'AI workflows & automation (repeatable pipelines)',
      'Technical planning & cross-functional collaboration',
    ],
    outcomesTitle: 'OUTCOMES',
    outcomesIntro:
      'Six areas, each backed by tools or systems running in production. Happy to go deeper on any of them.',
    outcomes: [
      {
        title: 'Delivery governance for 70+ games',
        body:
          'Owned CI/CD and three-environment releases (DEV / STG / REL) across 18 game types and 70+ product variants. Built an internal deploy manager and a version dashboard that consolidate deployment, backup verification, version alignment, and release reporting. Fewer missed steps—and anyone on the team can answer “is it live, and on which version” without asking.',
      },
      {
        title: 'AI agent toolchain',
        body:
          'Built 5+ internal MCP servers—Model Context Protocol, the interface that lets AI agents drive real systems—wiring the issue tracker, wiki, data warehouse, UI editor, and Git into agent-callable workflows. Deployment, localization sync, and new-repo setup now run end to end, so the team spends its attention on exceptions rather than coordination.',
      },
      {
        title: 'Shared architecture across 18 game types',
        body:
          'Designed and maintained the shared layer behind 42 standalone titles and 9 multiplayer games: unified WebSocket protocols for the bingo and hash game families, a common game SDK, and 11 shared modules, with a shared localization system keeping 12 locales in sync. Standardizing game-history views and provably-fair verification on top of this cut duplicated work and removed inconsistencies between titles.',
      },
      {
        title: 'Webview migration & provably-fair standardization',
        body:
          'Led the migration of hash-type games—Crash, Hilo, Mines, Plinko, and 10+ others—to a webview-based experience. Produced spec and game-history templates other teams could build against, and extracted provably-fair verification—the mechanism that lets players independently confirm a result was not tampered with—into shared components instead of a per-title reimplementation.',
      },
      {
        title: 'Analysis tooling for ops and engineering',
        body:
          'Built the analysis tooling ops and engineering share: an RTP analyzer on PostgreSQL and Google Sheets, a bingo-specific analyzer, a general data analysis service, and a market tracker. Together they turn game-state investigation, player behavior analysis, and strategy review into queries anyone can re-run—replacing one-off lookups and back-and-forth over chat.',
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
▸ Game dev | Built 70+ game products with Cocos Creator; batch-synced features and fixes across titles
▸ Shared infra | Maintained proto / WebSocket protocols, runtime configs, webview, i18n, shared bundles & merchant loading rules
▸ Release | Owned STG / REL / PROD progression, release notes (incl. hotfix), deploy reports & S3 backup alignment
▸ Documentation | In-repo implementation plans, checklists & guides for traceability and handoff
▸ Team ops | Game admin panel & brand site maintenance, Jenkins pipelines, technical planning & staffing

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
