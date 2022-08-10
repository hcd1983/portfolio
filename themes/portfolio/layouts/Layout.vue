<template>
<div>
  <div class="container">
    <intro />
    <about />
    <works />
<!--    <Content />-->
  </div>
</div>
</template>

<script>
import { usePageData } from '@vuepress/client'
export default {
  name: "Layout",
  setup() {
    const page = usePageData()
    console.log(page.value.bar) // bar
  },
  mounted() {
    console.log(this.gsap)
  }
}
</script>

<style scoped>
</style>
