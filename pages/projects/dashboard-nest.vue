<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Portafolio - Dashboard Nest` : 'Site Title';
  }
})
import dataProjects from "~/data/proyects";

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
      :images="dataProjects[3].images"
    />
    <SectionsTechnologies
      :frontend="SkillsProJects['dashboard-nest'].frontend"
      :backend="SkillsProJects['dashboard-nest'].backend"
    />
  </Layout>
</template>
