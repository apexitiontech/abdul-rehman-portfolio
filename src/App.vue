<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SideBar from './components/SideBar.vue'
import ColorSwitcher from './components/ColorSwitcher.vue'

</script>

<template>

  <div class="d-flex gap-6">
    <SideBar />
    <ColorSwitcher />
    <div class="main-content w-100">
      <!-- bottom header  -->
      <div class="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1">
        <div class="header-bottom-menu w-full">
          <ul class="d-flex gap-1 align-items-center justify-content-between">
            <li class="rounded-3 bg1-color">
              <RouterLink to="/" class="d-flex align-items-center gap-2 n11-color fs-eight p-2">
                <span class="fs-five d-flex align-items-center justify-content-center">
                  <i class="ph-fill ph-user"></i>
                </span>
                <span class="d-none d-md-block">About Me</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-2 n5-color fs-eight p-2">
                  <span class="fs-five d-flex align-items-center justify-content-center">
                    <i class="ph-fill ph-code-block"></i>
                  </span>
                  <span class="d-none d-md-block">Portfolio</span>
                </div>
                <span class="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3 d-none d-md-block">16</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/price" class="d-flex align-items-center gap-2 n5-color fs-eight p-2">
                <span class="fs-five d-flex align-items-center justify-content-center">
                  <i class="ph-fill ph-briefcase"></i>
                </span>
                <span class="d-none d-md-block">Pricing</span>
              </RouterLink>
            </li>

            <li>
              <RouterLink to="/contact" class="d-flex align-items-center gap-2 n5-color fs-eight p-2">
                <span class="fs-five d-flex align-items-center justify-content-center"><i
                    class="ph-fill ph-envelope"></i></span>
                <span class="d-none d-md-block">Contact</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="w-100 bgn1-color p-3 position-fixed z-3 top-0 d-lg-none d-flex align-items-center justify-content-between br-bottom-n5 box-shadow1">
        <div class="d-flex gap-3 align-items-center">

          <button class="side-icon bg1-color mood_toggle">
            <i class="mood_icon ph-fill ph-moon fs-six n11-color"></i>
          </button>
        </div>
      </div>
      <RouterView />
    </div>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
