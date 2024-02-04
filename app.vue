
<template>
  <div>
    <main id="main">
      <NuxtPage />
    </main>
  </div>
</template>
<style lang="postcss">
body {
  @apply dark:bg-gray-900 bg-gray-100/90 dark:text-white text-gray-800;
}
h2 {
  @apply !text-3xl sm:!text-4xl 2xl:!text-5xl font-bold;
}
p {
  @apply text-sm sm:text-base 2xl:text-lg;
}
</style>
