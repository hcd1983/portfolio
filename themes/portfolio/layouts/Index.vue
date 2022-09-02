<template>
<div id="wrap">
  <LocaleSwitcher
      :class="{
        'opacity-0' : !introOver,
        'opacity-100': introOver
      }"
  />
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
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import {gsap} from "../../../modules";
export default {
  name: "Layout",
  setup() {
    const introOver = ref(false)
    onBeforeRouteUpdate((to, from) => {
      if (introOver.value === true) {
        setTimeout(() => {
          if (window.scrollY > 30) return;
          gsap.to(window, {duration: .6, scrollTo: 130, ease: "power2.out"});
        }, 500)
      }
    })
    return {
      introOver,
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
