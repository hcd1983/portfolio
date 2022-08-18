<template>
<section id="about" class="block pt-10 pb-20 bg-gray-100">
  <div class="container max-w-[900px]">
    <div class="mx-auto flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:gap-x-12">
      <div class="order-2">
        <h3 class="text-6xl font-cursive pt-3 mb-10">About</h3>
        <h1 class="text-3xl font-bold">Hi, 我是 <span class="text-blue-500">欣迪</span></h1>
        <p class="mt-6 text-base leading-loose">
          從產品設計師轉職的軟體工程師。<br/>
          具備 Html、Css 、Js 和 PHP 等前後端語法相關知識，熱愛挑戰技術與解決困難。<br/>
          現在是會使用 <span class="text-blue-500">Larval</span> 、<span class="text-blue-500">Vue</span>、<span class="text-blue-500">React</span> 的全端開發者。
          現為前端為主的 Freelancer ，也在數家企業擔任顧問。
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
        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" src="https://i.imgur.com/xAJ3I0pm.png" alt="Hcd Design Studio" loading="lazy">
<!--        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" src="@assets/icons/ai.svg" alt="Hcd Design Studio" loading="lazy">-->
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { useSiteData } from '@vuepress/client'
export default {
  name: "About",
  setup() {
    const site = useSiteData()
    return {
      socialLink: site.value.globalData.socialLink
    }
  },
}
</script>

<style scoped>

</style>
