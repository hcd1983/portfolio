<template>
  <div id="wrap">
    <grid-bg2 />
    <section class="relative z-30 dark:bg-gray-900 min-h-screen flex items-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-cursive lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page Not Found</p>
          <p class="mb-4 text-xl font-light text-gray-500 dark:text-gray-400">Click <router-link to="/" class="text-blue-600 font-semibold">HERE</router-link> to index page.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "404",
}
</script>
