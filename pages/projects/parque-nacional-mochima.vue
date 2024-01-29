<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Portafolio - Parque Nacional Mochima` : 'Site Title';
  }
})
const images = [
  "/mochima-1.png",
  "/mochima-2.png",
  "/mochima-3.png",
  "/mochima-4.png",
];
import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Parque Mochima"
      parrafo="Primer proyecto elaborado en React.Js, que tiene como objetivo
        promocionar los Servicios y las Playas que ofrece el parque nacional
        Mochima ademas de ofrecer informacion historica como su geolocalización."
      nameIcon="projects/beach"
      linkPage="https://strohxl.github.io/MyFirstPage/"
      :images="images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['parque-nacional-mochima'].frontend"
    />
  </Layout>
</template>
