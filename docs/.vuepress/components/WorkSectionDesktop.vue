<template>
  <section ref="section" class="transition duration-300" :class="`${active ? 'active' : ''}`">
    <div class="absolute w-full h-full inset-0 flex transition duration-300" :class="`${active ? '' : 'opacity-30 scale-90' }`">
      <div class="flex-1 bg-gray-200 relative">
        <overlay v-if="work.overlayIcon" class="bg-[rgba(0,0,0,.6)] flex items-center justify-center">
          <div class="w-[130px] h-[130px]">
            <svg-icon
                :name="work.overlayIcon"
                color="#000"
            />
          </div>
        </overlay>
        <img
            v-if="work.cover"
            :src="work.cover"
            :alt="work.title"
            class="object-cover w-full h-full"
            loading="lazy"
        />
      </div>
      <div class="max-w-[50%] w-[500px] px-8 py-10 flex flex-col justify-between bg-gray-100">
        <div>
          <h2 class="flex items-center justify-between">
            {{ work.title }}
            <a v-if="work.link" :href="work.link" target="_blank">
              <div class="h-6 w-6">
                <svg-icon
                    name="link"
                    color="#000"
                />
              </div>
            </a>
          </h2>
          <div v-if="work.contentRendered" class="content mt-6" v-html="work.contentRendered" />
          <template v-if="work.linkList && work.linkList.length">
            <h3 class="mt-3">相關連結</h3>
            <ul class="mt-1">
              <li v-for="({title, link, description}, idx) in work.linkList" :key="idx">
                <h4>
                  <a :href="link">
                    {{ title }}
                    <div class="h-3 w-3 inline-block ml-1">
                      <svg-icon
                          name="link"
                          color="#000"
                      />
                    </div>
                  </a>
                </h4>
                <p v-if="description">{{ description }}</p>
              </li>
            </ul>
          </template>
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
import { ScrollTrigger } from "../../../modules";
import Work from "../models/Work";

export default {
  name: "WorkSectionDesktop",
  props: {
    work: {
      type: Work
    }
  },
  data() {
    return {
      active: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emitter.emit("workSectionReady")
    })

    ScrollTrigger.addEventListener("scrollEnd", () => {
      window.removeEventListener("scroll", this.handleScroll)
    });
    ScrollTrigger.addEventListener("scrollStart", () => {
      window.addEventListener("scroll", this.handleScroll)
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      const el = this.$refs.section
      if (!el) return
      const { x, width } = el.getBoundingClientRect()
      if ( x < - window.innerWidth / 3 || x > window.innerWidth * .7) {
        this.active = false
      } else {
        this.active = true
      }
    }
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
h2 {
  @apply border-b-0 font-medium text-3xl mb-3;
}

h3 {
  @apply border-b-0 font-medium text-lg;
}

ul {
  li {
    a {
      @apply text-blue-500 hover:text-blue-700;
    }
    h4::before {
      content: "-";
      @apply inline-block mr-1 text-xl font-medium;
    }
    p {
      @apply pl-2;
    }
  }
}

.content:deep() {
  h2 {
    @apply border-b-0 font-medium text-3xl mb-1;
  }
  p {
    @apply text-base mb-2;
  }
  .header-anchor {
    @apply hidden
  }
}

</style>
