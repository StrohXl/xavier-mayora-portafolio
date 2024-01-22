<script lang="ts" setup>
const images = [
  "/nest-dev-1.png",
  "/nest-dev-2.png",
  "/nest-dev-3.png",
  "/nest-dev-4.png",
];
import SkillsProJects from "../../data/skillsProjectjs";
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      title="Nest Dev"
      parrafo="Proyecto elaborado en NextJs de react, donde puedes crearte una cuenta Y
        crear ingredientes que podras agregar al carrito o comprarlos
        directamente usando el saldo que tienes por defecto. Para validar el usuario
        subir imagenes cree mi propio backend usando Nest de Node."
      nameIcon="projects/dashboard"
      linkPage="https://nestxmdev.onrender.com/"
      :images="images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['dashboard-nest'].frontend"
      :backend="SkillsProJects['dashboard-nest'].backend"
    />
  </Layout>
</template>
