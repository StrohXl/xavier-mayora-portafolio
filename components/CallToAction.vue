<template>
  <section id="call-to-action" class="md:mx-7 md:rounded-md overflow-hidden">
    <div class="px-7 py-12 flex flex-col gap-6 justify-between relative">
      <h2 class="relative text-white z-10 font-bold text-2xl">
        ¡Contáctame
        <br class="sm:hidden" />
        hoy mismo!
      </h2>
      <ButtonsButton @click="moveScroll('Contact')" type="contained" class="w-fit relative z-10 !hover:bg-gray-800"
        >Contáctame</ButtonsButton
      >
      <img
        class="absolute h-40 -right-5 sm:right-2 -z-0 sm:h-48"
        style="transform: translateY(-50%); top: 50%"
        src="/contact-us.png"
        alt="Contact-us"
      />
    </div>
  </section>
</template>
<style lang="postcss">
#call-to-action {
  background: linear-gradient(165deg, #1f2937 45%, #00c16a);
}

</style>
