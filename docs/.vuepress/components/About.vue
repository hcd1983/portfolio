<template>
<section id="about" class="block pt-10 pb-20 bg-gray-100">
  <div class="container max-w-[900px]">
    <div class="mx-auto flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:gap-x-12">
      <div class="order-2">
        <h3 class="text-6xl font-cursive pt-3 mb-10">About</h3>
        <h1 class="text-3xl font-bold">Hi, 我是 <span class="text-blue-500">欣迪</span></h1>
        <p class="mt-6 text-base leading-loose">
          從產品設計師轉職的軟體工程師。<br/>
          從基本的 Html、Css 、Js 開始到原生的 PHP 和前後端框架。
          對於網站架設技術有一種不可思議的渴望。目前已經是會使用 <span class="text-blue-500">Larval</span> 、<span class="text-blue-500">Vue</span>、<span class="text-blue-500">React</span> 的全端工程師。
          目前為 Freelancer 網頁工程師，也在數家企業擔任技術顧問。
        </p>
        <div class="flex gap-[20px] mt-10 justify-center md:justify-start">
          <a
              v-for="{sub, url, icon, color}, key in socialLink"
              :key="key"
              :href="url"
              target="_blank"
              class="flex flex-col items-center md:opacity-70 md:hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <div class="w-8 h-8">
              <svg-icon :name="icon" :color="color" />
            </div>
            <p>{{ sub }}</p>
          </a>
        </div>
      </div>
      <div class="shrink-0 flex-grow order-1 md:order-2">
        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" :src="$withBase('/images/portfolio.png')" alt="Hcd Design Studio" loading="lazy">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
export default {
  name: "About",
  setup() {
    const theme = useThemeData()
    return {
      socialLink: theme.value.globalData.socialLink
    }
  },
}
</script>

<style scoped>

</style>
