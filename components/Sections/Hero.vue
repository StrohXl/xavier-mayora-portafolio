<template>
  <section class="py-16 md:py-28 2xl:py-36">
    <div class="grid md:grid-cols-2 max-w-5xl 2xl:max-w-6xl mx-auto">
      <div
        class="mt-6 flex flex-col justify-center px-7 text-center md:text-left md:w-108 2xl:w-116"
      >
        <h2
          class="!text-4xl md:!text-5xl 2xl:!text-6xl dark:text-white tracking-wide"
        >
          Xavier Mayora
        </h2>
        <h1
          class="!text-3xl font-bold md:!text-4xl 2xl:!text-5xl text-primary dark:text-pri maryDark tracking-wide"
        >
          Full Stack Developer
        </h1>
      </div>
      <div class="my-8 flex justify-center 2xl:justify-end row-span-2 md:mb-14">
        <NuxtPicture
          class="image overflow-hidden rounded-full w-52 h-52 md:w-64 md:h-64 2xl:w-80 2xl:h-80"
          src="/imagePortafolio.jpg"
        />
      </div>
      <div class="px-7 md:mt-3 md:w-108 text-sm 2xl:w-116">
        <p
          class="text-center md:text-base md:text-left max-w-xl mx-auto 2xl:text-lg"
        >
          La tecnología es una pieza crucial en nuestras vidas. Es importante
          que estemos al tanto de los últimos avances tecnológicos y cómo
          podemos usarlos para mejorar nuestras vidas.
        </p>
        <div class="flex justify-center md:justify-start">
          <ButtonsButton
            @click="moveScroll('Contact')"
            type="contained"
            class="mt-8"
            >Contáctame</ButtonsButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.image > img {
  width: 100%;
}
</style>
