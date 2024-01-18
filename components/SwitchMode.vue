<script lang="ts" setup>
const colorMode = useColorMode();
</script>
<template>
  <div
    class="cursor-pointer flex items-center gap-2 border-gray-800 dark:border-white border relative px-2 py-0.5 rounded-2xl overflow-hidden"
  >
    <Icon name="moon" @click="colorMode.preference = 'dark'" />
    <div
      :class="`rounded-2xl transition duration-500 h-5/6 w-6 dark:bg-white absolute bg-gray-800  ${
        colorMode.preference == 'dark' ? '-translate-x-1' : 'translate-x-6'
      }`"
    ></div>

    <nuxt-icon @click="colorMode.preference = 'light'" name="sun"></nuxt-icon>
  </div>
</template>
