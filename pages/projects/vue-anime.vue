<script lang="ts" setup>
const images = [
  "/vueanime-1.png",
  "/vueanime-2.png",
  "/vueanime-3.png",
  "/vueanime-4.png",
];
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
      :images="images"
    />
    <SectionsTechnologies :frontend="SkillsProJects['vue-anime'].frontend" />
  </Layout>
</template>
