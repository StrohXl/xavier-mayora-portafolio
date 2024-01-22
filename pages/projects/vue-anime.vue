<script lang="ts" setup>
const images = ['/vueanime-1.png','/vueanime-2.png','/vueanime-3.png','/vueanime-4.png']
</script>
<template>
   <Layout>
    <SectionsProjectsHeroProjects
      title="VueAnime"
      :parrafo="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, blanditiis velit molestias, modi dicta accusantium placeat odit nulla obcaecati tempore perferendis mollitia quo facilis. Corporis nam voluptate dicta cupiditate facilis.
`"
      nameIcon="projects/dashboard"
      linkPage="https://strohxl.github.io/MyFirstPageOfAnime/"
      :images="images"
    />
  </Layout>
</template>