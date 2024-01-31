<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Portafolio - Parque Nacional Mochima` : 'Site Title';
  }
})
import dataProjects from "~/data/proyects";
import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Parque Mochima"
      :parrafo="dataProjects[0].text"
      nameIcon="projects/beach"
      linkPage="https://strohxl.github.io/MyFirstPage/"
      :images="dataProjects[0].images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['parque-nacional-mochima'].frontend"
    />
  </Layout>
</template>
