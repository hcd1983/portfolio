<template>
<div id="wrap">
  <grid-bg />
<!--  <work-grid title="it works" />-->
<!--  <work-grid title="nice" />-->
  <Content />
<!--  <RouterLink to="/works/test">Tester</RouterLink>-->
<!--  <RouterLink to="/">Home</RouterLink>-->
</div>
</template>

<script>
import {gsap, ScrollTrigger} from "../../../modules"
import { ref } from "vue"
import { usePageData, useSiteData } from '@vuepress/client'
export default {
  name: "Layout",
  setup() {
    const page = usePageData()
    const site = useSiteData()
  },
}
</script>

<style scoped>

</style>
