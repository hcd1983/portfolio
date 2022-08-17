<template>
<div id="works" class="pb-16 relative">
  {{ works }}
  <div v-if="!isTouch"  ref="trigger" class="w-screen max-w-full overflow-x-hidden">
    <div class="flex flex-col h-screen">
      <h3 class="text-6xl font-cursive text-center pt-10">My Works</h3>
      <div ref="target" class="flex w-fit flex-1 pt-10 gap-[10px]">
<!--        <section v-for="({cover, title}, idx) in works" class="relative w-screen h-[300px] flex items-center justify-center">-->
<!--          <div class="absolute w-screen h-full inset-0 bg-blue-300 flex">-->
<!--            <div class="w-1/2">-->
<!--                  <img-->
<!--                      v-if="cover"-->
<!--                      :src="cover"-->
<!--                      :alt="title"-->
<!--                      class="object-cover w-full h-full object-center"-->
<!--                  />-->
<!--            </div>-->
<!--            <div class="flex-1 p-5">-->
<!--              <h2>{{ title }} {{ cover }}</h2>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->
        <template v-for="(work, idx) in works">
          <WorkSectionDesktop
              :work="work"
              class="relative w-screen h-[300px]"
          />
        </template>
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
        console.log('child ready')
        this.resetTrigger()
      }
    })

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
      // this.isTouch = ScrollTrigger.isTouch
      // if (  this.isTouch ) return
      // if (window.innerWidth < 1024) return
      const { trigger, target } = this.$refs
      const offset = target.getBoundingClientRect().width - window.innerWidth
      const tween = gsap.to(target, { x: -offset })
      this.st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: `+=${offset}`,
        markers: {startColor: "green", endColor: "red", fontSize: "36px"},
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
