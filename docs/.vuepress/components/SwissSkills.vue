<template>
  <section id="skills" class="scroll-mt-[52px] border-t-2 border-black py-10">
    <div class="mx-auto max-w-[880px] space-y-2 px-6 md:px-10">
      <h2 class="text-sm font-black uppercase tracking-[0.12em] text-black md:text-base">
        {{ copy.skillsTitle }}
      </h2>
      <ol class="max-w-[760px] list-none space-y-2.5 pt-2">
        <li
          v-for="(line, i) in copy.skillLines"
          :key="i"
          class="flex gap-3 text-base leading-snug text-neutral-600 md:text-[1.0625rem]"
        >
          <span class="w-8 shrink-0 font-mono text-sm font-bold text-black tabular-nums">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
          <span>{{ line }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

export default {
  name: 'SwissSkills',
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
