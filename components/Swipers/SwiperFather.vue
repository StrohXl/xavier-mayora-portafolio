<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
defineProps([
  "spaceBetween",
  "autoplay",
  "pagination",
  "navigation",
  "modules",
  "cubeEffect",
  "grabCursor",
  "effect",
  "longSwipesMs",
  "onSlideChange",
  "onSlideChangeEnd",
  "onSlideChangeStart",
  "breakpoints",
  "loop",
  "allowTouchMove"
]);
</script>
<template>
  <swiper
    :spaceBetween="spaceBetween"
    :effect="effect"
    :loop="loop"
    :allowTouchMove="allowTouchMove"
    :speed="longSwipesMs"
    :onSlideChange="onSlideChange"
    :onSlideChangeTransitionEnd="onSlideChangeEnd"
    :onSlideChangeTransitionStart="onSlideChangeStart"
    :grabCursor="grabCursor"
    :autoplay="autoplay"
    :pagination="pagination"
    :cubeEffect="cubeEffect"
    :navigation="navigation"
    :breakpoints="breakpoints"
    :modules="modules"
    class="w-full"
  >
    <slot />
  </swiper>
</template>

<style lang="postcss">
.swiper {
  overflow: hidden !important;
}
</style>
