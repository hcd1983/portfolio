const colors = require("tailwindcss/colors")
const enConfig = require("./en-config")
module.exports = {
    en: enConfig,
    title: "HCD Portfolio",
    description: "遊戲公司前端 Leader，用 AI 把企劃、數值、美術、音效、前端、數據串成一條產線。Claude Code Skills、MCP Server、Agent 工作流；Cocos Creator、PixiJS 8、Svelte、TypeScript。AWS Certified AI Practitioner。",
    ga: 'G-G2WG3Q3Z4Y',
    og: {
        image: 'https://i.imgur.com/Lhdtyjmh.png',
    },
    globalData: {
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
                url: 'https://it-monk.tw/'
            }
        ]
    }
}
