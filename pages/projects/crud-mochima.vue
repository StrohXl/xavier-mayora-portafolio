<script lang="ts" setup>
const images = [
  "/crud-mochima-1.png",
  "/crud-mochima-2.png",
  "/crud-mochima-3.png",
  "/mochima-4.png",
];
import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Crud Mochima"
      :parrafo="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, blanditiis velit molestias, modi dicta accusantium placeat odit nulla obcaecati tempore perferendis mollitia quo facilis. Corporis nam voluptate dicta cupiditate facilis.
`"
      nameIcon="projects/dashboard"
      linkPage="https://strohxl.github.io/SecondPage/"
      :images="images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['parque-nacional-mochima'].frontend"
    />
  </Layout>
</template>
