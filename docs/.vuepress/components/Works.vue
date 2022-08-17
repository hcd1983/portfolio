<template>
<div id="works" class="relative">
  <div v-if="!isTouch"  ref="trigger" class="w-screen max-w-full overflow-x-hidden">
    <div class="flex flex-col h-screen">
      <h3 class="text-6xl font-cursive text-center pt-10">My Works <button class="inline-block w-10 h-10 animate-bounce" @click.prevent="handleScrollDown"><svg-icon name="scroll" color="$000"/></button></h3>
      <div ref="target" class="flex flex-1 flex-wrap pt-10 w-fit flex-nowrap">
        <template v-for="(work, idx) in works">
          <WorkSectionDesktop ref="workSection"
              :active="activeWork === idx"
              :work="work"
              class="relative w-screen h-[calc(100%-30px)] max-h-40vh work"
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
      workSectionCount: 0,
      activeWork: 0
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
      const tween = gsap.to(target, { x: -offset  })
      this.st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: `+=${offset}`,
        // markers: {startColor: "green", endColor: "red", fontSize: "36px"},
        animation: tween,
        scrub: true,
        pin: true,
        pinnedContainer: trigger,
        onUpdate: self => {
          console.log("progress:", self.progress.toFixed(2), "direction:", self.direction, "velocity", self.getVelocity())
        }
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
      this.disableTrigger()
      this.setTrigger()
    },
    handleScrollDown() {
      const { trigger, target } = this.$refs
      // const xDistance = target.offsetWidth
      // const unit = trigger.parentElement.parentElement.offsetHeight  / ( this.works.length - 1 )
      // const speed = target.getBoundingClientRect().width / trigger.parentElement.parentElement.offsetHeight
      // const offset = target.getBoundingClientRect().width - window.innerWidth
      window.trigger = trigger
      window.target = target
      // const move = offset / (this.works.length - 1)
      // gsap.to(window, {duration: .3, scrollTo: window.scrollY + move })
      // const { target } = this.$refs
      // const el = target.querySelector(".work.active").nextSibling
      // if (!el) return
      // window.el = el
      // this.toElActive(el)
    },
    toElActive(el) {
      if(!el) return;
      const y = window.scrollY
      const { x: elX } = el.getBoundingClientRect()
      console.log(elX)
      if (elX <= 0 ) return
      gsap.to(window, {duration: .1, scrollTo: y + 50, ease: "none"}).then(() => {
        this.toElActive(el)
      })
      // window.tween = tween
      // setTimeout(() => {
      //   tween.kill()
      // },1000)
    }
  }
}
</script>

<style scoped>

</style>
