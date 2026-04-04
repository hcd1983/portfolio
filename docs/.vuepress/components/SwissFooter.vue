<template>
  <footer class="border-t-2 border-black">
    <div
      class="flex min-h-[52px] items-center justify-center bg-black px-4 py-3.5 text-center text-sm font-bold uppercase tracking-[0.18em] text-white"
    >
      {{ copy.footerBar }}
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

export default {
  name: 'SwissFooter',
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
