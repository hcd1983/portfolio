<template>
<div class="fixed z-40 top-5 left-5">
  <router-link to="/">中文</router-link> / <router-link to="/en/">English</router-link>
</div>
</template>

<script>
export default {
  name: "LocaleSwitcher"
}
</script>

<style scoped>
.router-link-exact-active {
  font-weight: 700;
  pointer-events: none;
}
</style>
