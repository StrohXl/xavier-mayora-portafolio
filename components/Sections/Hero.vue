<template>
  <section class="mt-16 pb-16">
    <div>
      <h2 class="font-bold text-4xl text-center dark:text-white tracking-wide">
        Xavier Mayora
      </h2>
      <h1
        class="text-3xl text-primary font-bold dark:text-pri maryDark text-center tracking-wide"
      >
        Full Stack Developer
      </h1>
      <div class="my-8 flex justify-center">
        <NuxtPicture
          class="overflow-hidden rounded-full w-52 h-52"
          src="/imagePortafolio.jpg"
        />
      </div>
      <p class="px-7 text-center font-semibold">
        La tecnología es una pieza crucial en nuestras vidas. Es importante que
        estemos al tanto de los últimos avances tecnológicos y cómo podemos
        usarlos para mejorar nuestras vidas.
      </p>
      <div class="flex justify-center">
        <ButtonsButton @click="moveScroll('Contact')" type="outlined" class="mt-8">Contactame</ButtonsButton>
      </div>
    </div>
  </section>
</template>
