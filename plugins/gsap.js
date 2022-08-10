const gsap = (options, app) => {
    return {
        name: 'my-gsap',
        onWatched: (app) => {
            // app.config.globalProperties.gsap = 'suckit'
            // app.provide('gsap', 'gg')
            // console.log(app.provide)
            app.gsap = gsap
        },
        extendsPage: (page) => {
            page.foo = 'foo'
            page.data.bar = 'bar'
        },
    }
}

module.exports = gsap
