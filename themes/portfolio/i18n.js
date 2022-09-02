import { createI18n, useI18n } from 'vue-i18n'


const messages = {
    en: {
        'Related Links': 'Related Links',
        message: {
            hello: 'hello world'
        }
    },
    zh: {
        'Related Links': '相關連結',
        message: {
            hello: 'こんにちは、世界'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'zh-TW', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
})

export default i18n
