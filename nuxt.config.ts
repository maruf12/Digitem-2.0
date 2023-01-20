// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@kevinmarrec/nuxt-pwa"],
  pwa: {
    workbox: { enabled: true },
    meta: {
      title: "Digiteam 2.0",
      author: "JDS",
    },
    manifest: {
      name: "Digiteam 2.0",
      short_name: "Digiteam PWA",
    },
  },
});
