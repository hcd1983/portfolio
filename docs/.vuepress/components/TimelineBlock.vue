<template>
  <li class="relative mb-10">
    <!-- 對齊 ol 左側直線：pl-8 時約需 -2.25rem 讓方塊中心落在 border 上 -->
    <div
      class="pointer-events-none absolute top-[0.35rem] h-2.5 w-2.5 -translate-x-1/2 bg-black ring-2 ring-white"
      style="left: calc(-2rem - 1px)"
      aria-hidden="true"
    />
    <time class="mb-1 block text-base font-bold leading-none text-black">{{ title }}</time>
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
