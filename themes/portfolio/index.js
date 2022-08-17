const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
// require('dotenv').config()
// const nodeEnv = process.env.NODE_ENV
//
// const isDev = () => {
//     return nodeEnv === 'development'
// }

const isWorkPage = ({ path }) => {
    const regx = /\/works\/.*\.html/
    return regx.test(path)
}
const portfolioTheme = (options) => {
    return {
        name: 'portfolio',
        extends: defaultTheme({
            ...options,
        }),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            Index: path.resolve(__dirname, 'layouts/Index.vue'),
            404: path.resolve(__dirname, 'layouts/404.vue'),
        },
        clientConfigFile: path.resolve(__dirname, './clientConfig.js'),
        onInitialized: (app) => {
            // siteData 加入 globalData
            app.siteData.globalData = options.siteConfig.globalData

            // siteData 加入 works
            const works = []
            app.pages.forEach(( page ) => {
                if (!isWorkPage(page)) return
                const { frontmatter, lang, contentRendered  } = page
                works.push({
                    ...frontmatter,
                    lang,
                    contentRendered
                })
            })
            app.siteData.works = works

            // 移除 works/ 所有的頁面
            app.pages = app.pages.filter(( page ) => {
                return !isWorkPage(page)
            })
        },
        onPrepared: (app) => {

        },
        extendsPage: (page) => {
            // 加 routeMeta
            page.routeMeta = {
                ...page.routeMeta,
                ...page.frontmatter.routeMeta
            }

            // 把 contentRendered 加到 pageData
            page.data.contentRendered = page.contentRendered
            // page.data.globalData = options.globalData
        },
    }
}

module.exports = {
    portfolioTheme
}
