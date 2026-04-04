const colors = require("tailwindcss/colors")
const enConfig = require("./en-config")
module.exports = {
    en: enConfig,
    title: "HCD Portfolio",
    description: "遊戲公司前端 Leader，設計背景轉工程。18 種遊戲類型、70+ 產品變體、12 語系、三環境交付。主責 Cocos Creator、跨專案整合、部署工具鏈與 AI 自動化。Vue、React、Node.js。",
    ga: 'G-G2WG3Q3Z4Y',
    og: {
        image: 'https://i.imgur.com/Lhdtyjmh.png',
    },
    globalData: {
        skills: {
            en: [
                {
                    title: 'Frontend Engineering',
                    description: '<p>Strong foundation in HTML, CSS, JavaScript, and TypeScript, with attention to maintainable UI structure, interaction quality, and readable code.</p>' +
                        '<p>Comfortable handling async flows, API integration, data modeling, and UI state management in real production systems.</p>' +
                        '<p>Bring a product-and-experience mindset into engineering work, not just feature completion.</p>'
                },
                {
                    title: 'Vue / React Ecosystem',
                    description: '<p>Hands-on experience with both Vue and React ecosystems in large-scale projects.</p>' +
                        '<p><strong>Vue</strong>: Main working framework, including Nuxt, Vite, and documentation-oriented setups.</p>' +
                        '<p><strong>React</strong>: Experienced in maintaining and evolving large Next.js websites, with focus on structure, performance, and long-term maintainability.</p>' +
                        '<p>Use AI coding assistants to accelerate refactors, test ideas, and documentation drafts—always reviewed before shipping.</p>'
                },
                {
                    title: 'Game Frontend & Cocos Creator',
                    description: '<p>Build game frontend experiences with <strong>Cocos Creator</strong> and TypeScript, balancing interaction quality, code structure, and runtime performance.</p>' +
                        '<p>Comfortable with gameplay flows, WebSocket integration, protocol evolution, event handling, and keeping frontend behavior aligned with backend contracts.</p>' +
                        '<p>Capable of turning one-off game features into reusable patterns across multiple titles.</p>'
                },
                {
                    title: 'Shared Config & Multi-project Integration',
                    description: '<p>Work across shared frontend resources and product lines, including game configs, webview layers, i18n, shared bundles, loading assets, and merchant-specific rules.</p>' +
                        '<p>Good at synchronizing the same requirement or fix across multiple games and shared modules, reducing duplicated work and rollout risk.</p>' +
                        '<p>Focus on making systems easier to reuse, easier to reason about, and easier to ship as a group.</p>'
                },
                {
                    title: 'Release & Delivery',
                    description: '<p>Own the last mile of delivery: branch flow, STG / REL / PROD progression, Jenkins-based deployment, deployment reports, S3 backup checks, and REL vs PROD alignment.</p>' +
                        '<p>Write and maintain release notes, including hotfix pages, with attention to traceability and team readability.</p>' +
                        '<p>Not stopping at “merged” — care about what is actually live, verifiable, and documented.</p>'
                },
                {
                    title: 'AI Workflow & Automation',
                    description: '<p>Treat AI as part of the real delivery pipeline: structured prompting, workflow automation, report generation, analysis pipelines, and reusable tool interfaces.</p>' +
                        '<p>Build practical flows around <strong>proposal-generator</strong>, <strong>GitLab-based work reports</strong>, <strong>ByteHouse analysis</strong>, and <strong>skills / agent</strong> packaging.</p>' +
                        '<p>Focus on turning repeated team work into reusable workflows instead of isolated one-off prompts.</p>'
                },
                {
                    title: 'Technical Planning & Team Collaboration',
                    description: '<p>Beyond implementation, participate in technical planning, project coordination, release pacing, and team-facing documentation.</p>' +
                        '<p>Act as a bridge across product, frontend, backend, deployment, and documentation so work can move from idea to production reliably.</p>' +
                        '<p>Current role is not only frontend development, but also planning, integration, and delivery leadership.</p>'
                },
            ],
            zh: [
                {
                    title: '前端工程實作',
                    description: '<p>具備扎實的 HTML、CSS、JavaScript 與 TypeScript 基礎，重視畫面結構、互動品質、程式可讀性與長期維護性。</p>' +
                        '<p>熟悉非同步流程、API 串接、資料建模與畫面狀態管理，能處理實際產品中的前端工程問題。</p>' +
                        '<p>不只從功能完成角度出發，也會從產品與使用者體驗角度思考工程實作方式。</p>'
                },
                {
                    title: 'Vue / React 生態實戰',
                    description: '<p>具備 Vue 與 React 生態系的大型專案實務經驗。</p>' +
                        '<p><strong>Vue</strong>：目前主要使用框架，熟悉 Nuxt、Vite 及文件型專案架構。</p>' +
                        '<p><strong>React</strong>：具備維護大型 Next.js 網站經驗，重視效能、結構與可維護性。</p>' +
                        '<p>也會搭配 AI 輔助重構、測試案例發想與文件補齊，但最終仍以人工檢視品質與正確性。</p>'
                },
                {
                    title: '遊戲前端與 Cocos Creator',
                    description: '<p>以 <strong>Cocos Creator</strong> 與 TypeScript 進行遊戲前端開發，兼顧互動體驗、程式架構與執行效能。</p>' +
                        '<p>熟悉遊戲流程設計、WebSocket 串接、協議演進、事件處理與前後端狀態一致性。</p>' +
                        '<p>能將單一功能經驗整理為可複用模式，快速同步到多款遊戲專案。</p>'
                },
                {
                    title: '共用配置與跨專案整合',
                    description: '<p>熟悉跨專案處理共用前端資源與配置，包含 gameconfigs、game-webview、i18n、共用資源包、loading assets 與商戶客製規則。</p>' +
                        '<p>擅長把同一類需求或修正同步到多個遊戲與共用模組，降低重工與遺漏風險。</p>' +
                        '<p>重視讓系統可複用、可理解、可整體交付，而不是各專案各自為政。</p>'
                },
                {
                    title: '版本交付與部署流程',
                    description: '<p>負責交付最後一哩：包含 Git 分支流程、STG / REL / PROD 推進、Jenkins 部署、部署報告、S3 備份驗證，以及 REL / PROD 版本對齊。</p>' +
                        '<p>能撰寫與維護 Release Note（含 hotfix 頁面），讓版本狀態、環境差異與交付內容對團隊清楚可追溯。</p>' +
                        '<p>不只關心「有沒有 merge」，更關心是否真的上線、可驗證、可說明。</p>'
                },
                {
                    title: 'AI 流程與自動化',
                    description: '<p>把 AI 視為正式工作流程的一部分：包含結構化提示、流程自動化、工作彙報生成、資料分析流程與可重用工具介面。</p>' +
                        '<p>曾落地 proposal-generator、GitLab 工作彙報流程、ByteHouse 分析流程，以及 skills / agent 能力封裝。</p>' +
                        '<p>重點不是「用 AI 幫忙一下」，而是把團隊重複工作整理成可持續複用的協作流程。</p>'
                },
                {
                    title: '技術規劃與團隊協作',
                    description: '<p>除了技術實作，也參與技術規劃、專案推進、上版節奏安排與團隊文件整理。</p>' +
                        '<p>能站在產品、前端、後端、部署與文件的交界點，協助團隊把事情從想法推進到可穩定上線。</p>' +
                        '<p>目前的角色不只是前端開發者，更是兼具規劃、整合與交付推進能力的技術整合型人才。</p>'
                },
            ],
        }
        ,
        swiss: require('./swiss-content'),
        socialLink: [
            {
                sub: 'LinkedIn',
                icon: 'linkedin3',
                color: '#000',
                url: 'https://www.linkedin.com/in/Dean-6979939a/'
            },
            {
                sub: 'GitHub',
                icon: 'github',
                color: '#000',
                url: 'https://github.com/hcd1983'
            },
            {
                sub: 'Blog',
                icon: 'blog2',
                color: '#000',
                url: 'https://it-monk.com/'
            }
        ]
    }
}
