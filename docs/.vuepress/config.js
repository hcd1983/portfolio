const { portfolioTheme } = require("../../themes/portfolio")
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { viteBundler } = require('@vuepress/bundler-vite')
const { defaultTheme } = require('@vuepress/theme-default')
const glob = require('glob');
const markdownFiles = glob.sync('docs/**/*.md').map(f => '/' + f);
console.log(markdownFiles)

const themeConfig = {
    sidebar: false,
    navbar: [
        // nested group - max depth is 2
        {
            text: 'Group1',
            children: markdownFiles,
        },
        {
            text: 'Group',
            children: [
                {
                    text: 'SubGroup',
                    children: ['works/test.md'],
                },
            ],
        },
    ],
}

module.exports = {
    lang: 'zh-TW',
    title: 'Hcd',
    description: 'This is my first VuePress site',
    theme: defaultTheme( themeConfig ),
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
