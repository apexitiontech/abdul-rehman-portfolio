<template>
    <!-- sidebar start -->
    <div class="side-menu">
      <!-- sidebar-btn  -->
      <div class="sidebar-btn close-btn cursor-pointer d-block d-lg-none">
        <i class="ph ph-x fs-two p1-color"></i>
      </div>

      <div class="d-flex">
        <div class="side-menu-left">
          <div>
            <div class="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">

              <div class="d-flex flex-column align-items-center gap-1">
                <span class="toggle_name fs-eleven n5-color">DarkMode</span>
                <button class="side-icon bg1-color mood_toggle">
                  <i class="mood_icon ph-fill ph-moon fs-six n11-color"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="side-menu-right overflow-y-auto">
          <div class="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
            <div class="">
              <div class="sidebar-profile">
                <div class="position-relative">
                  <div class="profile-img1 d-flex justify-content-center overflow-hidden">
                    <img src="@/assets/images/user.jpg" alt="user" class="" />
                  </div>
                  <span class="thumb">👋</span>
                </div>

                <h4 class="n5-color fw-semibold fs-five mt-2 text-center">
                  Abdul Rehman
                </h4>
                <span class="n5-color fs-nine d-block text-center">Senior Software Engineer</span>
                <div class="d-flex justify-content-center gap-2 align-items-center mt-4">
                  <a href="javascript:void(0)" class="social-icon p1-color">
                    <i class="ph ph-facebook-logo"></i>
                  </a>
                  <a href="javascript:void(0)" class="social-icon p1-color">
                    <i class="ph ph-instagram-logo"></i>
                  </a>
                  <a href="javascript:void(0)" class="social-icon p1-color">
                    <i class="ph ph-x-logo"></i>
                  </a>
                  <a href="javascript:void(0)" class="social-icon p1-color">
                    <i class="ph ph-linkedin-logo"></i>
                  </a>
                </div>
              </div>
              <div class="line-divider my-4 my-md-8"></div>

              <div class="menu-list">
                <ul class="d-flex flex-column gap-3">
                  <!-- About Me -->
                  <li :class="[
                    'rounded-3',
                    route.name === 'home' ? 'bg1-color' : '',
                  ]">
                    <RouterLink to="/" class="d-flex align-items-center gap-2   n5-color fs-eight px-3 py-2">
                      <i class="ph ph-user  fs-six"></i> About Me
                    </RouterLink>
                  </li>

                  <!-- Portfolio -->
                  <li :class="[
                    'rounded-3',
                    route.name === 'portfolio' ? 'bg1-color' : '',
                  ]">
                    <RouterLink to="/portfolio" class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                        <i class="ph ph-code-block fs-six"></i> Portfolio
                      </div>
                      <span class="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">16</span>
                    </RouterLink>
                  </li>

                  <!-- Services -->
                  <li :class="[
                    'rounded-3',
                    route.name === 'price' ? 'bg1-color' : '',
                  ]">
                    <RouterLink to="/price" class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                      <i class="ph ph-briefcase fs-six"></i> Services
                    </RouterLink>
                  </li>

                  <!-- Contact -->
                  <li :class="[
                    'rounded-3',
                    route.name === 'contact' ? 'bg1-color' : '',
                  ]">
                    <RouterLink to="/contact" class="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                      <i class="ph ph-envelope fs-six"></i> Contact
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
            <RouterLink to="/contact"
              class="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
              <i class="ph ph-paper-plane-tilt"></i>Hire Me
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar end -->

</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>