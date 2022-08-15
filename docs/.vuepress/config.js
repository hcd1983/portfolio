const { portfolioTheme } = require("../../themes/portfolio")
// const config = require("./config/index.js")
const Config = require("./models/Config")
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const extraPage = require("../../plugins/extraPage")
const glob = require('glob');
const markdownFiles = glob.sync('docs/**/*.md').map(f => '/' + f);
const faviconHead = require("./favionHead.js")
console.log(markdownFiles)

const themeConfig = {
    sidebar: false,
    colorMode: 'light',
    colorModeSwitch: false,
}

module.exports = {
    lang: 'zh-TW',
    title: Config.title,
    description: Config.description,
    theme:portfolioTheme( themeConfig ),
    alias: {
        '@assets': path.resolve(__dirname, './assets'),
    },
    head: [
        ...faviconHead,
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Noto+Sans+TC:wght@400;500&display=swap', crossorigin: true }],
    ],
    plugins: [
        // gsap(),
        extraPage(Config),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    clientConfigFile: path.resolve(__dirname, './clientConfig.js'),
    bundler: viteBundler({
        viteOptions: {
            css: {
                postcss: {
                    plugins: [
                        require('tailwindcss')(require('../../tailwind.config')),
                        require('autoprefixer')
                    ]
                }
            },
            ssr: {
                noExternal: ['gsap'],
            },
        },
        vuePluginOptions: {},
    }),
}
