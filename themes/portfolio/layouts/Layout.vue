<template>
<div id="wrap">
<!--  <work-grid title="it works" />-->
<!--  <work-grid title="nice" />-->
  <Content />
  <RouterLink to="/works/test">Tester</RouterLink>
  <RouterLink to="/">Home</RouterLink>
</div>
</template>

<script>
import { usePageData, useSiteData } from '@vuepress/client'
export default {
  name: "Layout",
  setup() {
    const page = usePageData()
    const site = useSiteData()
  },
  mounted() {
    console.log(this.$router.getRoutes())
  }
}
</script>

<style scoped>
* {
  --bg-line-color: rgba(0, 0, 0, .1)
}
#wrap {
  @apply transition-all duration-700;
  background-image: linear-gradient(var(--bg-line-color), transparent 1px), linear-gradient(90deg, var(--bg-line-color) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
