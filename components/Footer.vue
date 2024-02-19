<script lang="ts" setup>
import ListItemNav from "~/data/listItemNav";
</script>
<template>
  <footer class="dark:bg-gray-800/50 bg-gray-900 text-white pt-16 pb-5 px-7">
    <h2 class="text-center text-4xl font-bold flex justify-center">
      Porta
      <span class="text-primary dark:text-primaryDark"> folio </span>
    </h2>
    <ul class="grid gap-3 mt-10 justify-center sm:flex md:gap-4 ">
      <li
        class="text-center text-lg items-center font-semibold hover:text-primaryDark hover:dark:text-primary"
        v-for="i in ListItemNav"
        v-bind:key="i.id"
      >
        <NuxtLink
          class="text-center gap-1 items-center"
          :to="`/?position=${i.id}`"
          @click="moveScroll(i.id)"
        >
          {{ i.title }}
        </NuxtLink>
      </li>
    </ul>
    <IconsNetworks class="!mt-8" p="15px" px="16px" text="!text-xl" />
    <p class="text-center mt-10">Creado por Xavier Mayora 2024</p>
  </footer>
</template>
