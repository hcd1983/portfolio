const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const portfolioTheme = (options) => {
    return {
        name: 'portfolio',
        extends: defaultTheme({
            ...options,
        }),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            Index: path.resolve(__dirname, 'layouts/Index.vue'),
            // 404: path.resolve(__dirname, 'layouts/404.vue'),
        },
        onInitialized: (app) => {
            app.siteData.globalData = options.siteConfig.globalData
        },
        extendsPage: (page) => {
            // console.log(page.contentRendered)
            page.routeMeta = {
                ...page.routeMeta,
                ...page.frontmatter.routeMeta
            }
            page.data.contentRendered = page.contentRendered
            // page.data.globalData = options.globalData
        },
    }
}

module.exports = {
    portfolioTheme
}
