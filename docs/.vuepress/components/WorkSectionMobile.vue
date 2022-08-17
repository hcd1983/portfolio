<template>
  <section
      class="rounded-xl overflow-hidden drop-shadow-md"
      :class="{
        'lg:col-span-2': work.colSpan
      }"
  >
    <div class="w-full h-full inset-0 flex flex-col transition duration-300">
      <div
          class="bg-gray-200 relative h-[250px]"
          :class="{
            'lg:h-[300px]': work.colSpan
          }"
      >
        <overlay v-if="work.overlayIcon" class="bg-[rgba(0,0,0,.6)] flex items-center justify-center">
          <div class="w-[90px] h-[90px]">
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
      <div class="flex-1 w-full px-8 py-10 flex flex-col justify-between bg-gray-100">
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
          <div v-if="work.contentRendered" class="content mt-6 md:mt-3" v-html="work.contentRendered" />
          <template v-if="work.linkList && work.linkList.length">
            <h3 class="mt-3">相關連結</h3>
            <ul class="mt-1">
              <li v-for="({title, link, description}, idx) in work.linkList" :key="idx">
                <h4>
                  <a :href="link" target="_blank">
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
        <div class="flex items-center justify-center gap-[10px] mt-5">
          <div v-for="(icon, _idx) in work.skillTags" :key="`icon-${_idx}`" class="h-8 w-8">
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
  }
}
</script>

<style scoped lang="scss">
h2 {
  @apply border-b-0 font-medium text-2xl mb-3;
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
