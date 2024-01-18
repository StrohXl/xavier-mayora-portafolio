<script lang="ts" setup>
import listItemNav from "~/data/listItemNav";
const components = useOpenComponents();
</script>
<template>
  <nav
    :style="
      components.openDrawer
        ? `transform: translateY(1px) `
        : 'transform: translateY(-300px) '
    "
    class="left-0 absolute transition duration-200 z-10 dark:bg-gray-900/90 backdrop-blur-sm border-b-1 border-gray-800 w-full bg-white/90"
  >
    <ul class="p-7 grid gap-3">
      <li
        @click="components.changeOpenDrawer(false)"
        class="hover:text-primary dark:hover:text-primary font-semibold cursor-pointer"
        v-for="i in listItemNav"
        v-bind:key="i.id"
      >
        <NuxtLink
          class="flex gap-2 items-center"
          :to="`/?position=${i.id}`"
          @click="moveScroll(i.id)"
        >
          {{ i.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
