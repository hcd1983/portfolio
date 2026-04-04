<template>
  <div id="wrap" class="min-h-screen bg-white font-swiss text-neutral-900 antialiased">
    <SwissTopBar />
    <main>
      <SwissHero />
      <SwissAbout />
      <SwissSkills />
      <SwissOutcomes />
      <Timeline />
      <SwissFooter />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style>
html {
  scroll-padding-top: 3.75rem;
}
</style>
