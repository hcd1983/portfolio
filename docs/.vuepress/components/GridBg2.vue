<template>
<div class="absolute w-full h-full inset-0 z-0" />
</template>

<script>

export default {
  name: "GridBg2",
}
</script>

<style scoped>
* {
  --bg-line-color: rgba(0, 0, 0, .1)
}
div {
  background-size: 30px 30px;
  background-image: linear-gradient(var(--bg-line-color), transparent 1px), linear-gradient(90deg, var(--bg-line-color) 1px, transparent 1px);
  background-position: center;
}
</style>
