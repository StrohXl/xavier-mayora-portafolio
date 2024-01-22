<script lang="ts" setup>
const images = ['/nest-dev-1.png','/nest-dev-2.png','/nest-dev-3.png','/nest-dev-4.png']
</script>
<template>
   <Layout>
    <SectionsProjectsHeroProjects
      title="Nest Dev"
      :parrafo="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, blanditiis velit molestias, modi dicta accusantium placeat odit nulla obcaecati tempore perferendis mollitia quo facilis. Corporis nam voluptate dicta cupiditate facilis.
`"
      nameIcon="projects/dashboard"
      linkPage="https://strohxl.github.io/MyFirstPageOfAnime/"
      :images="images"
    />
  </Layout>
</template>