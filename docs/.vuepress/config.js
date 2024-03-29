const { portfolioTheme } = require("../../themes/portfolio")
const { createSvgIconsPlugin } = require('vite-plugin-svg-icons')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const Config = require("./models/Config")
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
// const extraPage = require("../../plugins/extraPage")
const glob = require('glob');
const markdownFiles = glob.sync('docs/**/*.md').map(f => '/' + f);
const faviconHead = require("./favionHead.js")
console.log(markdownFiles)


const themeConfig = {
    sidebar: false,
    colorMode: 'light',
    colorModeSwitch: false,
    themePlugins: {
        backToTop: false
    },
    siteConfig: Config,
    locales: {
        '/': {
            selectLanguageName: '繁體中文',
        },
        '/en/': {
            selectLanguageName: 'English',
        },
    },
}

module.exports = {
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'zh-TW',
            title: Config.title,
            description: Config.description,
        },
        '/en/': {
            lang: 'en-US',
            title: Config.en.title,
            description: Config.en.description,
            head:[
                ...faviconHead,
                ['meta', { property: 'og:type', content: 'website' }],
                ['meta', { property: 'og:title', content: Config.en.description }],
                ['meta', { property: 'og:description', content: Config.en.description }],
                ['meta', { property: 'og:image', content: Config.og.image }],
                ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
                ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
                ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Noto+Sans+TC:wght@400;500&display=swap', crossorigin: true }],
            ]
        },
    },
    lang: 'zh-TW',
    title: Config.title,
    description: Config.description,
    theme:portfolioTheme( themeConfig ),
    alias: {
        '@assets': path.resolve(__dirname, './assets'),
        '@public': path.resolve(__dirname, './public'),
    },
    head: [
        ...faviconHead,
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: Config.title }],
        ['meta', { property: 'og:description', content: Config.description }],
        ['meta', { property: 'og:image', content: Config.og.image }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Noto+Sans+TC:wght@400;500&display=swap', crossorigin: true }],
    ],
    plugins: [
        // gsap(),
        // extraPage(Config),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        googleAnalyticsPlugin({
            id: Config.ga
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
            ssr: {
                noExternal: ['gsap'],
            },
            plugins: [
                // svgSprites({
                //     vueComponent: true,
                //     exclude: ['node_modules/**', './public/**/*.*'],
                //     outputFolder: 'dist/public'
                // }),
                createSvgIconsPlugin({
                    // Specify the icon folder to be cached
                    iconDirs: [path.resolve(__dirname, './assets/icons')],
                    // Specify symbolId format
                    symbolId: 'icon-[dir]-[name]',
                    inject: 'body-last',
                    customDomId: '__svg__icons__dom__',
                }),
            ]
        },
        vuePluginOptions: {},
    }),
}
