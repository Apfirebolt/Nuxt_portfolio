import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Amiibo Database App",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "An App in Nuxt JS which integrates with Amiibo API to fetch Amiibo data.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Apfirebolt" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt"
  ],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },

  compatibilityDate: "2024-12-24",
});
