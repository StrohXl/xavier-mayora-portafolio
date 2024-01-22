<script lang="ts" setup>
defineProps(["skills"]);
</script>
<template>
  <section id="Technologies" class="px-7 pb-20 pt-10 2xl:pb-32 2xl:pt-0 max-w-5xl 2xl:max-w-6xl mx-auto">
    <h2 class="text-center">Tecnologías</h2>
    <div
      class="grid grid-cols-3 justify-center items-center mt-10 md:grid-cols-4 gap-y-5 md:mt-20 sm:px-10 md:px-20"
    >
      <div
        v-for="(item, index) in skills"
        v-bind:key="index"
        class="flex justify-center items-center flex-col"
      >
        <Icon filled class="!text-6xl md:!text-7xl" :name="item.icon" />
        <h4 class="text-center font-bold mt-2">{{ item.title }}</h4>
      </div>
    </div>
  </section>
</template>
