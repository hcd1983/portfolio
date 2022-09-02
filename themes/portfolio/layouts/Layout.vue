<template>
<div id="wrap">
  <LocaleSwitcher />
  <MainMenu/>
  <Content
      id="content"
      class="z-10 relative transition-opacity duration-300"
  />
</div>
</template>

<script>
export default {
  name: "Layout",
}
</script>

<style scoped>

</style>
