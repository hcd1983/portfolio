import { defineClientConfig } from '@vuepress/client'
import { START_LOCATION } from 'vue-router'

export default defineClientConfig({
    enhance({ app, router, siteData }){
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
