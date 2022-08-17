<template>
  <section class="flex items-center justify-center">
    <div class="absolute w-full h-full inset-0 bg-blue-300 flex">
      <div class="w-1/2 bg-gray-200">
        <img
            v-if="work.cover"
            :src="work.cover"
            :alt="work.title"
            class="object-cover w-full h-full object-center"
        />
      </div>
      <div class="flex-1 p-5">
        <h2>{{ work.title }}</h2>
        <div v-html="work.contentRendered">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { toRefs, toRef } from "vue"
import Work from "../models/Work";
export default {
  name: "WorkSectionDesktop",
  props: {
    work: {
      type: Work
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emitter.emit("workSectionReady")
    })
  }
  // setup(props) {
  //   // console.log(props.work)
  //   return {
  //     ...props.work
  //   }
  // },
}
</script>

<style scoped>

</style>
