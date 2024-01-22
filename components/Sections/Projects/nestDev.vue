<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <div id="mochima" class="mt-14 relative">
    <div class="px-7">
      <h3 class="mb-5 font-bold text-2xl md:text-3xl flex gap-3">
        <Icon
          class="!text-3xl md:!text-4xl text-primary"
          name="projects/dashboard"
        />
        Dashboard Nest
      </h3>
      <SwipersSwiper style="aspect-ratio: 1.8">
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/nest-dev-1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/nest-dev-2.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/nest-dev-3.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/nest-dev-4.png" />
        </swiper-slide>
      </SwipersSwiper>
      <div
        class="relative z-10 md:grid md:grid-cols-6 md:gap-3"
        id="content-images-projects"
      >
        <div
          class="hidden sm:grid grid-cols-4 gap-2 md:grid-cols-2 md:col-start-3 md:col-span-4"
          style="grid-template-rows: 300px 150px"
          id="dashboard"
        >
          <div
            class="sm:block h-72 md:h-auto md:col-start-3 sm:col-span-2 overflow-hidden rounded-md"
          >
            <NuxtPicture
              id="projectImage"
              class="w-full h-full"
              src="/nest-dev-2.png"
            />
          </div>
          <div
            class="h-40 sm:block md:col-start-5 md:h-auto sm:col-span-2 overflow-hidden rounded-md"
          >
            <NuxtPicture src="/nest-dev-3.png" />
          </div>
          <div
            class="-translate-y-5 md:-translate-y-0 h-40 md:h-full sm:col-span-2 sm:block overflow-hidden rounded-md md:col-start-3"
          >
            <NuxtPicture src="/nest-dev-1.png" />
          </div>
          <div
            class="-translate-y-32 md:-translate-y-0 md:col-start-5 sm:col-span-2 h-72 sm:block overflow-hidden rounded-md"
          >
            <NuxtPicture id="projectImage" src="/nest-dev-4.png" />
          </div>
        </div>
        <div class="md:col-start-1 md:row-start-1 md:col-span-2">
          <p
            class="md:text-lg 2xl:!text-xl  text-justify mt-6 md:mt-0 line-clamp-3 md:line-clamp-none"
          >
            Proyecto elaborado en NextJs de react, donde puedes crearte una
            cuenta Y crear ingredientes que podras agregar al carrito o
            comprarlos directamente usando el saldo que tienes por defecto. Para
            validar el usuario subir imagenes cree mi propio backend usando Nest
            de Node.
          </p>

          <div class="md:flex justify-end hidden mt-10">
            <NuxtLink class="relative z-10" to="/projects/dashboard-nest">
              <ButtonsButton type="outlined" class="mt-2">
                Ver mas
              </ButtonsButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 gap-3 md:hidden">
      <NuxtLink class="relative z-10" to="/projects/dashboard-nest">
        <ButtonsButton type="outlined" class="mt-2"> Ver mas </ButtonsButton>
      </NuxtLink>
    </div>
    <Icon
      class="absolute -bottom-10 text-gray-500/5 !text-16xl mt-2 md:!left-40 md:bottom-10"
      style="left: 50%; transform: translateX(-50%) rotateY(180deg)"
      name="projects/dashboard"
    />
  </div>
</template>
<style>
@media (min-width: 767px) {
  #dashboard {
    grid-template-rows: auto auto !important;
  }
}
#content-images-projects > div > div > picture img {
  border-radius: 0.375rem;
  overflow: hidden;
}
</style>
