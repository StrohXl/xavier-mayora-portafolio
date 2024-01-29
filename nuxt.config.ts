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
      title: "Portafolio - Xavier Mayora",
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
        },
      ],
      meta:[
        {name:"og:title",content:"epale"}
      ]
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
