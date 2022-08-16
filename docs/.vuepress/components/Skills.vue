<template>
<section class="block py-10 pb-20">
  <div class="container max-w-[900px]">
    <h3 class="text-6xl font-cursive pt-3 mb-10 text-center">Skills</h3>
    <div class="grid w-full grid-cols-2 md:grid-cols-3 gap-[10px]">
      <section v-for="({ title, icons }, idx) in skills" :key="idx"  class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <div class="p-5">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 tracking-wide">{{ title }}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <div class="flex gap-[5px]">
            <div v-for="(icon, _idx) in icons" :key="`icon-${_idx}`" class="w-8 h-8">
              <svg-icon
                  :name="icon"
                  color="#999"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</section>
</template>

<script>
import { usePageData } from '@vuepress/client'
export default {
  name: "Skills",
  setup() {
    const page = usePageData()
    return {
      skills: page.value.globalData.skills
    }
  }
}
</script>

<style scoped>

</style>
