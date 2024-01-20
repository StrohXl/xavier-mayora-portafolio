<script setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <section
    id="Projects"
    class="overflow-hidden py-20 2xl:py-40  bg-gray-900 text-white"
  >
    <h2 class="text-center text-3xl md:text-4xl">
      <span class="text-primaryDark dark:text-primary"> Proyectos </span>
      <span> Personales </span>
    </h2>
    <div
      class="md:!mt-20 grid grid-cols-1 gap-10 max-w-5xl 2xl:max-w-6xl mx-auto"
    >
      <SectionsProjectsParqueNacionalMochima />
      <SectionsProjectsCrudMochima />
      <SectionsProjectsVueAnime />
      <SectionsProjectsNestDev />
    </div>
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
