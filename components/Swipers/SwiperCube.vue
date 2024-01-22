<script setup>
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
const modules = [EffectCube];
</script>
<template>
  <SwipersSwiperFather
    :effect="'cube'"
    :grabCursor="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :modules="modules"
    id="swiperCube"
  >
    <slot />
  </SwipersSwiperFather>
</template>
<style lang="postcss">
#swiperCube{
  @apply !overflow-visible
}
</style>
