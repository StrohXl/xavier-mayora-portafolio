<script lang="ts" setup>
import listItemNav from "~/data/listItemNav";
defineProps([""]);
</script>
<template>
  <MenusMenu title="Proyectos" endIcon="arrow-down">
    <ul class="w-64 py-3">
      <li
        class="px-4 py-3 cursor-pointer items-center dark:hover:bg-gray-900 hover:bg-gray-200"
        v-for="i in listItemNav[1].subMenu"
        v-bind:key="i.name"
      >
        <NuxtLink class="flex gap-2" :to="i.link">
          <NuxtIcon class="text-xl" :name="i.icon" />
          {{ i.name }}
        </NuxtLink>
      </li>
    </ul>
  </MenusMenu>
</template>
