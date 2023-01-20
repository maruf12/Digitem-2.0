// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@kevinmarrec/nuxt-pwa"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0",
        },
      ],
    },
  },
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
