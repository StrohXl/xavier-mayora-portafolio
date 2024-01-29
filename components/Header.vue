<script lang="ts" setup>
const positionScroll = ref({ value: 0 });
onMounted(() => {
  positionScroll.value = getPositionScroll();
});
</script>
<template>
  <header
    :class="`fixed w-full bg-gray-100/90 dark:bg-gray-900/90 z-40 ${
      positionScroll.value > 50
        ? ' border-b-1 border-gray-200 dark:border-gray-800 shadow-sm'
        : ''
    }
    `"
  >
    <AppBar />
  </header>
</template>
