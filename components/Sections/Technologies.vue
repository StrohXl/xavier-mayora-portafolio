<script lang="ts" setup>
defineProps(["frontend", "backend"]);
</script>
<template>
  <section
    id="Technologies"
    class="px-7 pb-20 pt-16 2xl:pb-32 xl:pt-20  max-w-5xl 2xl:max-w-6xl mx-auto"
  >
    <h2 class="text-center">Tecnologías usadas</h2>
    <div
      class="grid grid-cols-3 justify-center items-center mt-10 md:grid-cols-4 gap-y-5 md:mt-20 sm:px-10 md:px-20"
    >
      <h3
        class="text-center col-span-3 md:col-span-4 font-bold text-2xl 2xl:text-3xl mb-5 md:mb-10"
      >
        Frontend
      </h3>
      <div
        v-for="(item, index) in frontend"
        v-bind:key="index"
        id="cardTecnologies"
        class="flex justify-center items-center flex-col"
      >
        <Icon
          filled
          class="!text-6xl transition-transform duration-700 md:!text-7xl grayscale"
          :name="item.icon"
        />
        <h4 class="text-center font-bold mt-2">{{ item.title }}</h4>
      </div>
      <h3
        class="text-center col-span-3 md:col-span-4 font-bold text-2xl 2xl:text-3xl mt-10 mb-5 md:mb-10"
        v-if="backend"
      >
        Backend
      </h3>
      <div
        v-for="(item, index) in backend"
        v-bind:key="index"
        class="flex justify-center items-center flex-col"
        id="cardTecnologies"

      >
        <Icon
          filled
          class="!text-6xl md:!text-7xl grayscale transition-transform duration-700"
          :name="item.icon"
        />
        <h4 class="text-center font-bold mt-2">{{ item.title }}</h4>
      </div>
    </div>
  </section>
</template>
<style>
#cardTecnologies:hover > span {
  transform: rotateY(-360deg);
  filter: grayscale(0);
}
</style>
