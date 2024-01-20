<script lang="ts" setup>
const frontend: Ref<number> = ref(6);
const backend: Ref<number> = ref(6);
import Skills from "../../data/skills";
</script>

<template>
  <section id="Skills" class="py-24">
    <div>
      <h2 class="text-center text-3xl font-bold">Habilidades</h2>
      <div class="mt-14 px-7" v-for="i in Skills" v-bind:key="i.title">
        <h3 class=" text-center text-2xl font-bold">{{ i.title }}</h3>
        <div class="mt-10 grid gap-3 grid-cols-3 justify-center px-7">
          <div
            class="mb-5 flex flex-col items-center justify-center"
            v-for="item in i.skills.slice(0, i.title == 'Frontend'? frontend: backend)"
            v-bind:key="item.title"
          >
            <Icon
              filled
              class="!text-6xl"
              id="remove-fill-skills"
              :name="item.icon"
            />
            <h4 class="text-center font-semibold mt-2">{{ item.title }}</h4>
          </div>
          <div class="col-span-3 flex justify-center">
            <ButtonsButton
              @click="frontend == 6 ? (frontend = 100) : (frontend = 6)"
              v-if="i.title == 'Frontend'"
            >
              {{ frontend == 6? 'Ver mas +': 'Ver menos -' }}</ButtonsButton
            >
            <ButtonsButton
              @click="backend == 6 ? (backend = 100) : (backend = 6)"
              v-if="i.title == 'Backend'"
            >
              {{ backend == 6? 'Ver mas +': 'Ver menos -' }}</ButtonsButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
