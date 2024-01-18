// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icons",
    "@nuxt/image",
    "@pinia/nuxt",
  ],
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
