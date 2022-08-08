const { portfolioTheme } = require("../../themes/portfolio")
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')

module.exports = {
    lang: 'zh-TW',
    title: 'Hcd',
    description: 'This is my first VuePress site',
    theme: portfolioTheme(),
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
