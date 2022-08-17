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
const scrollDownUnit = 600
const triggerId = "worksTrigger"

export default {
  name: "Works",
  setup() {
    const { works } = useSiteData().value
    return { works: (new Works(works)).works }
  },
  data() {
    return {
      st: null,
      tl: null,
      isTouch: 0,
      resizeObserver: null,
      workSectionCount: 0,
      activeWork: 0
    }
  },
  mounted() {

    this.resizeObserver = new ResizeObserver(() => {
      this.resetTrigger()
    });
    this.resizeObserver.observe(document.getElementById('app'))

    this.$emitter.on("workSectionReady", () => {
      this.workSectionCount++
      if (this.workSectionCount === this.works.length) {
        this.resetTrigger()
      }
    })
  },
  updated() {
    // this.resetTrigger()
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
      if (  this.isTouch  ) return
      const { trigger, target } = this.$refs
      // const offset = target.getBoundingClientRect().width - window.innerWidth
      const totalXMove = target.getBoundingClientRect().width - window.innerWidth
      const offset = (this.works.length - 1) * scrollDownUnit

      if ( this.tl || totalXMove <= 0 ) return;
      const triggerOptions = {
        id: triggerId,
        trigger: trigger,
        start: "top top",
        end: `+=${offset}`,
        scrub: true,
        pin: true,
        pinnedContainer: trigger,
        onUpdate: self => {
          console.log("progress:", self.progress.toFixed(2), "direction:", self.direction, "velocity", self.getVelocity())
        },
        // markers: {startColor: "green", endColor: "red", fontSize: "36px"},
        // pinType: "fixed"
      }

      const tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          ...triggerOptions,
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: {min: 0.1, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            // ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
          }
        }
      });

      const moveDistance = totalXMove / (this.works.length - 1)

      tl.addLabel("work-0")
      for (let i = 1; i < this.works.length; i++) {
        tl.to(target, { x: - i * moveDistance })
        tl.addLabel(`work-${i}`)
      }

      tl.addLabel("end");

      window.tl = tl
      this.st = tl.scrollTrigger
      this.tl = tl
    },
    // refreshTrigger() {
    //   if (this.st) this.st.refresh()
    // },
    resetTrigger() {
      this.disableTrigger()
      this.setTrigger()
    },
    disableTrigger() {
      if (!this.tl) return
      this.tl.scrollTrigger.kill()
      this.tl.kill()
      this.tl = null
    },
    handleScrollDown() {

      const { start, end } = this.tl.scrollTrigger

      if ( window.scrollY + 300 < start ) {
        gsap.to(window, {duration: .3, scrollTo: start })
      } else if (window.scrollY < end) {
        gsap.to(window, {duration: .3, scrollTo: (window.scrollY + scrollDownUnit ) })
      }

    }
  }
}
</script>

<style scoped>

</style>
