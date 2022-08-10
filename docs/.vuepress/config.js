const { portfolioTheme } = require("../../themes/portfolio")
const config = require("./config")
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const glob = require('glob');
const markdownFiles = glob.sync('docs/**/*.md').map(f => '/' + f);
console.log(markdownFiles)

const themeConfig = {
    sidebar: false,
    colorMode: 'light',
    colorModeSwitch: false,
}

module.exports = {
    lang: 'zh-TW',
    title: config.title,
    description: config.description,
    theme:portfolioTheme( themeConfig ),
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Noto+Sans+TC:wght@400;500&display=swap', crossorigin: true }],
    ],
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
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
        },
        vuePluginOptions: {},
    }),
}
