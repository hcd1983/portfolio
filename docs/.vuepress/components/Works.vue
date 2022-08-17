<template>
<div id="works" class="pb-16 relative">
  <div v-if="!isTouch"  ref="trigger" class="w-screen max-w-full overflow-x-hidden">
    <div class="flex flex-col h-screen">
      <h3 class="text-6xl font-cursive text-center pt-10">My Works</h3>
      <div>{{ works }}</div>
      <div ref="target" class="flex w-fit flex-1 pt-10 gap-[10px]">
        <div v-for="i in 20" class="h-[300px] w-[300px] bg-blue-300 even:bg-red-300 flex-shrink-0 flex items-center justify-center">
          <span class="text-3xl">{{ i }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Mobile
  </div>
</div>
</template>

<script>
import { useSiteData } from "@vuepress/client"
import {gsap, ScrollTrigger} from "../../../modules";
const isWorkPage = (pageData) => {
  const { path } = pageData
  return /\/works\/.*.html/.test(path)
}
export default {
  name: "Works",
  setup() {
    const { works } = useSiteData().value
    return { works }
  },
  data() {
    return {
      st: null,
      isTouch: 0,
      resizeObserver: null
    }
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(() => {
      this.resetTrigger()
    });
    this.resizeObserver.observe(document.getElementById('app'))

    // this.$nextTick(() => {
    //   const isTouch = ScrollTrigger.isTouch
    //   this.isTouch = isTouch
    //   if (isTouch === 0) {
    //     this.setTrigger()
    //   }
    // })
    // if (window) {
    //   window.addEventListener("resize", this.resetTrigger)
    // }
  },
  updated() {
    this.resetTrigger()
  },
  beforeUnmount() {
    this.disableTrigger()
    this.resizeObserver.disconnect()
    this.resizeObserver = null
    // window.removeEventListener("resize", this.resetTrigger)
  },
  methods: {
    setTrigger() {
      this.isTouch = ScrollTrigger.isTouch
      if (  this.isTouch ) return
      // if (window.innerWidth < 1024) return
      const { trigger, target } = this.$refs
      const offset = target.getBoundingClientRect().width - window.innerWidth
      const tween = gsap.to(target, { x: -offset })
      this.st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: `+=${offset}`,
        // markers: true,
        animation: tween,
        scrub: true,
        pin: true,
        pinnedContainer: trigger,
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
