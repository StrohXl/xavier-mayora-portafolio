<script lang="ts" setup>
const frontend: Ref<number> = ref(6);
const backend: Ref<number> = ref(6);
const frontendMd: Ref<number> = ref(8);
const backendMd: Ref<number> = ref(8);
import Skills from "../../data/skills";
</script>

<template>
  <section id="Skills" class="pt-24 pb-10 max-w-5xl 2xl:max-w-6xl mx-auto 2xl:pt-32 2xl:pb-16">
    <div>
      <h2 class="text-center text-3xl md:text-4xl ">Habilidades</h2>
      <div class="mt-16 px-7 md:mt-20" v-for="i in Skills" v-bind:key="i.title">
        <h3 class="text-center text-xl md:text-2xl font-bold">{{ i.title }}</h3>
        <div class="mt-10 grid gap-3 grid-cols-3 justify-center md:hidden sm:px-10">
          <div
            class="mb-5 flex flex-col items-center justify-center"
            v-for="item in i.skills.slice(
              0,
              i.title == 'Frontend' ? frontend : backend
            )"
            v-bind:key="item.title"
          >
            <Icon
              filled
              class="!text-6xl"
              id="remove-fill-skills"
              :name="item.icon"
            />
            <h4 class="text-center font-bold mt-2">{{ item.title }}</h4>
          </div>
          <div class="col-span-3 flex justify-center">
            <ButtonsButton
              @click="frontend == 6 ? (frontend = 100) : (frontend = 6)"
              v-if="i.title == 'Frontend'"
            >
              {{ frontend == 6 ? "Ver mas +" : "Ver menos -" }}</ButtonsButton
            >
            <ButtonsButton
              @click="backend == 6 ? (backend = 100) : (backend = 6)"
              v-if="i.title == 'Backend'"
            >
              {{ backend == 6 ? "Ver mas +" : "Ver menos -" }}</ButtonsButton
            >
          </div>
        </div>
        <div class="mt-16 gap-3 grid-cols-4 justify-center hidden md:grid md:px-20 lg:px-32">
          <div
            class="mb-5 flex flex-col items-center justify-center"
            v-for="item in i.skills.slice(
              0,
              i.title == 'Frontend' ? frontendMd : backendMd
            )"
            v-bind:key="item.title"
          >
            <nuxt-icon filled class="!text-7xl" :name="item.icon" />
            <h4 class="text-center font-semibold mt-2 md:text-lg">{{ item.title }}</h4>
          </div>
          <div class="col-span-4 flex justify-center">
            <ButtonsButton
              @click="frontendMd == 8 ? (frontendMd = 100) : (frontendMd = 8)"
              v-if="i.title == 'Frontend'"
            >
              {{ frontendMd == 8 ? "Ver mas +" : "Ver menos -" }}</ButtonsButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
