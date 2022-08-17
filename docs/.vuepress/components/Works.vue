<template>
<div id="works" class="pb-16 relative">
  <div v-if="!isTouch"  ref="trigger" class="w-screen max-w-full overflow-x-hidden">
    <div class="flex flex-col h-screen">
      <h3 class="text-6xl font-cursive text-center pt-10">My Works</h3>
      <div ref="target" class="flex flex-1 flex-wrap pt-10 gap-[10px] w-fit flex-nowrap">
        <template v-for="(work, idx) in works">
          <WorkSectionDesktop
              :work="work"
              class="relative w-screen h-full max-h-[600px]"
          />
        </template>
      </div>
    </div>
  </div>
  <clientOnly v-else>
    Mobile
  </clientOnly>
</div>
</template>

<script>
import { useSiteData } from "@vuepress/client"
import Works from "../models/Works";
import {gsap, ScrollTrigger} from "../../../modules";
const isWorkPage = (pageData) => {
  const { path } = pageData
  return /\/works\/.*.html/.test(path)
}
export default {
  name: "Works",
  setup() {
    const { works } = useSiteData().value
    return { works: (new Works(works)).works }
  },
  data() {
    return {
      st: null,
      isTouch: 0,
      resizeObserver: null,
      workSectionCount: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.resizeObserver = new ResizeObserver(() => {
        this.resetTrigger()
      });
      this.resizeObserver.observe(document.getElementById('app'))
    })

    this.$emitter.on("workSectionReady", () => {
      this.workSectionCount++
      if (this.workSectionCount === this.works.length) {
        this.resetTrigger()
      }
    })
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
      if (window.innerWidth < 1024) this.isTouch = true
      // this.isTouch = ScrollTrigger.isTouch
      if (  this.isTouch ) return
      const { trigger, target } = this.$refs
      const offset = target.getBoundingClientRect().width - window.innerWidth
      const tween = gsap.to(target, { x: -offset })
      this.st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: `+=${offset}`,
        // markers: {startColor: "green", endColor: "red", fontSize: "36px"},
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
      }
      this.st = null
    },
    resetTrigger() {
      console.log('ok')
      this.disableTrigger()
      this.setTrigger()
    }
  }
}
</script>

<style scoped>

</style>
