import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Apgiiit.com - My Portfolio",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "A portfolio website of Amit Prafulla, a Full Stack Developer with 6+ years of experience working with web applications.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Apfirebolt" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-easy-lightbox", "nuxt-swiper"],

  routeRules: [
    {
      '/login': { ssr: false },
    },
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },

  compatibilityDate: "2024-12-24",
});