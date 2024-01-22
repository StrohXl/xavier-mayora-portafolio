<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <div id="mochima" class="mt-14 relative">
    <div class="px-7">
      <h3 class="mb-5 text-2xl md:text-3xl font-bold flex gap-3">
        <Icon
          class="text-primaryDark dark:text-primary !text-3xl mt-2 md:!text-4xl"
          name="projects/beach"
        />
        Parque Nacional
        <br />
        Mochima
      </h3>

      <SwipersSwiper>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima-1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima-2.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima-3.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima-4.png" />
        </swiper-slide>
      </SwipersSwiper>

      <div class="grid md:grid-cols-6 gap-2 relative z-10">
        <div
          class="hidden sm:grid md:grid-cols-4 gap-2 md:col-start-3 md:col-span-4 md:ml-5"
        >
          <div
            class="hidden sm:col-span-4 sm:block h-52 overflow-hidden rounded-md md:h-auto md:col-span-2"
          >
            <NuxtPicture src="/mochima-1.png" />
          </div>
          <div
            class="hidden sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-2"
          >
            <NuxtPicture src="/mochima-2.png" />
          </div>
          <div
            class="hidden sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-2"
          >
            <NuxtPicture src="/mochima-3.png" />
          </div>
          <div
            class=" sm:col-span-4 sm:block h-52 overflow-hidden rounded-md md:h-auto md:col-span-2 !hidden md:!flex"
          >
            <NuxtPicture src="/mochima-4.png"  />
          </div>
        </div>
        <div class="md:col-start-1 md:row-start-1 md:col-span-2">
          <p
            class="text-justify mt-6 line-clamp-3 sm:col-span-4 md:text-lg 2xl:text-xl md:line-clamp-none"
          >
            Primer proyecto elaborado en React.Js, que tiene como objetivo
            promocionar los Servicios y las Playas que ofrece el parque nacional
            Mochima ademas de ofrecer informacion historica como su
            geolocalización.
          </p>
          <div class="md:flex justify-center gap-3 hidden md:justify-end mt-10">
            <NuxtLink
              class="relative z-10"
              to="/projects/parque-nacional-mochima"
            >
              <ButtonsButton type="outlined" class="mt-2">
                Ver mas
              </ButtonsButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4 gap-3 md:hidden">
      <NuxtLink class="relative z-10" to="/projects/parque-nacional-mochima">
        <ButtonsButton type="outlined" class="mt-2"> Ver mas </ButtonsButton>
      </NuxtLink>
    </div>

    <Icon
      class="absolute -bottom-10 text-gray-800/60 z-0 !text-16xl mt-2 md:!left-40 md:bottom-10"
      style="left: 50%; transform: translateX(-50%) rotateY(180deg)"
      name="projects/beach"
    />
  </div>
</template>

<style>
Picture > img {
  width: 100%;
}
</style>
