<script lang="ts" setup>
const images = [
  "/mochima-1.png",
  "/mochima-2.png",
  "/mochima-3.png",
  "/mochima-4.png",
];
const skills = [
  {
    icon: "skills/html5",
    title: "Html5",
  },
  {
    icon: "skills/css",
    title: "Css",
  },
  {
    icon: "skills/react",
    title: "React",
  },
  {
    icon: "skills/javascript",
    title: "JavaScript",
  },
];
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Parque Mochima"
      :parrafo="`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, blanditiis velit molestias, modi dicta accusantium placeat odit nulla obcaecati tempore perferendis mollitia quo facilis. Corporis nam voluptate dicta cupiditate facilis.
`"
      nameIcon="projects/beach"
      linkPage="https://strohxl.github.io/MyFirstPage/"
      :images="images"
    />
    <SectionsTechnologies :skills="skills" />
  </Layout>
</template>
