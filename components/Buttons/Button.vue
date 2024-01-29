<script lang="ts" setup>
defineProps({
  type: { default: "button-outlined", type: String },
});
</script>
<template>
  <div
    :id="
      type == 'outlined'
        ? 'button-outlined'
        : type == 'contained'
        ? 'button-contained'
        : 'button-text'
    "
  >
    <slot />
  </div>
</template>
<style lang="postcss">
#button-outlined {
  @apply text-lg 2xl:text-xl;
  @apply border-1 px-7 py-0.5 rounded-sm text-primary border-primary/50 cursor-pointer font-medium;
  @apply dark:text-primaryDark dark:border-primaryDark/50;
  @apply hover:border-primary   dark:hover:border-primaryDark;
}
#button-contained {
  @apply text-lg 2xl:text-xl;
  @apply px-7 py-0.5 bg-gradient-to-b from-primary to-green-600 text-white transition-colors duration-500 rounded-sm shadow-sm cursor-pointer font-medium;
  @apply hover:to-primary  ;
}

#button-text {
  @apply text-lg 2xl:text-xl;
  @apply px-7 py-0.5 text-primary cursor-pointer;
}
</style>
