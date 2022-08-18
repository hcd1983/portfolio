import {defineClientConfig, usePageHead, usePageHeadTitle, usePageData} from '@vuepress/client'
import { START_LOCATION, useRoute } from 'vue-router'
import { onBeforeMount } from "vue";
import mitt from 'mitt'
import 'virtual:svg-icons-register'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        // add emitter
        const emitter = mitt()
        app.config.globalProperties.$emitter = emitter
        app.provide('myGlobalVariable', emitter)

        //route guard
        router.beforeEach((to,from) => {
            if (from === START_LOCATION) {
                // initial navigation
                // console.log('start')
            }
            // console.log('before navigation', from, to)
        })
        router.afterEach((to) => {
            // console.log('after navigation')
        })
    },
    setup(){
        const page = usePageData()
        const route = useRoute()
        const head = usePageHead()
        const title = usePageHeadTitle().value

        onBeforeMount(() => {
            if (route.name === '404') document.title = `頁面不存在 | ${title}`
        })

        // console.log(route.name)
        // console.log(page.value.frontmatter)
        // console.log(head.value)
        // console.log(usePageHeadTitle().value)
    },
    rootComponents: [],
})
