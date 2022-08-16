<template>
<div ref="gridBg" class="w-full h-full fixed inset-0 z-0" />
</template>

<script>
import { ref } from "vue"
import {gsap} from "../../../modules";
export default {
  name: "GridBg",
  setup() {
    const scrollTop = ref(0)
    const max = 900
    const min = 0
    const speed = 10
    const gridWidth = ref( (max + min) / 2)
    return {
      scrollTop,
      gridWidth,
      max,
      min,
      speed
    }
  },
  mounted() {
    this.initBgWidth()
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", this.scrollEffect)
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      console.log(this.scrollTop)
      window.removeEventListener("scroll", this.scrollEffect)
    }
  },
  methods: {
    initBgWidth() {
      gsap.set(this.$refs.gridBg, { css: {
          backgroundSize: `${this.gridWidth}px ${this.gridWidth}px`
        }})
    },
    scrollEffect(event) {
      if (this.scrollTop > window.scrollY) {
        // 上
        this.gridWidth = this.gridWidth >= this.max ? this.min : this.gridWidth + this.speed
        gsap.set(this.$refs.gridBg, { css: {
            backgroundSize: `${this.gridWidth}px ${this.gridWidth}px`
          }})
      } else {
        // 下
        this.gridWidth = this.gridWidth <= this.min ? this.max : this.gridWidth - this.speed
        gsap.set(this.$refs.gridBg, { css: {
            backgroundSize: `${this.gridWidth}px ${this.gridWidth}px`
          }})
      }
      this.scrollTop = window.scrollY
    }
  }
}
</script>

<style scoped>
* {
  --bg-line-color: rgba(0, 0, 0, .1)
}
div {
  /*@apply transition-all duration-700;*/
  /*background-image: linear-gradient(var(--bg-line-color), transparent 1px), linear-gradient(90deg, var(--bg-line-color) 1px, transparent 1px);*/
  background-image: linear-gradient(90deg, var(--bg-line-color) 1px, transparent 1px);
  background-position: center;
}
</style>
