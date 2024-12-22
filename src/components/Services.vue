<template>
  <div class="accordion">
    <div 
      v-for="(item, index) in accordionItems" 
      :key="index" 
      class="accordion-single"
      :class="{ active: activeAccordion === index }"
    >
      <div class="header-area" @click="toggleAccordion(index)">
        <h4>{{ item.title }}</h4>
      </div>
      <div 
        class="content-area" 
        v-show="activeAccordion === index"
        :style="contentStyle(index)"
      >
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const accordionItems = ref([
  { title: "Accordion 1", content: "Content for Accordion 1" },
  { title: "Accordion 2", content: "Content for Accordion 2" },
  { title: "Accordion 3", content: "Content for Accordion 3" },
]);

// State to track the active accordion
const activeAccordion = ref(null);

// Function to toggle the accordion
const toggleAccordion = (index) => {
  if (activeAccordion.value === index) {
    activeAccordion.value = null; // Close if already open
  } else {
    activeAccordion.value = index; // Open the selected accordion
  }
};

// Dynamic style for smooth height transitions
const contentStyle = (index) => ({
  maxHeight: activeAccordion.value === index ? "200px" : "0",
  overflow: "hidden",
  transition: "max-height 0.3s ease",
});
</script>

<style lang="scss" scoped></style>