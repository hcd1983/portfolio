const colors = require("tailwindcss/colors")
module.exports = {
    title: "HCD Design Portfolio",
    description: "",
    globalData: {
        skills: [
            {
                title: 'HTML / CSS / Vanilla JS',
                icons: ['html', 'css', 'js', 'ts'],
                description: '<p>具備網頁設計的相關知識，能熟練切版並使用原生 Js 語法進行開發。<p/>' +
                    '<p>會使用 rem 方式進行切版佈局。<p/>' +
                    '<p>熟悉 Promise 、async / await 非同步處理相關語法與特性，進行 api 的串接。</p>' +
                    '<p>已知基本 TypeScript 用法，正將部分小型專案重構。</p>'
            },
            {
                title: 'JS Frameworks',
                icons: ['node', 'vue', 'react'],
                description: '<p>熟悉 vue 和 react 生態圈。<p/>' +
                    '<p><strong>vue</strong>: 為目前主要使用框架。 能使用 Nuxt 完成大型專案。 也能針對需求，此用 Vue-Cli 或 Vuepress 進行開發。<p/>' +
                    '<p><strong>React</strong>: 維護 NextJs 大型網站已有 3 年經驗，能夠優化效能與開發新功能。</p>'
            },
            {
                title: 'CSS Framworks',
                icons: ['tailwind', 'bootstrap'],
                description: '<p>近兩年的專案都使用 <strong>tailwindcss</strong> 作為前端框架。能熟練使用 unity css 並對 config 做設定。<p/>' +
                    '<p>早期使用 Bootstrap 4 進行開發，目前有一個合作專案使用 Bootstrap 5。</p>'
            },
            {
                title: 'Laravel / PHP / MySql',
                icons: [ 'laravel', 'php', 'mysql'],
                description: '<p>能用純 php + mysql 開發 CMS 和購物車系統。</p>' +
                    '<p><strong>Laravel</strong> 為目前主要使用之後端框架。熟悉 Controller 和 Model，能產出 api，也會做事件排程（另如訂閱扣款)，並使用 github action 的 cronjob 處理佇列事件。</p>'
            },
            {
                title: 'WordPress',
                icons: ['wordpress'],
                description: '<p>了解 WP 佈景架構，能開發外掛及佈景主題。曾自寫 WP 的購物車外掛，至今運作良好。</p>' +
                    '<p>近期專案把 WP 當成純後端使用。僅使用其 REST API 功能。</p>'
            },
            {
                title: 'Graphic / 3D Modeling',
                icons: ['ps', 'ai', 'solidworks'],
                description: '<p>設計師背景，讓我對色彩學、語意學都有一定認識。曾經擔任互動介面設計與 Adobe 系列講師。</p>' +
                    '<p>具備 Solidworks 3D 軟體建模能力，曾在小型專案導入 Bobylon.js 將 3D 模型放入網站互動。</p>' +
                    '<p>設計師的經驗在處理 svg 和 canvas 等網站技術上給我很大的幫助。</p>'
            },
        ],
        socialLink: [
            {
                sub: 'LinkedIn',
                icon: 'linkedIn2',
                color: '#000',
                url: 'https://www.linkedin.com/in/%E6%AC%A3%E8%BF%AA-%E9%BB%83-6979939a/'
            },
            {
                sub: 'GitHub',
                icon: 'github',
                color: '#000',
                url: 'https://github.com/hcd1983'
            },
            {
                sub: 'Blog',
                icon: 'blog',
                color: '#000',
                url: 'https://it-monk.com/'
            }
        ]
    }
}
