<template>
<div class="flex relative h-[80vh] w-screen max-w-full flex-col justify-center items-center">
  <h1 class="font-cursive text-9xl"><span>HCD</span></h1>
  <hr class="border-[3px] border-gray-700 w-[90%] my-3 max-w-[500px]" />
  <h1 class="font-cursive text-8xl">design</h1>
  <div @click="handleScrollDown" class="absolute left-[50%-48px] bottom-5 w-[48px] cursor-pointer">
    <scroll-down-icon class="animate-bounce fill-gray-600 w-full h-auto" />
  </div>
</div>
</template>

<script>
import {gsap, ScrollTrigger} from "../../../modules";
export default {
  name: "Intro",
  methods: {
    handleScrollDown() {
      gsap.to(window, {duration: 1, scrollTo: 600, ease: "back.out(1.7)"});
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
  overflow: hidden;
  transform: scale(.7);
}

h1.active span{
  opacity: 1;
  width: 100%;
  transform: scale(1);
}

hr {
  transform: skewX(30deg);
  /*border-image: url("https://png.pngtree.com/png-clipart/20170312/ourmid/pngtree-vector-painted-black-and-white-brush-art-white-brush-effect-png-image_3041429.png") 100 round;*/
}
</style>
