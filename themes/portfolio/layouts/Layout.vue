<template>
<div>
  <div class="container">
    <Content />
    <div class="grid grid-cols-4">
      <div class="flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <img src="https://source.unsplash.com/collection/3106804/800x600" class="w-full h-64 object-cover">
            <div class="w-full font-bold text-xl text-gray-900 px-6 py-3">Lorem ipsum dolor sit amet.</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style scoped>
::v-deep(h1) {
  @apply text-3xl font-bold;
}
</style>
