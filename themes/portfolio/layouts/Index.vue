<template>
<div id="wrap">
  <grid-bg2 class="!fixed" />
  <MainMenu/>
  <intro />
  <div
      id="content"
      class="z-10 relative transition-opacity duration-300"
      :class="{
        'opacity-0' : !introOver,
        'opacity-100': introOver
      }"
  >
    <about />
    <Skills />
    <timeline />
    <works />
  </div>
<!--  <Content-->
<!--      id="content"-->
<!--      class="z-10 relative transition-opacity duration-300"-->
<!--      :class="{-->
<!--        'opacity-0' : !introOver,-->
<!--        'opacity-100': introOver-->
<!--      }"-->
<!--  />-->
</div>
</template>

<script>
import { ref, onMounted, inject } from 'vue'
export default {
  name: "Layout",
  setup() {
    const introOver = ref(false)
    return {
      introOver
    }
  },
  mounted() {
    this.$emitter.on('introOver', () => {
      this.introOver = true
    })
  }
}
</script>

<style scoped>

</style>
