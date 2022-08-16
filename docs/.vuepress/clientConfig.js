import { defineClientConfig } from '@vuepress/client'
import { START_LOCATION } from 'vue-router'
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
                console.log('start')
            }
            console.log('before navigation', from, to)
        })
        router.afterEach((to) => {
            console.log('after navigation')
        })
    },
    setup(){
    },
    rootComponents: [],
})
