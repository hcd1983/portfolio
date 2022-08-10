<template>
<div id="wrap">
    <intro />
    <about />
    <works />
    <RouterLink to="/works/test">Tester</RouterLink>
    <RouterLink to="/">Home</RouterLink>
    <Content />
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

  }
}
</script>

<style scoped>
</style>
