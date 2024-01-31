<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Portafolio - Vue Anime` : 'Site Title';
  }
})
import dataProjects from "~/data/proyects";

import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="VueAnime"
      parrafo="     Inspirada en Youtube VueAnime fue mi primer proyecto elaborado en el
        framework de NuxtJs de Vue, que se encarga de hacer solicitudes Get
        usando Axios a una api llama Jikan la cual te regresa los datos de los
        animes."
      nameIcon="projects/dashboard"
      linkPage="https://strohxl.github.io/MyFirstPageOfAnime/"
      :images="dataProjects[2].images"
    />
    <SectionsTechnologies :frontend="SkillsProJects['vue-anime'].frontend" />
  </Layout>
</template>
