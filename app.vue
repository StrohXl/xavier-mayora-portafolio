<template>
  <div>
    <Header />
    <main id="main">
      <div id="Hero" class="py-8"></div>
      <NuxtPage />
      <SectionsNetworks />
    </main>
    <Footer />
  </div>
</template>
<style lang="postcss">
body {
  @apply dark:bg-gray-900 dark:text-white text-gray-800;
}
</style>
