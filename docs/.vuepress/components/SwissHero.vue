<template>
  <div>
    <section
      class="mx-auto max-w-[880px] px-6 pb-8 pt-9 md:px-10 md:pb-10 md:pt-10"
      aria-labelledby="swiss-hero-heading"
    >
      <div class="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12">
        <!-- 左欄：參考雙欄 Hero，文案 + 標籤 -->
        <div class="min-w-0 flex-1 space-y-5 lg:max-w-[58%]">
          <p
            class="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-neutral-700"
          >
            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-orange-500 text-white" aria-hidden="true">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square">
                <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              </svg>
            </span>
            <span>{{ copy.kicker }}</span>
          </p>

          <h1
            id="swiss-hero-heading"
            class="text-[clamp(1.5rem,4.2vw,2.35rem)] font-black leading-[1.12] tracking-[-0.03em] text-black"
          >
            {{ copy.headline }}
          </h1>

          <p class="text-base leading-relaxed text-neutral-600 md:text-[1.0625rem]">
            {{ copy.lead }}
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span
              v-for="(pill, i) in copy.pills"
              :key="i"
              class="rounded-md border-2 border-black px-3 py-2 text-sm font-extrabold shadow-[2px_2px_0_0_#000]"
              :class="pillTone(i)"
            >
              {{ pill }}
            </span>
          </div>
        </div>

        <!-- 右欄：頭像卡（Swiss 配色：橘米底、粗框、硬陰影） -->
        <aside
          class="mx-auto w-full max-w-[280px] shrink-0 lg:mx-0 lg:w-[min(100%,300px)] lg:max-w-none"
          aria-label="Profile"
        >
          <div
            class="flex h-full flex-col rounded-3xl border-[3px] border-black bg-orange-50 p-4 shadow-[6px_8px_0_0_#171717]"
          >
            <div class="overflow-hidden rounded-2xl border-2 border-black bg-neutral-900">
              <img
                :src="portraitUrl"
                alt=""
                width="400"
                height="400"
                class="aspect-square w-full object-cover"
                loading="eager"
              />
            </div>
            <div class="mt-4 space-y-1.5 px-0.5">
              <p
                id="swiss-hero-name"
                class="text-lg font-black leading-tight tracking-tight text-black md:text-xl"
              >
                {{ copy.nameDisplay }}<span class="font-bold text-neutral-600">{{ copy.nameSub }}</span>
              </p>
              <p class="text-sm font-semibold leading-snug text-neutral-600">
                {{ copy.kicker }}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <div class="h-1.5 w-full bg-orange-500" aria-hidden="true" />
    <div class="mx-auto max-w-[880px] px-6 py-3.5 md:px-10">
      <p class="text-sm font-extrabold leading-relaxed tracking-wide text-black md:text-base">
        {{ copy.statsLine }}
      </p>
    </div>
    <div class="mx-auto max-w-[880px] space-y-1.5 px-6 pb-2 md:px-10">
      <div class="border-2 border-black">
        <img
          :src="ogImage"
          alt=""
          class="block max-h-[200px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <p class="text-sm font-semibold uppercase tracking-wide text-neutral-600">
        {{ copy.coverCaption }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { usePageData, useSiteData } from '@vuepress/client'

const PILL_TONES = [
  'bg-orange-500 text-white',
  'bg-white text-black',
  'bg-neutral-200 text-black',
  'bg-orange-100 text-black',
]

export default {
  name: 'SwissHero',
  setup() {
    const page = usePageData()
    const site = useSiteData()

    const copy = computed(() => {
      const lang = page.value.lang === 'en-US' ? 'en' : 'zh'
      return site.value.globalData.swiss[lang]
    })

    const portraitUrl = computed(
      () => site.value.globalData.portraitUrl || 'https://i.imgur.com/xAJ3I0pm.png',
    )

    const ogImage = computed(
      () =>
        site.value.og?.image ||
        'https://i.imgur.com/Lhdtyjmh.png',
    )

    function pillTone(i) {
      return PILL_TONES[i % PILL_TONES.length]
    }

    return { copy, portraitUrl, ogImage, pillTone }
  },
}
</script>
