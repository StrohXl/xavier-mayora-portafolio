<script lang="ts" setup>
defineProps(["title", "title2", "parrafo", "linkPage", "nameIcon", "images"]);
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
<template>
  <section class="py-16 md:py-28 2xl:py-36">
    <div class="grid grid-cols-1  md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto overflow-hidden">
      <div
        class="mt-6 flex flex-col justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"
      >
        <h1
          class="!text-4xl md:!text-5xl font-bold 2xl:!text-6xl dark:text-white tracking-wide"
        >
          {{ title }}
        </h1>
      </div>
      <div
        class="my-12 justify-center 2xl:justify-end row-span-2 md:mb-14 px-10 sm:px-20 w-full max-w-xl m-auto md:max-w-max"
      >
        <SwipersSwiperCube>
          <swiper-slide
            v-for="(item, index) in images"
            v-bind:key="index"
            ><NuxtPicture :src="item" />
          </swiper-slide>
        </SwipersSwiperCube>
      </div>
      <div class="px-7 md:w-108 text-sm 2xl:w-116 mt-5">
        <p
          class="text-center md:text-base md:text-left max-w-xl mx-auto 2xl:text-lg"
        >
          {{ parrafo }}
        </p>
        <div class="flex justify-center md:justify-start">
          <a :href="linkPage" target="_blank">
            <ButtonsButton type="contained" class="mt-8"
              >Ver Pagina</ButtonsButton
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
