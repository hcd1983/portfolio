<template>
<header>
  <button @click="active = !active" class="w-8 h-8 fixed top-5 right-5 cursor-pointer z-50 opacity-80 hover:opacity-100">
    <svg-icon v-if="!active" name="menu-open" color="#333" />
    <svg-icon v-else name="menu-close" color="333" />
  </button>
  <nav
      class="fixed h-screen w-screen bg-gray-300 z-40 flex items-start pt-20 md:pt-0 md:items-center justify-center top-0 transition-all duration-500 ease-out"
      :class="{
        'left-0' : active,
        'left-full': !active
      }"
  >
    <grid-bg2 />
    <ul
        class="relative z-10 font-cursive text-6xl md:text-7xl flex flex-col gap-[20px] text-gray-600 transition-opacity duration-300 delay-500"
        :class="{
          'opacity-30' : !active,
          'opacity-100': active
        }"
    >
      <li
          v-for="({to, title}, idx) in menu"
          :key="idx"
      >
        <router-link
            :to="to"
            custom
            v-slot="{ href, route, navigate, isActive, isExactActive }"
        >
          <a
              :active="isActive"
              :href="href"
              @click.prevent="handleLinkClick($event, navigate, route)"
              class="hover:text-black hover:scale-125 duration-500"
          >
            {{ title }}
          </a>
        </router-link>
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
import {gsap, ScrollTrigger} from "../../../modules";
import { ref } from "vue"
export default {
  name: "MainMenu",
  setup() {
    const active = ref(false)
    const menu = [
      { to: '/', title: 'Home' },
      { to: '/#about', title: 'About' },
      { to: '/#skills', title: 'Skills' },
      { to: '/#experience', title: 'Experience' },
      { to: '/#works', title: 'Works' },
    ]
    return {
      active,
      menu
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', this.handleHashChange);
    }
  },
  beforeUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('hashchange', this.handleHashChange);
    }
  },
  methods: {
    handleLinkClick(e, navigate, route) {
      this.active = false
      setTimeout(() => {
        const _route = this.$route
        if (_route.path === '/') {
          const { fullPath, hash } = route
          history.pushState(undefined, undefined, `./${hash}`)
          this.changeHash(hash)
          // this.$router.push(fullPath)
          // gsap.to(window, {duration: .6, scrollTo: hash || 0, ease: "power2.out"}).then(() => {
          //   this.$router.push(fullPath)
          // })
        } else {
          navigate()
        }
      }, 500)
    },
    changeHash(hash) {
      return new Promise(resolve => {
        gsap.to(window, {duration: .6, scrollTo: hash || 0, ease: "power2.out"}).then(() => {
          resolve()
        })
      })
    },
    handleHashChange() {
      console.log('changed')
      const { hash } = window.location
      this.changeHash(hash)
    }
  }
}
</script>

<style scoped>

</style>
