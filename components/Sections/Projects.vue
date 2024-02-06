<script setup>
import { SwiperSlide } from "swiper/vue";
import dataProjects from "../../data/projects";
const position = ref(0);
const start = ref(false);
const end = ref(false);
let setTimeoutEnd;
let setTimeoutStart;
onMounted(() => {
  setTimeoutEnd = setTimeout(() => {
    start.value = true;
    end.value = false;
  }, 3900);
});
const changeEnd = (value) => {
  start.value = false;
  end.value = true;
  position.value = value.activeIndex;
};
const changeStart = () => {
  start.value = true;
  end.value = false;
};
</script>
<template>
  <section
    id="Projects"
    class="overflow-hidden py-10 2xl:py-16 max-w-5xl 2xl:max-w-6xl mx-auto md:px-7"
  >
    <h2 class="text-center text-3xl md:text-4xl">
      <span class="text-primaryDark dark:text-primary"> Proyectos </span>
      <span> Personales </span>
    </h2>

    <div class="md:mt-14">
      <SwipersSwiper
        :onSlideChangeStart="changeStart"
        :onSlideChangeEnd="changeEnd"
        id="carousel-projects"
      >
        <swiper-slide
          v-for="item in dataProjects"
          v-bind:key="item.title"
          class="h-auto mt-16 mb-24"
        >
          <div class="relative">
            <NuxtPicture
              class="w-full h-full image-carousel"
              :src="item.images[0]"
              :alt="`image ${item.title}`"
            />
            <div class="tecnologies transition-opacity  opacity-100 md:opacity-0 absolute flex gap-2 pl-7 sm:pl-4 md:pl-2 py-1 w-full bottom-0 bg-gray-900/90 dark:bg-gray-100/80 overflow-hidden">
              <nuxt-icon
                filled
                class="text-xl sm:text-4xl md:text-sm xl:text-xl"
                v-for="i in item.tecnologies.frontend"
                v-bind:key="i.title"
                :name="i.icon"
              />
              <nuxt-icon
                filled
                class="text-xl sm:text-4xl md:text-sm xl:text-xl"
                v-for="i in item.tecnologies.backend"
                v-bind:key="i.title"
                :name="i.icon"
              />
            </div>
            <div
              :class="`transition duration-700  absolute translate-y-8  z-10 w-full text-info`"
            >
              <h3 class="text-center font-bold text-2xl md:text-sm xl:text-lg">
                {{ item.title }}
              </h3>
              <div class="mt-1 flex gap-4 justify-center">
                <a target="_blank" :href="item.linkProject">
                  <ButtonsButton class="md:!text-xs !px-2" type="outlined"
                    >Ver proyecto</ButtonsButton
                  >
                </a>
                <NuxtLink :href="item.seeProject">
                  <ButtonsButton class="md:!text-xs !px-2" type="outlined"
                    >Saber mas</ButtonsButton
                  >
                </NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
      </SwipersSwiper>
      <swiper>
        <slot />
      </swiper>
    </div>
  </section>
</template>
<style lang="postcss">
#carousel-projects > .swiper-wrapper {
  transition-timing-function: ease-out !important;
}
#carousel-projects {
  overflow: visible !important;
}

#carousel-projects > .swiper-wrapper > .swiper-slide > div > .text-info {
  opacity: 0;
}
@media (width <768px) {
  #carousel-projects
    > .swiper-wrapper
    > .swiper-slide-active
    > div
    > .text-info {
    @apply translate-y-2;
    opacity: 1;
  }
  #carousel-projects > .swiper-wrapper > .swiper-slide-next > div > .text-info {
    @apply !translate-y-8;
    opacity: 0 !important;
  }
}

#carousel-projects > .swiper-wrapper > .swiper-slide-next > div > .text-info {
  @apply translate-y-2;
  opacity: 1;
}

@media screen and (width >= 768px) {
  #carousel-projects > .swiper-wrapper > .swiper-slide {
    @apply bg-gray-900;
    transition: 0.4s;

  }
  #carousel-projects > .swiper-wrapper > .swiper-slide > div > picture {
    transition: 0.4s;
    opacity: .5;
  }
  #carousel-projects > .swiper-wrapper > .swiper-slide-next > div > picture {
    opacity: 1;
  }
  #carousel-projects > .swiper-wrapper > .swiper-slide-next {
    transform: scale(1.5);
  
  }
  #carousel-projects > .swiper-wrapper > .swiper-slide > div > .tecnologies {
    @apply !duration-500
  }
  #carousel-projects > .swiper-wrapper > .swiper-slide-next > div > .tecnologies {
   @apply !duration-1000 opacity-100
  }
}
.h3Start {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;

  /* Para navegadores que no sean basados en WebKit */
  text-fill-color: transparent;
  text-stroke-width: 1px;
  text-stroke-color: #fff;
}
.h3End {
  -webkit-text-fill-color: #fff !important;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  text-fill-color: #fff !important;
  text-stroke-width: 1px;
  text-stroke-color: #fff;
}
.image-carousel > img {
  width: 100% !important;
  height: auto;
}
</style>
