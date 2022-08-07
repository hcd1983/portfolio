module.exports = {
    title: 'Hcd portfolio',
    description: 'Just playing around',
    dest: 'public',
    base: '/',
    themeConfig: {
        author: 'hcd'
    },
    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //     }
    // },
    postcss: {
        plugins: [
            require('tailwindcss')('../tailwind.config.js'),
            require('autoprefixer'),
        ]
    }
}
