const colors = require("tailwindcss/colors")
const enConfig = require("./en-config")
module.exports = {
    en: enConfig,
    title: "HCD Portfolio",
    description: "遊戲客戶端工程師 / 前端 Leader，web 與 canvas 兩邊都是本業。Cocos Creator、PixiJS 8、Spine、FairyGUI、GLSL 與貼圖記憶體最佳化；70+ 產品、18 種遊戲類型、四環境交付。",
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
