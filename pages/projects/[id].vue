<script lang="ts" setup>
import { useRoute } from "vue-router";
import dataProjects from "../../data/projects";
const id = useRoute().params.id;
const data = dataProjects.find((item) => item.seeProject.includes(`${id}`));
useHead({
  title: `Portafolio - ${data?.title}`,
});
useServerSeoMeta({
  description:()=> data?.text,
  ogDescription:()=>data?.text
});
</script>
<template>
  <Layout>
    <SectionsProjectsHeroProjects
      :title="data?.title"
      :parrafo="data?.text"
      :nameIcon="data?.icon"
      :linkPage="data?.linkProject"
      :images="data?.images"
      :linkRepo="data?.linkRepo"
    />
    <SectionsTechnologies
      :frontend="data?.tecnologies.frontend"
      :backend="data?.tecnologies.backend"
    />
  </Layout>
</template>
