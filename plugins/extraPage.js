// import { createPage } from '@vuepress/core'
const { createPage } = require('@vuepress/core')

const extraPage = (options, app) => {
    return {
        name: 'extra-page',
        extendsPage: (page) => {
            page.routeMeta = {
                ...page.routeMeta,
                ...page.frontmatter.routeMeta
            }
            console.log(options)
            page.foo = 'foo'
            page.data.bar = 'bar'
            page.data.socialLink = options.socialLink
        },
        async onInitialized(app) {
            app.pages.push(
                await createPage(app, {
                    path: '/foo.html',
                    frontmatter: {
                        layout: 'Layout',
                    },
                    content: `\
---
name: foo
title: foo work
description: 從產品設計師轉職的軟體工程師。 從基本的 Html、Css 、Js 開始到原生的 PHP 和前後端框架。目前在多家公司擔任顧問，同時也是網站架設公司負責人。
---
# Tester

Hello, world.
`,
                })
            )
        },
    }
}

module.exports = extraPage
