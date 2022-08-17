<template>
  <section>
    <div class="absolute w-full h-full inset-0 lg:flex">
      <div class="flex-1 bg-gray-200">
        <img
            v-if="work.cover"
            :src="work.cover"
            :alt="work.title"
            class="lg:object-cover w-full h-full"
        />
      </div>
      <div class="w-full max-w-[50%] w-[500px] px-8 py-10 flex flex-col justify-between bg-gray-100">
        <div>
          <h1 class="flex items-center justify-between">
            {{ work.title }}
            <a v-if="work.link" :href="work.link" target="_blank">
              <div class="h-8 w-8 animate-bounce">
                <svg-icon
                    name="link"
                    color="#000"
                />
              </div>
            </a>
          </h1>
          <div class="content mt-10" v-html="work.contentRendered" />
        </div>
        <div class="flex items-center justify-center gap-[10px]">
          <div v-for="(icon, _idx) in work.skillTags" :key="`icon-${_idx}`" class="h-12 w-12">
            <svg-icon
                :name="icon"
                color="#999"
            />
          </div>
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

<style scoped lang="scss">
h1 {
  @apply border-b-0 font-medium text-3xl mb-3;
}

h2 {
  @apply border-b-0 font-medium text-2xl;
}

.content:deep() {
  h2 {
    @apply border-b-0 font-medium text-3xl mb-1;
  }
  p {
    @apply text-lg mb-1;
  }
  .header-anchor {
    @apply hidden
  }
}

</style>
