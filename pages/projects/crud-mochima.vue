<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Portafolio - Crud Mochima` : 'Site Title';
  }
})
const images = [
  "/crud-mochima-1.png",
  "/crud-mochima-2.png",
  "/crud-mochima-3.png",
  "/crud-mochima-4.png",
];
import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Crud Mochima"
      :parrafo="` Segundo
    proyecto elaborado en React.Js, consiste en un crud de servicos, paquetes y
    lista de reservaciones donde puedes crear, añadir, editar y eliminar datos,
    para poder ingresar el usuario es 'admin' y la contraseña es 'admin'.`"
      nameIcon="projects/dashboard"
      linkPage="https://strohxl.github.io/SecondPage/"
      :images="images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['parque-nacional-mochima'].frontend"
    />
  </Layout>
</template>
