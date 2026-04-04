<template>
  <section
    id="about"
    class="scroll-mt-[52px] border-t border-transparent pt-10 pb-12"
  >
    <div class="mx-auto max-w-[880px] space-y-3 px-6 md:px-10">
      <h2 class="text-sm font-black uppercase tracking-[0.15em] text-black md:text-base">
        {{ copy.aboutTitle }}
      </h2>
      <p
        v-for="(para, i) in copy.aboutParas"
        :key="i"
        class="max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-[1.0625rem]"
      >
        {{ para }}
      </p>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

export default {
  name: 'SwissAbout',
  setup() {
    const page = usePageData()
    const site = useSiteData()
    const copy = computed(() => {
      const lang = page.value.lang === 'en-US' ? 'en' : 'zh'
      return site.value.globalData.swiss[lang]
    })
    return { copy }
  },
}
</script>
