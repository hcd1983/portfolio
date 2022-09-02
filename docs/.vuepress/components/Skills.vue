<template>
<section id="skills" class="relative block py-10 pb-20">
  <div class="container max-w-[1200px] relative z-10">
    <h3 class="text-6xl font-cursive pt-3 mb-10 text-center">Skills</h3>
    <div class="grid w-full gap-[20px] md:grid-cols-2 lg:grid-cols-3 md:gap-[10px]">
      <section v-for="({ title, icons, description }, idx) in skills" :key="idx"  class="bg-white rounded-lg border border-gray-200 shadow-md p-5 flex flex-col justify-between h-full">
          <div>
            <h5 class="mb-8 text-2xl font-semibold tracking-tight text-gray-900 tracking-wide">{{ title }}</h5>
            <div class="mb-3 font-normal text-gray-700 description" v-html="description" />
          </div>
          <div class="flex gap-[10px] mt-3">
            <div v-for="(icon, _idx) in icons" :key="`icon-${_idx}`" class="h-12 w-12 md:w-10 md:h-10">
              <svg-icon
                  :name="icon"
                  color="#999"
              />
            </div>
          </div>
      </section>
    </div>
  </div>
</section>
</template>

<script>
// import { usePageData } from '@vuepress/client'
// import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import {usePageData, useSiteData} from '@vuepress/client'
import Works from "../models/Works";

export default {
  name: "Skills",
  setup() {
    const page = usePageData().value
    const siteData = useSiteData().value
    return {
      skills: (page.lang === 'en-US' ? siteData.globalData.skills.en : siteData.globalData.skills.zh),
    }
  }
}
</script>

<style scoped>
.description:deep(p){
  @apply mb-3;
}
</style>
