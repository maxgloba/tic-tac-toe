import { defineNuxtConfig } from "nuxt/config"

const mode = process.env.NODE_ENV === "development" ? "LOCAL" : "STAG"

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/png", href: "/img/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
        { href: "https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap", rel: "stylesheet" }
      ],
      charset: "utf-8",
      viewport: "width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0",
      meta: [
        { name: "description", content: "" },
        { name: "keywords", content: "" },
        { name: "og:title", content: "" },
        { name: "og:description", content: "" },
        { name: "og:image", content: "/favicon.png" },
        { name: "og:url", content: "" },
        { name: "color-scheme", content: "only light" }
      ],
      script: [
        { src: "/height.js", defer: true }
      ],
    },
  },
  plugins: [],
  modules: ["nuxt-viewport"],
  viewport: {
    breakpoints: {
      mobile: 576,
      tablet: 768,
      desktop: 1200,
    },
  },
  css: ["~/assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/base/_functions.scss";',
        },
      },
    },
  },
  runtimeConfig: {},
  nitro: {
    compressPublicAssets: true,
    preset: "node-server",
  },
  hooks: {
    "builder:watch": console.log,
  },
  router: {
    base: '/tic-tac-toe/'
  }
  // typescript: {
  //   typeCheck: true,
  //   strict: true
  // }
});
