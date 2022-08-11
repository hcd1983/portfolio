<template>
<div id="wrap">
<!--  <work-grid title="it works" />-->
<!--  <work-grid title="nice" />-->
  <Content />
  <about />
  <works />
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
</style>
