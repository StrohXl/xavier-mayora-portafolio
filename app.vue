
<template>
  <head>
    <link rel="icon" href="/favicon.svg" />
  </head>
  <div>
    <main id="main">
      <NuxtPage />
    </main>
  </div>
</template>
<style lang="postcss">
body {
  @apply dark:bg-gray-900 dark:text-white text-gray-800;
}
h2 {
  @apply !text-3xl md:!text-4xl 2xl:!text-5xl font-extrabold;
}
p {
  @apply text-sm sm:text-base 2xl:text-lg;
}
</style>
