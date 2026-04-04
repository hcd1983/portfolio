<template>
  <header
    class="sticky top-0 z-[100] border-b-2 border-black bg-black text-white"
    role="banner"
  >
    <div
      class="mx-auto flex max-w-[880px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-3 md:px-10"
    >
      <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold tracking-wide">
        <router-link
          :to="homePath"
          class="text-base font-black tracking-[0.12em] text-white hover:text-orange-400"
        >
          HCD
        </router-link>
        <span class="hidden h-4 w-px bg-neutral-600 sm:block" aria-hidden="true" />
        <template v-for="(link, i) in socialLink" :key="i">
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-orange-400"
          >
            {{ link.sub }}
          </a>
        </template>
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <nav
          class="flex flex-wrap items-center gap-1 text-sm font-extrabold uppercase tracking-wide"
          aria-label="Page"
        >
          <a
            v-for="item in navItems"
            :key="item.hash"
            :href="item.hash"
            class="px-2 py-1 hover:text-orange-400"
          >
            {{ item.label }}
          </a>
        </nav>
        <div class="flex items-center gap-1">
          <router-link
            to="/"
            class="px-3 py-1.5 text-sm font-extrabold"
            :class="
              page.lang !== 'en-US'
                ? 'bg-white text-black'
                : 'border-2 border-white text-white hover:bg-white/10'
            "
          >
            中文
          </router-link>
          <router-link
            to="/en/"
            class="px-3 py-1.5 text-sm font-extrabold"
            :class="
              page.lang === 'en-US'
                ? 'bg-white text-black'
                : 'border-2 border-white text-white hover:bg-white/10'
            "
          >
            EN
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

export default {
  name: 'SwissTopBar',
  setup() {
    const page = usePageData()
    const site = useSiteData()

    const copy = computed(() => {
      const lang = page.value.lang === 'en-US' ? 'en' : 'zh'
      return site.value.globalData.swiss[lang]
    })

    const socialLink = computed(() => site.value.globalData.socialLink || [])

    const navItems = computed(() => [
      { hash: '#about', label: copy.value.nav.about },
      { hash: '#skills', label: copy.value.nav.skills },
      { hash: '#outcomes', label: copy.value.nav.outcomes },
      { hash: '#experience', label: copy.value.nav.exp },
    ])

    const homePath = computed(() => (page.value.lang === 'en-US' ? '/en/' : '/'))

    return {
      page,
      socialLink,
      navItems,
      homePath,
    }
  },
}
</script>
