import {defineClientConfig, usePageHead, usePageHeadTitle, usePageData} from '@vuepress/client'
import { START_LOCATION, useRoute } from 'vue-router'
import { watch } from 'vue'
import { onBeforeMount } from "vue";
import { useI18n } from 'vue-i18n'
import i18n from "./i18n";
import mitt from 'mitt'
import 'virtual:svg-icons-register'

export default defineClientConfig({
    enhance({ app, router, siteData }){
        // use i18n
        app.use(i18n)

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
        router.afterEach((to, from) => {
            // console.log('after navigation', to.name, from.name)
        })
    },
    setup(){
        const { t } = useI18n()
        const page = usePageData()
        const route = useRoute()
        const head = usePageHead()
        const title = usePageHeadTitle().value

        onBeforeMount(() => {
            if (route.name === '404') document.title = `頁面不存在 | ${title}`
        })


        watch(page, (value) => {
            if (page.value.lang === 'en-US') {
                i18n.global.locale.value = 'en'
            } else {
                i18n.global.locale.value = 'zh'
            }
        },{immediate:true})

        // console.log(route.name)
        // console.log(page.value.frontmatter)
        // console.log(head.value)
        // console.log(usePageHeadTitle().value)
        return { t, i18n }
    },
    rootComponents: [],
})
