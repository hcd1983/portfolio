<template>
  <section id="outcomes" class="scroll-mt-[52px] border-t-2 border-black py-10">
    <div class="mx-auto max-w-[880px] space-y-4 px-6 md:px-10">
      <h2 class="text-sm font-black uppercase tracking-[0.15em] text-black md:text-base">
        {{ copy.outcomesTitle }}
      </h2>
      <p class="max-w-[760px] text-base leading-relaxed text-neutral-600 md:text-[1.0625rem]">
        {{ copy.outcomesIntro }}
      </p>
      <ul class="max-w-[760px] list-none space-y-5">
        <li v-for="(item, i) in copy.outcomes" :key="i" class="space-y-2">
          <div class="h-0.5 w-full bg-black" aria-hidden="true" />
          <h3 class="text-sm font-black uppercase tracking-wide text-black md:text-base">
            {{ String(i + 1).padStart(2, '0') }} {{ item.title }}
          </h3>
          <p class="text-base leading-relaxed text-neutral-600 md:text-[1.0625rem]">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

export default {
  name: 'SwissOutcomes',
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
