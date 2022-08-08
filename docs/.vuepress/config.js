const { portfolioTheme } = require("../../themes/portfolio")
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
    lang: 'zh-TW',
    title: 'Hcd',
    description: 'This is my first VuePress site',
    theme: portfolioTheme(),
    layouts: {
        Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        // 404: path.resolve(__dirname, 'layouts/404.vue'),
    },
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
