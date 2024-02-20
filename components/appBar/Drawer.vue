<script lang="ts" setup>
import listItemNav from "~/data/listItemNav";
const components = useOpenComponents();
</script>
<template>
  <nav
    id="drawer"
    :style="`${
      components.openDrawer
        ? `transform: translateY(1px); opacity: 1;`
        : 'transform: translateY(-300px); opacity: 0;'
    }
    transition-property: transform opacity; transition-duration: .3s
    `"
    class="left-0 absolute z-10 w-full "
    :class="components.openDrawer? 'h-screen':'h-fit'"
  >
    <div
      class="bg-gray-900/90 p-7 pt-10 backdrop-blur-sm border-b-1 border-gray-800 w-full "
    >
      <ul class="grid gap-3 ">
        <li
          class="text-lg hover:text-primary dark:hover:text-primary font-semibold cursor-pointer"
          v-for="i in listItemNav"
          v-bind:key="i.id"
        >
          <NuxtLink
            class="flex gap-2 items-center"
            :to="`/?position=${i.id}`"
            @click="moveScroll(i.id); components.changeOpenDrawer(false)"
          >
            {{ i.title }}
          </NuxtLink>
        </li>
      </ul>
    
      <IconsNetworks/>
    </div>

    <div
      @click="components.changeOpenDrawer(false)"
      :class="`bg-transparent h-full md:hidden ${
        components.openDrawer ? 'flex' : 'hidden'
      }`"
    ></div>
  </nav>
</template>
