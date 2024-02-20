<template>
  <div>
    <section
      class="relative py-16 pb-20 mb-10 md:py-16 xl:py-28 2xl:py-44 2xl:pb-44 2xl:mb-16  bg-gradient-to-b  from-gray-900 dark:to-gray-900 to-gray-950 w-full  text-white"
    >
      <div
        class="relative z-10 grid md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto"
      >
        <div
          class="flex flex-col gap-1 md:gap-2 justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"
        >
          <h2 class="!text-4xl sm:!text-5xl dark:text-white tracking-wide">
            Xavier Mayora
          </h2>
          <h1
            class="!text-3xl sm:!text-4xl font-bold  text-primary maryDark tracking-wide"
          >
            Full Stack Developer
          </h1>
          <IconsNetworks class="md:!justify-start !mt-2" p="8px" px="10px" text="!text-xl"/>

        </div>
        <div
          id="image-hero-move"
          class="my-1 md:my-8 flex justify-center row-span-2 md:mb-14 md:h-96 2xl:h-80"
        >
          <NuxtPicture
            class="image-hero w-9/12 md:w-full md:-translate-y-[6vw] lg:-translate-y-[17%] 2xl:-translate-y-[45%]"
            src="/image-hero.png"
          />
        </div>
        <div class="px-7 md:mt-3 md:w-108 text-sm 2xl:w-116">
          <p
            class="text-center text-base md:text-left max-w-xl mx-auto 2xl:text-lg"
          >
            La tecnología es una pieza crucial en el dia a dia de cada persona. Debido a eso es importante
            que estemos al tanto de los últimos avances tecnológicos y cómo
            podemos usarlos para mejorar nuestras vidas.
          </p>
          <div class="flex justify-center md:justify-start">
            <ButtonsButton
              @click="moveScroll('Contact')"
              type="contained"
              class="mt-8 !py-1 !px-10 md:!py-2 md:!px-14"
              >Contáctame</ButtonsButton
            >
          </div>
        </div>
      </div>
      <CubesMove class="hidden lg:grid !top-1" />
      <CubesMove class="!top-auto bottom-0 hidden md:grid rotate-180 right-0" />
    </section>
  </div>
</template>
<style>
.image > img {
  width: 100%;
}
.image-hero > img {
  width: 100%;
  max-width: 100%;
}
@keyframes epale {
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}
#image-hero-move {
  animation: epale 4s ease-in-out infinite;
}
</style>
