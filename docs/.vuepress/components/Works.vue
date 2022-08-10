<template>
<div ref="trigger" class="w-screen overflow-x-hidden">
  <div ref="target" class="flex w-fit">
    <div v-for="i in 20" class="h-screen w-[50vw] bg-blue-300 even:bg-red-300 flex-shrink-0 flex items-center justify-center">
      <span class="text-3xl">{{ i }}</span>
    </div>
  </div>
</div>
</template>

<script>
import {gsap, ScrollTrigger} from "../../../modules";
export default {
  name: "Works",
  data() {
    return {
      st: null
    }
  },
  mounted() {
    console.log(ScrollTrigger.create)
    this.$nextTick(() => {
      this.setTrigger()
    })
    if (window) {
      window.addEventListener("resize", this.resetTrigger)
    }
  },
  beforeUnmount() {
    this.disableTrigger()
    window.removeEventListener("resize", this.resetTrigger)
  },
  methods: {
    setTrigger() {
      const { trigger, target } = this.$refs
      const offset = target.getBoundingClientRect().width - window.innerWidth
      const tween = gsap.to(target, { x: -offset })
      this.st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "+=700",
        // markers: true,
        animation: tween,
        scrub: true,
        pin: true,
        // pinnedContainer: trigger,
        // pinType: "fixed"
      })
      window.st = this.st
    },
    disableTrigger() {
      if (this.st) {
        this.st.kill({
          revert: true,
          allowAnimation: false,
        })
        this.st = null
      }
    },
    resetTrigger() {
      this.disableTrigger()
      this.setTrigger()
    }
  }
}
</script>

<style scoped>

</style>
