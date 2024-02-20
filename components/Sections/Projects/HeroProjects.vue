<script lang="ts" setup>
defineProps(["title", "title2", "parrafo", "linkPage", "nameIcon", "images", "linkRepo"]);
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
<template>
  <section class="py-16 md:py-28 xl:py-36 relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden " >
    <div class="absolute bg-gradient-to-b w-full  overflow-hidden  top-0">
      <NuxtPicture class="imageHeroProject opacity-20 !w-[100%] blur-sm  hidden md:block" :src="images[0]" />
      <NuxtPicture class="imageHeroProject opacity-20 !w-[100%] blur-sm  block md:hidden" :src="images[4]" />
    </div>
    <div class="grid grid-cols-1  md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto ">
      <div
        class="mt-6 flex flex-col justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"
      >
        <h1
          class="relative text-white !text-4xl md:!text-5xl font-bold 2xl:!text-6xl dark:text-white tracking-wide"
        >
          {{ title }}
        </h1>
      </div>
      <div
        class="my-12 justify-center 2xl:justify-end row-span-2 md:mb-14 px-10 sm:px-20 w-full max-w-xl m-auto md:max-w-max"
      >
        <SwipersSwiperCube>
          <swiper-slide
            v-for="(item, index) in images.slice(0,4)"
            v-bind:key="index"
            ><NuxtPicture class="imageHeroProject" :src="item" />
          </swiper-slide>
        </SwipersSwiperCube>
      </div>
      <div class="relative px-7 md:w-108 text-sm 2xl:w-116 mt-5">
        <p
          class="!text-white text-center md:text-base md:text-left max-w-xl mx-auto 2xl:text-lg"
        >
          {{ parrafo }}
        </p>
        <div class="flex md:flex-row flex-col justify-center  md:!justify-start mt-8 gap-5 max-w-sm  md:max-w-xl mx-auto ">
          <a :href="linkPage" target="_blank">
            <ButtonsButton type="contained" class=" text-center"
              >Ver Pagina</ButtonsButton
            >
          </a>
          <a :href="linkRepo" target="_blank">
            <ButtonsButton type="contained" class="text-center"
              >Ver Repositorio</ButtonsButton
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.imageHeroProject > img{
  width: 100% !important;
}
</style>
