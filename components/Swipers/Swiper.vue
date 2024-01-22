<script lang="ts" setup>
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const modules = [Autoplay, Pagination, Navigation];
</script>
<template>
  <SwipersSwiperFather
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    :space-between="20"
    :pagination="true"
    :modules="modules"
    id="swiperProjects"
    class="rounded-md overflow-hidden sm:!hidden"
    style="width: 100%;height: auto; aspect-ratio: 1.77;"
  >
    <slot />
  </SwipersSwiperFather>
</template>
<style lang="postcss">
.swiper-pagination-bullet-active {
  @apply bg-green-600;
}
</style>
