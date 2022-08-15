<template>
  <li class="mb-10 ml-4">
    <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-800 ">{{ title }}</time>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "TimelineBlock",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
