<script lang="ts" setup>
const positionScroll = ref({ value: 0 });
const components = useOpenComponents();

onMounted(() => {
  positionScroll.value = getPositionScroll();
});
</script>
<template>
  <header
    :class="`fixed w-full backdrop-blur-sm bg-gray-900/90 z-40 text-white   ${
      positionScroll.value > 50
        ? `border-b-1 border-gray-800 ${!components.openDrawer && 'shadow-xl shadow-black/30'}`
        : ''
    }
    `"
  >
    <AppBar />
  </header>
</template>
