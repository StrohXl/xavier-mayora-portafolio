<script lang="ts" setup>
import Skills from "../../data/skills";
</script>

<template>
  <section id="Skills" class="mt-20">
    <div>
      <h2 class="text-center text-3xl font-bold">Habilidades</h2>
      <div class="mt-10" v-for="i in Skills" v-bind:key="i.title">
        <h3 class="text-center text-2xl font-bold">{{ i.title }}</h3>
        <div class="mt-10 grid grid-cols-4 gap-4 justify-center px-7">
          <div
            class="flex flex-col items-center justify-center"
            v-for="item in i.skills"
            v-bind:key="item.title"
          >
            <Icon filled class="!text-6xl" id="remove-fill-skills" :name="item.icon" />
            <h4 class="text-center font-semibold mt-2">{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
