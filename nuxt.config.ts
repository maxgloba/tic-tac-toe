import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/img/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap", rel: "stylesheet" }
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
    },
    baseURL: '/tic-tac-toe/',
    buildAssetsDir: '/assets/',
  },
  css: ["~/assets/global.css"],
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
  hooks: {
    "builder:watch": console.log,
  }
});
