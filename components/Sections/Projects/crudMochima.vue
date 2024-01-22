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
          name="projects/dashboard"
        />
        Crud Mochima
      </h3>
      <SwipersSwiper>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/crud-mochima-1.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/crud-mochima-2.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/crud-mochima-3.png" />
        </swiper-slide>
        <swiper-slide class="rounded-md overflow-hidden"
          ><NuxtPicture src="/crud-mochima-4.png" />
        </swiper-slide>
      </SwipersSwiper>

      <div
        class="relative z-10 md:grid md:grid-cols-6 md:gap-2"
        id="content-images-projects"
      >
        <div
          class="flex md:ml-5 sm:grid sm:grid-cols-4 gap-2 relative z-10 md:grid-cols-2 md:col-start-3 md:col-span-4"
          style="grid-template-rows: 300px 150px"
          id="dashboard"
        >
          <div
            class="hidden sm:block h-72 sm:col-span-2 overflow-hidden rounded-md md:col-span-1 md:h-auto"
          >
            <NuxtPicture
              id="projectImage"
              class="w-full h-full"
              src="/crud-mochima-2.png"
            />
          </div>
          <div
            class="hidden h-40 sm:block sm:col-span-2 overflow-hidden rounded-md md:col-span-1 md:h-full"
          >
            <NuxtPicture src="/crud-mochima-3.png" />
          </div>
          <div
            class="hidden h-40 sm:col-span-2 sm:block overflow-hidden rounded-md md:col-span-1 md:h-auto"
          >
            <NuxtPicture src="/crud-mochima-1.png" />
          </div>
          <div
            class="hidden -translate-y-32 md:-translate-y-0 sm:col-span-2 h-72 sm:block overflow-hidden rounded-md md:col-span-1 md:h-auto"
          >
            <NuxtPicture id="projectImage" src="/crud-mochima-4.png" />
          </div>
        </div>
        <div class="md:col-start-1 md:row-start-1 md:col-span-2">
          <p
            class="md:text-lg 2xl:!text-xl text-justify mt-6 2xl:text-xl  md:mt-0 line-clamp-3 md:line-clamp-none"
          >
            Segundo proyecto elaborado en React.Js, consiste en un crud de
            servicos, paquetes y lista de reservaciones donde puedes crear,
            añadir, editar y eliminar datos, para poder ingresar el usuario es
            "admin" y la contraseña es "admin".
          </p>

          <div class="md:flex justify-end hidden mt-10">
            <NuxtLink class="relative z-10" to="/projects/crud-mochima">
              <ButtonsButton type="outlined" class="mt-2">
                Ver mas
              </ButtonsButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-4 gap-3 md:hidden">
      <NuxtLink class="relative z-10" to="/projects/crud-mochima">
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
#remove-fill svg > g > path:nth-child(1) {
  fill: none !important;
}
#projectImage {
  display: block !important;
}
#projectImage > img {
  width: 160%;
  max-width: 200% !important;
}
@media (min-width: 767px) {
  #projectImage > img {
    max-width: 100% !important;
  }
}
</style>
