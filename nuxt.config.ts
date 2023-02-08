// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_BASE_URL,
      logisticAPI: process.env.API_BASE_LOGISTIC_URL,
      baseURL: process.env.BASE_URL,
    },
  },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
  ],
  imports: {
    dirs: ["stores"],
  },
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
    workbox: { enabled: false },
    meta: {
      title: "Digiteam 2.0",
      author: "JDS",
      mobileAppIOS: true,
    },
    manifest: {
      name: "Digiteam 2.0",
      short_name: "Digiteam PWA",
    },
  },
});
