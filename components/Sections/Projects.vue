<script setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <section
    id="Projects"
    class=" overflow-hidden py-14 bg-gray-900 text-white"
  >
    <h2 class="text-center text-3xl font-bold">
      <span class="text-primaryDark dark:text-primary"> Proyectos </span>
      <span> Personales </span>
    </h2>
    <SectionsProjectsParqueNacionalMochima/>
    <SectionsProjectsCrudMochima/>
    <SectionsProjectsVueAnime/>
    <SectionsProjectsNestDev/>
    
  </section>
</template>
<style lang="postcss">
#icon-remove-fill-projects {
  fill: none !important;
}
#icon-remove-fill-projects > svg {
  fill: none !important;
}
#icon-remove-fill-projects > svg > g > path:nth-child(1) {
  @apply !fill-none;
}
#icon-remove-fill-projects > svg > g > path:nth-child(2) {
  @apply !fill-primary;
}
</style>
