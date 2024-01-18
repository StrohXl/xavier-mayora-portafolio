<script setup>
defineProps(["name"]);
</script>
<template>
  <nuxt-icon
    :name="name"
    class="dark:text-gray-400 dark:hover:text-white text-gray-700 hover:text-black cursor-pointer text-3xl"
  ></nuxt-icon>
</template>
