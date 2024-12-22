<template>
    <!-- banner section start  -->
    <section class="pt-120 pb-60 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
        <div class="container">
            <div class="d-flex flex-wrap gap-10 gap-md-15 align-items-center justify-content-between">
                <div class="banner-content">
                    <span class="n5-color fs-five">HI, I'M A FREELANCER</span>
                    <!-- Use the reactive typingText -->
                    <h2 class="typing-text display-one p1-color mt-2 mb-3">{{ typingText }}</h2>
                    <p class="fs-seven n5-color">
                        I'm a software engineer specializing in Full Stack Web Apps.
                        Explore my
                        <RouterLink to="/portfolio" class="p1-color">
                            project portfolio</RouterLink>
                    </p>
                    <div class="d-flex flex-wrap align-items-center gap-3 gap-md-6 mt-4 mt-md-8">
                        <RouterLink to="/portfolio"
                            class="primary-btn px-3 px-md-6 py-2 py-md-4 fw-medium rounded-pill d-flex align-items-center gap-2">
                            <i class="ph ph-arrow-right"></i>View Portfolio
                    </RouterLink>
                    </div>
                </div>

                <div class="position-relative profile-img">
                    <div class="user-bg"></div>
                    <div class="bg-white">
                        <img src="@/assets/images/user.jpg" alt="user" class="user-img" />
                    </div>
                </div>
            </div>
            <!-- counter -->
            <div
                class="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                <div class="d-flex align-items-center gap-2 gap-xl-4">
                    <h2 class="display-two fw-semibold p1-color">
                        <span class="counter">5</span>
                    </h2>
                    <div class="line"></div>
                    <span class="n5-color">Years of Experience</span>
                </div>
                <div class="d-flex align-items-center gap-2 gap-xl-4">
                    <h2 class="display-two fw-semibold p1-color">
                        <span class="counter">110</span>
                    </h2>
                    <div class="line"></div>
                    <span class="n5-color">Projects Completed</span>
                </div>
                <div class="d-flex align-items-center gap-2 gap-xl-4">
                    <h2 class="display-two fw-semibold p1-color d-flex gap-1">
                        <span class="counter">6</span>k
                    </h2>
                    <div class="line"></div>
                    <span class="n5-color">Clients Worldwide</span>
                </div>
            </div>
        </div>
    </section>
    <!-- banner section end -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const typeArray = ["Developer", "Designer"];
const typingText = ref("");
let index = 0;
let isAdding = true;
let typeIndex = 0;

function playAnim() {
    setTimeout(() => {
        typingText.value = typeArray[typeIndex].slice(0, index);

        if (isAdding) {
            if (index >= typeArray[typeIndex].length) {
                isAdding = false;
                setTimeout(playAnim, 2000);
                return;
            } else {
                index++;
            }
        } else {
            if (index === 0) {
                isAdding = true;
                typeIndex = (typeIndex + 1) % typeArray.length; // Loop back to the first text
            } else {
                index--;
            }
        }

        playAnim();
    }, isAdding ? 200 : 100); // Typing is slower, removing is faster
}

onMounted(() => {
    playAnim(); // Start the typing animation
});
</script>

