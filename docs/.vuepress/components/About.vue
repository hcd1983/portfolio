<template>
<section id="about" class="block py-10">
  <div class="container px-3">
    <div class="mx-auto max-w-[900px] flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:gap-x-12">
      <div class="order-2">
        <h3 class="text-6xl font-cursive pt-3 mb-10">About</h3>
        <h1 class="text-3xl font-bold">Hi, 我是 <span class="text-blue-500">欣迪</span></h1>
        <p class="mt-6 text-base leading-loose">
          從產品設計師轉職的軟體工程師。<br/>
          從基本的 Html、Css 、Js 開始到原生的 PHP 和前後端框架。
          對於網站架設技術有一種不可思議的渴望。目前已經是會使用 <span class="text-blue-500">Larval</span> 、<span class="text-blue-500">Vue</span>、<span class="text-blue-500">React</span> 的全端工程師。
          目前在多家公司擔任顧問，同時也是網站架設公司負責人。
        </p>
      </div>
      <div class="shrink-0 flex-grow order-1 md:order-2">
        <img class="rounded-full w-full max-w-[130px] md:max-w-[200px]" :src="$withBase('/images/portfolio.png')" alt="黃欣迪" loading="lazy">
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>
