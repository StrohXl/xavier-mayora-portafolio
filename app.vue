
<template>
  <div>
    <main id="main">
      <NuxtPage />
    </main>
  </div>
</template>
<style >
body {
  @apply dark:bg-gray-900 bg-gray-100/90 dark:text-white text-gray-800;
}
html{
  scrollbar-color: #00c16a rgb(243 244 246 / 0.9);
  scrollbar-width: thin;
}
h2 {
  @apply text-4xl 2xl:!text-5xl font-bold;
}
p {
  @apply text-base 2xl:text-lg;
}
</style>
