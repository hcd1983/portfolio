const { path } = require('@vuepress/utils')
const portfolioTheme = (options) => {
    return {
        name: 'portfolio',
        layouts: {
            Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
            // 404: path.resolve(__dirname, 'layouts/404.vue'),
        },
        // ...
    }
}

module.exports = {
    portfolioTheme
}
