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
            // 404: path.resolve(__dirname, 'layouts/404.vue'),
        },
        extendsPage: (page) => {
            page.routeMeta = {
                ...page.routeMeta,
                ...page.frontmatter.routeMeta
            }

            // page.data.globalData = options.globalData
        },
    }
}

module.exports = {
    portfolioTheme
}
