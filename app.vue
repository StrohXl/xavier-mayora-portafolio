
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
  scrollbar-color: #00c16a white;
  scrollbar-width: thin;
}
h2 {
  @apply !text-3xl md:!text-4xl xl:!text-5xl font-bold;
}
p {
  @apply text-base 2xl:text-lg;
}
</style>
