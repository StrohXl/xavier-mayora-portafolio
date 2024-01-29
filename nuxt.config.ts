// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icons",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  app: {
    head: {
      title: "Xavier Mayora Full Stack Developer",
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
        },
      ],
      meta: [
        { name: "og:title", content: "Xavier Mayora Full Stack Developer" },
        { name: "og:image", content: "/contact-us.png" },
        {
          name: "og:description",
          content:
            "Soy desarrollador web con mas de 1 año de experiencia, amante nato de la tecnología, la programación y sus avances. Autodidacta de aquellos temas de mi interés y partidario de que el aprendizaje constante es algo necesario.",
        },
        {
          name: "description",
          content:
            "Soy desarrollador web con mas de 1 año de experiencia, amante nato de la tecnología, la programación y sus avances. Autodidacta de aquellos temas de mi interés y partidario de que el aprendizaje constante es algo necesario.",
        },
      ],
    },
  },

  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
