<template>
<div class="flex relative h-[80vh] w-screen max-w-full flex-col justify-center items-center" :class="`${start ? 'active opacity-100' : 'opacity-0'}`">
  <h1 class="font-cursive text-9xl">
    <span class="!delay-300">HCD</span>
  </h1>
  <hr class="border-[3px] border-gray-700 my-3 max-w-[500px] transition-all duration-300" />
  <h1 class="font-cursive text-8xl">
    <span class="!delay-300">Portfolio</span>
  </h1>
  <button @click.prevent="handleScrollDown" class="absolute left-[50%-48px] bottom-5 w-[48px] cursor-pointer transition-opacity duration-800 delay-1000">
    <scroll-down-icon class="animate-bounce fill-gray-600 w-full h-auto" />
  </button>
</div>
</template>

<script>
import {gsap, ScrollTrigger} from "../../../modules";
import { ref } from "vue"
export default {
  name: "Intro",
  setup() {
    const start = ref(false)
    return {
      start
    }
  },
  mounted() {
   this.$emitter.on('introOver', () => {
     if (this.$route.hash) return
     if (window.scrollY > 30) return;
     gsap.to(window, {duration: .6, scrollTo: 100, ease: "power2.out"});
   })
   this.$nextTick(() => {
     setTimeout(() => {
       this.start = true
       setTimeout(() => {
         this.$emitter.emit('introOver')
       }, 900)
     }, 500)
   })
  },
  methods: {
    handleScrollDown() {
      gsap.to(window, {duration: .3, scrollTo: '#about', ease: "back.out(1.7)"}).then(() => {
        if (typeof window !== undefined) {
          window.history.pushState(undefined, undefined, './#about')
        }
      });
    }
  }
}
</script>

<style scoped>
h1 {
  width: fit-content;
}
h1 span{
  display: flex;
  justify-content: center;
  opacity: 0;
  width: 0;
  margin: auto;
  transition: all .5s ease-in-out;
  /*overflow: hidden;*/
  transform: scale(.7);
}

.active h1 span{
  opacity: 1;
  width: 100%;
  transform: scale(1);
}

hr {
  transform: skewX(30deg);
  width: 0;
}

.active hr {
  width: 90%;
}

button {
  opacity: 0;
}

.active button {
  opacity: 1;
}
</style>
