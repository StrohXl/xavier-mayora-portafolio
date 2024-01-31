<script lang="ts" setup>
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const modules = [Autoplay, Pagination, Navigation];
defineProps(["onSlideChange", "onSlideChangeEnd", "onSlideChangeStart"]);
</script>
<template>
  <SwipersSwiperFather
    :autoplay="{delay:2500}"
    :on-slide-change-end="onSlideChangeEnd"
    :on-slide-change-start="onSlideChangeStart"
    :pagination="false"
    :modules="modules"
    :speed="500"
    :loop="true"
    :breakpoints="{
      0: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 70
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 100
      },
    }"
    id="swiperProjects"
  >
    <slot />
  </SwipersSwiperFather>
</template>
<style lang="postcss">
.swiper-pagination-bullet-active {
  @apply bg-green-600;
}
</style>
