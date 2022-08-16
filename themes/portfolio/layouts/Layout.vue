<template>
<div id="wrap">
  <MainMenu/>
<!--  <grid-bg />-->
<!--  <work-grid title="it works" />-->
<!--  <work-grid title="nice" />-->
  <Content id="content" class="z-10 relative" />
<!--  <RouterLink to="/works/test">Tester</RouterLink>-->
<!--  <RouterLink to="/">Home</RouterLink>-->
</div>
</template>

<script>
import { usePagesData, resolvers, } from "@vuepress/client"
export default {
  name: "Layout",
  setup() {
    // const pDatas = usePagesData()
    for (let valueKey in usePagesData().value) {
      resolvers.resolvePageData(valueKey).then((pageData) => {
        console.log(pageData)
        console.log(decodeURI(pageData.path));
      });
    }
  }
}
</script>

<style scoped>

</style>
