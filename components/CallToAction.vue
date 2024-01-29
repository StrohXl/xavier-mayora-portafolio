<script setup lang="ts">
onMounted(() => {
  const button = document.getElementsByClassName("call-to-action-button")[0];
  setInterval(() => {
    button.style.animation = "none";
  }, 1000);
  setInterval(() => {
    button.style.animation = " shake 1.5s infinite ";
  }, 2000);
});
</script>
<template>
  <section class="mt-32 2xl:mt-48 mb-10 2xl:mb-20 overflow-hidden">
    <div class="mx-auto max-w-5xl 2xl:max-w-6xl">
      <div
        id="call-to-action"
        class="md:mx-7 px-7 py-12 xl:py-16 flex flex-col gap-6 2xl:gap-10 justify-between relative md:rounded-md"
      >
        <h2
          class="relative text-white z-10 !text-3xl md:!text-4xl 2xl:!text-5xl"
        >
          ¡Contáctame
          <br class="sm:hidden" />
          hoy mismo!
        </h2>
        <ButtonsButton
          @click="moveScroll('Contact')"
          type="contained"
          class="w-fit relativez-10 call-to-action-button md:!text-xl 2xl:!text-2xl"
          >Contáctame</ButtonsButton
        >
        <img
          class="absolute h-40 -right-5 sm:right-2 -z-0 sm:h-48 md:h-52 xl:h-64 2xl:h-72"
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
.call-to-action-button:hover {
  animation: none !important ;
}

@keyframes shake {
  0% {
    transform: translate(0, 0) rotate(0);
  }

  5%,
  15%,
  25%,
  35%,
  45%,
  55%,
  65%,
  75%,
  85%,
  95% {
    transform: translate(-2px, 0) rotate(-2deg);
  }

  10%,
  20%,
  30%,
  40%,
  50%,
  60%,
  70%,
  80%,
  90% {
    transform: translate(2px, 0) rotate(2deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
