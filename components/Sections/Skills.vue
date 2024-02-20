<script lang="ts" setup>
const frontend: Ref<number> = ref(6);
const backend: Ref<number> = ref(6);
const frontendMd: Ref<number> = ref(8);
const backendMd: Ref<number> = ref(8);
import Skills from "../../data/skills";
</script>

<template>
  <section
    id="Skills"
    class="relative pt-24 pb-10 max-w-5xl 2xl:max-w-6xl mx-auto 2xl:pt-32 2xl:pb-16"
  >
    <div class="px-7">
      <h2 class="text-center text-4xl mb-16 md:mb-20">Tecnologías</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-[auto,auto] px-0 gap-y-12 gap-x-6"
      >
        <div
          class="w-full backdrop-blur-sm bg-gradient-to-br mx-auto dark:from-gray-800 !max-w-md dark:*:first-letter:to-gray-900 border-gray-300 dark:border-white/40 border-2 rounded-2xl py-7"
          v-for="i in Skills"
          v-bind:key="i.title"
        >
          <h3 class="text-center text-3xl sm:text-4xl font-bold">
            {{ i.title }}
          </h3>
          <div
            class="mt-10 grid gap-x-4 sm:gap-x-9 grid-cols-[auto,auto,auto] justify-center lg:gap-x-9"
          >
            <div
              class="mb-5 flex flex-col items-center justify-center"
              v-for="item in i.skills"
              v-bind:key="item.title"
              id="cardTecnologies"
            >
              <Icon
                filled
                class="!text-6xl transition-transform duration-700"
                :name="item.icon"
              />
              <h4 class="text-center font-bold mt-2">{{ item.title }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Icon
      style="left: 50% ; top:50%; "
      class="absolute translate-x-[-52%] md:!text-28xl translate-y-[-30%]  ml my-auto !text-20xl opacity-30  -z-10"
      name="favicon"
      filled
    />
  </section>
</template>
