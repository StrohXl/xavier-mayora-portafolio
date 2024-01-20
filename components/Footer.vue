<script lang="ts" setup>
import ListItemNav from "~/data/listItemNav";
</script>
<template>
  <footer class="dark:bg-gray-800 bg-gray-900 text-white pt-16 pb-5 px-7">
    <h2 class="text-center text-2xl font-extrabold flex justify-center">
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
    <div class="flex justify-center mt-10 gap-3">
      <a
        class="grayscale "
        target="_blank"
        href="https://github.com/StrohXl"
      >
        <Icon name="github" class="hover:tra !text-xl hover:filter-none" />
      </a>
      <a
        class="grayscale "
        target="_blank"
        href="https://api.whatsapp.com/send?phone=+5804126947694&text=Hola"
      >
        <Icon name="whatsapp" class="hover:tra !text-xl" filled />
      </a>
      <a
        class="grayscale "
        target="_blank"
        href="https://www.linkedin.com/in/xavier-mayora-083874255/"
      >
        <Icon filled name="linkedin" class="hover:tra !text-xl" />
      </a>
      <a
        class="grayscale "
        target="_blank"
        href="mailto:xaviermayora20@gmail.com?subject=Developer Full Stack&body=Hola"
      >
        <Icon filled name="gmail" class="hover:tra !text-xl" />
      </a>
    </div>
    <p class="text-center mt-10">Creado por Xavier Mayora 2024</p>
  </footer>
</template>
