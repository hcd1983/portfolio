const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')
const portfolioTheme = (options) => {
    return {
        name: 'portfolio',
        extends: defaultTheme({
            ...options,
            okok: 'cool'
        }),
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            // 404: path.resolve(__dirname, 'layouts/404.vue'),
        },
    }
}

module.exports = {
    portfolioTheme
}
