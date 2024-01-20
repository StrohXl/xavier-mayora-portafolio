<script lang="ts" setup>
import listItemNav from "~/data/listItemNav";
const components = useOpenComponents();
</script>
<template>
  <nav
    id="drawer"
    :style="
      components.openDrawer
        ? `transform: translateY(1px) `
        : 'transform: translateY(-200vw) '
    "
    class="left-0 absolute transition duration-200 z-10 w-full h-screen"
  >
    <ul
      class="p-7 grid gap-3 dark:bg-gray-900/90 backdrop-blur-sm border-b-1 border-gray-800 w-full bg-white/90"
    >
      <li
        @click="components.changeOpenDrawer(false)"
        class="text-lg hover:text-primary dark:hover:text-primary font-semibold cursor-pointer"
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
    <div
      @click="components.changeOpenDrawer(false)"
      :class="`bg-transparent h-full ${
        components.openDrawer ? 'flex' : 'hidden'
      }`"
    ></div>
  </nav>
</template>
