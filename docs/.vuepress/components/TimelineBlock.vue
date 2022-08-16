<template>
  <li class="mb-10 ml-4">
    <div class="absolute w-3 h-3 bg-gray-700 rounded-full mt-2 -left-1.5 border border-white" />
    <time class="mb-1 text-lg font-medium leading-none text-blue-700 ">{{ title }}</time>
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
