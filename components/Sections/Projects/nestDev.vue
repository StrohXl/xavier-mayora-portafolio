<script lang="ts" setup>
import { SwiperSlide } from "swiper/vue";
</script>
<template>
  <div id="mochima" class="mt-14 relative">
    <div class="px-7">
      <h3 class="mb-5 text-2xl font-bold flex gap-3">
        <Icon class="!text-3xl text-primary" name="projects/dashboard" />
        Dashboard Nest
      </h3>
      <SwipersSwiper style="aspect-ratio: 1.8;" >
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
      <p class="text-justify mt-6 line-clamp-3">
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
      class="absolute -bottom-10 text-gray-500/5 !text-16xl mt-2"
      style="left: 50%; transform: translateX(-50%) rotateY(180deg)"
      name="projects/dashboard"
    />
  </div>
</template>
