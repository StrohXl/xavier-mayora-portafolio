<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
defineProps(["spaceBetween", "autoplay", "pagination", "navigation", "modules"]);
</script>
<template>
  <swiper
    :spaceBetween="spaceBetween"
    :autoplay="autoplay"
    :pagination="pagination"
    :navigation="navigation"
    :modules="modules"
    class="w-full"
  >
    <slot />
  </swiper>
</template>

<style lang="postcss">
.swiper{
  overflow: hidden !important;
}
</style>
