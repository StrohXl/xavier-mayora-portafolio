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
      class="dark:bg-gray-900/90 p-7 backdrop-blur-sm border-b-1 border-gray-800 w-full bg-white/90"
    >
      <ul class="grid gap-3">
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
      <div class="flex justify-center mt-20 gap-5">
        <a class="grayscale" target="_blank" href="https://github.com/StrohXl">
          <Icon name="github" class="hover:tra !text-3xl hover:filter-none" />
        </a>
        <a
          class="grayscale"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=+5804126947694&text=Hola"
        >
          <Icon name="whatsapp" class="hover:tra !text-3xl" filled />
        </a>
        <a
          class="grayscale"
          target="_blank"
          href="https://www.linkedin.com/in/xavier-mayora-083874255/"
        >
          <Icon filled name="linkedin" class="hover:tra !text-3xl" />
        </a>
        <a
          class="grayscale"
          target="_blank"
          href="mailto:xaviermayora20@gmail.com?subject=Developer Full Stack&body=Hola"
        >
          <Icon filled name="gmail" class="hover:tra !text-3xl" />
        </a>
      </div>
    </div>

    <div
      @click="components.changeOpenDrawer(false)"
      :class="`bg-transparent h-full md:hidden ${
        components.openDrawer ? 'flex' : 'hidden'
      }`"
    ></div>
  </nav>
</template>
