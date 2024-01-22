<template>
  <section class="mt-32 2xl:mt-48 mb-10 2xl:mb-20 overflow-hidden ">
    <div class="mx-auto max-w-5xl 2xl:max-w-6xl ">
      <div
        id="call-to-action"
        class="md:mx-7 px-7 py-12 flex flex-col gap-6 2xl:gap-10 justify-between relative md:rounded-md"
      >
        <h2 class="relative text-white z-10 !text-3xl md:!text-4xl 2xl:!text-5xl">
          ¡Contáctame
          <br class="sm:hidden" />
          hoy mismo!
        </h2>
        <ButtonsButton
          @click="moveScroll('Contact')"
          type="contained"
          class="w-fit relative z-10 !hover:bg-gray-800"
          >Contáctame</ButtonsButton
        >
        <img
          class="absolute h-40 -right-5 sm:right-2 -z-0 sm:h-48 md:h-52 2xl:h-64"
          style="transform: translateY(-50%); top: 50%"
          src="/contact-us.png"
          alt="Contact-us"
        />
      </div>
    </div>
  </section>
</template>
<style lang="postcss">
#call-to-action {
  background: linear-gradient(165deg, #1f2937 45%, #00c16a);
}
</style>
