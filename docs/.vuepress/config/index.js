const colors = require("tailwindcss/colors")
const enConfig = require("./en-config")
module.exports = {
    en: enConfig,
    title: "HCD Portfolio",
    description: "產品設計師轉職的軟體工程師。具備 Html、Css 、Js 和 PHP 等前後端語法相關知識，熱愛挑戰技術與解決困難。現在是會使用 Larval 、Vue、React 的全端開發者。",
    ga: 'G-G2WG3Q3Z4Y',
    og: {
        image: 'https://i.imgur.com/Lhdtyjmh.png',
    },
    globalData: {
        skills: {
            en: [
                {
                    title: 'HTML / CSS / Vanilla JS',
                    icons: ['html', 'css', 'js', 'ts'],
                    description: '<p>In-depth knowledge of web development.<p/>' +
                        '<p>Ability to layout with REM style.<p/>' +
                        '<p>Familiar with Promise, async / await asynchronous processing.</p>' +
                        '<p>Basic TypeScript usage is known.</p>'
                },
                {
                    title: 'JS Frameworks',
                    icons: ['node', 'vue', 'react'],
                    description: '<p>Familiar with Both React and Vue.<p/>' +
                        '<p><strong>Vue</strong>: For the current main use of the framework. Can use Nuxt to complete large projects. It can also be developed with Vue-Cli or Vuepress.<p/>' +
                        '<p><strong>React</strong>: 3 years experience in maintaining NextJs large website.</p>'
                },
                {
                    title: 'Git',
                    icons: ['git'],
                    description: '<p>Proficient in using Git for version control, familiar with Git flow and other mainstream release processes.<p/>' +
                        '<p>Experienced in integrating with Jenkins for completing CI/CD deployment processes.</p>'
                },
                {
                    title: 'Laravel / PHP / MySql',
                    icons: ['laravel', 'php', 'mysql'],
                    description: '<p>Develop CMS or shopping cart system with php & mysql.</p>' +
                        '<p>Familiar wiht Laravel and MVC framework.</p>'
                },
                // {
                //     title: 'WordPress',
                //     icons: ['wordpress'],
                //     description: '<p>Able to develop WordPress plugins and themes.</p>' +
                //         '<p>Or just use WordPress Rest API</p>'
                // },
                {
                    title: 'Cocos Creator',
                    icons: ['cocos'],
                    description: `Using the Cocos Creator game engine for development, integrated with TypeScript.`
                },
                {
                    title: 'UI / Graphic / 3D Modeling',
                    icons: ['ps', 'ai', 'solidworks'],
                    description: '<p>Used to be a interface design and Adobe software lecturer.</p>' +
                        '<p>3D modling. Able to use Bobylon.js to put 3D model in website.</p>'
                },
            ],
            zh: [
                {
                    title: 'HTML / CSS / Vanilla JS',
                    icons: ['html', 'css', 'js', 'ts'],
                    description: '<p>具備網頁設計的相關知識，能熟練切版並使用原生 Js 語法進行開發。<p/>' +
                        '<p>會使用 rem 方式進行切版佈局。<p/>' +
                        '<p>熟悉 Promise 、async / await 非同步處理相關語法與特性，進行 api 的串接。</p>' +
                        '<p>熟悉 TypeScript，嚴謹的型別規劃與模型架構。</p>'
                },
                {
                    title: 'JS Frameworks',
                    icons: ['node', 'vue', 'react'],
                    description: '<p>熟悉 vue 和 react 生態圈。<p/>' +
                        '<p><strong>vue</strong>: 為目前主要使用框架。 能使用 Nuxt 完成大型專案。 也能針對需求，此用 Vue-Cli 或 Vuepress 進行開發。<p/>' +
                        '<p><strong>React</strong>: 維護 NextJs 大型網站已有 3 年經驗，能夠優化效能與開發新功能。</p>'
                },
                {
                    title: 'Git',
                    icons: ['git'],
                    description: `<p>使用 Git 進行版本控制，熟悉 Git flow 等主流發布流程。</p>
                    <p>了解 merge, rebase, cherry-pick 等常用指令運作方式與時機。並搭配 Jenkins 完成 CI/CD 之部署流程。</p>
                    `
                },
                {
                    title: 'Laravel / PHP / MySql',
                    icons: ['laravel', 'php', 'mysql'],
                    description: '<p>能用純 php + mysql 開發 CMS 和購物車系統。</p>' +
                        '<p><strong>Laravel</strong> 為目前主要使用之後端框架。熟悉 Controller 和 Model，能產出 api，也會做事件排程（另如訂閱扣款)，並使用 github action 的 cronjob 處理佇列事件。</p>'
                },
                // {
                //     title: 'WordPress',
                //     icons: ['wordpress'],
                //     description: '<p>了解 WP 佈景架構，能開發外掛及佈景主題。曾自寫 WP 的購物車外掛，至今運作良好。</p>' +
                //         '<p>近期專案把 WP 當成純後端使用。僅使用其 REST API 功能。</p>'
                // },
                {
                    title: 'Cocos Creator',
                    icons: ['cocos'],
                    description: `使用 Cocos Creator 遊戲引擎，搭配 TypeScript 進行開發。`
                },
                {
                    title: 'UI / Graphic / 3D Modeling',
                    icons: ['ps', 'ai', 'solidworks'],
                    description: '<p>曾任互動介面設計與 Adobe 軟體講師。</p>' +
                        '<p>具備 UI 能力，繪製 svg 並導入 figma 進行排版編輯。</p>' +
                        '<p>Solidworks 3D 軟體建模能力，曾在小型專案導入 Bobylon.js 將 3D 模型放入網站互動。</p>' +
                        '<p>有處理 svg 和 canvas 等動畫技術的能力。</p>'
                },
            ],
        }
        ,
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
