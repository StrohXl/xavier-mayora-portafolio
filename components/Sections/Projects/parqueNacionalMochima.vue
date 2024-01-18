<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <div id="mochima" class="mt-14 relative">
    <div class="px-7">
      <h3 class="mb-5 text-2xl font-bold flex gap-3">
        <Icon
          class="text-primaryDark dark:text-primary !text-3xl mt-2"
          name="projects/beach"
        />
        Parque Nacional
        <br />
        Mochima
      </h3>

      <SwipersSwiper>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture class="w-full" src="/mochima1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/mochima1.png" />
        </swiper-slide>
      </SwipersSwiper>
      <p class="text-left mt-6 relative z-10 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        praesentium natus sapiente nulla perspiciatis tempore voluptatibus.
        Corrupti velit debitis, minus est sit vel dignissimos deserunt eaque
        ratione similique? Doloremque, eveniet.
      </p>
    </div>

    <div class="flex justify-center mt-4 gap-3">
      <NuxtLink class="relative z-10" to="/projects/parque-nacional-mochima">
        <ButtonsButton type="outlined" class="mt-2"> Ver mas </ButtonsButton>
      </NuxtLink>
    </div>

    <Icon
      class="absolute -bottom-10 text-gray-800/60 z-0 !text-16xl mt-2"
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
