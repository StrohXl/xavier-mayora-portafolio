<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <div id="mochima" class="mt-14 relative">
    <div class="px-7">
      <h3 class="mb-5 text-2xl md:text-3xl font-bold flex gap-3 items-center">
        <Icon
          id="remove-fill"
          class="!text-3xl md:!text-4xl text-primary"
          name="projects/movie"
        />
        VueAnime
      </h3>
      <SwipersSwiper>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/vueanime-1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/vueanime-2.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/vueanime-3.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/vueanime-4.png" />
        </swiper-slide>
      </SwipersSwiper>
      <div class="grid md:grid-cols-6 gap-2 relative z-10">
        <div class="hidden sm:grid grid-cols-4 md:ml-5 gap-2 md:col-span-4">
          <div class="hidden sm:block sm:col-span-2 overflow-hidden rounded-md">
            <NuxtPicture src="/vueanime-2.png" />
          </div>
          <div class="hidden sm:block sm:col-span-2 overflow-hidden rounded-md">
            <NuxtPicture src="/vueanime-3.png" />
          </div>
          <div
            class="hidden sm:col-span-2 sm:block h-52 overflow-hidden rounded-md"
          >
            <NuxtPicture src="/vueanime-4.png" />
          </div>
          <div
            class="hidden sm:col-span-2 sm:block h-52 overflow-hidden rounded-md"
          >
            <NuxtPicture src="/vueanime-1.png" />
          </div>
        </div>
        <div class="md:col-span-2 md:row-start-1 md:col-start-1">
          <p
            class="text-justify 2xl:text-xl mt-6 md:mt-0 line-clamp-3 md:line-clamp-none md:text-lg"
          >
            Inspirada en Youtube VueAnime fue mi primer proyecto elaborado en el
            framework de NuxtJs de Vue, que se encarga de hacer solicitudes Get
            usando Axios a una api llama Jikan la cual te regresa los datos de
            los animes.
          </p>
          <div class="mt-10 justify-end gap-3 hidden md:flex">
            <NuxtLink class="relative z-10" to="/projects/vue-anime">
              <ButtonsButton type="outlined" class="mt-2">
                Ver mas
              </ButtonsButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 gap-3 md:hidden">
      <NuxtLink class="relative z-10" to="/projects/vue-anime">
        <ButtonsButton type="outlined" class="mt-2"> Ver mas </ButtonsButton>
      </NuxtLink>
    </div>
    <Icon
      class="absolute -bottom-10 text-gray-500/5 !text-16xl mt-2 md:!left-40 md:bottom-10"
      id="remove-fill"
      style="left: 50%; transform: translateX(-50%)"
      name="projects/movie"
    />
  </div>
</template>

<style>
#remove-fill svg > g > path:nth-child(1) {
  fill: none !important;
}
</style>
