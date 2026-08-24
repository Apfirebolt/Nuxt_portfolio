import { defineNuxtConfig } from "nuxt/config";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-24",
  devtools: { enabled: true },

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

  // Tailwind v4 uses the Vite plugin, so @nuxtjs/tailwindcss is removed from modules
  modules: ["@pinia/nuxt", "nuxt-easy-lightbox", "nuxt-swiper"],

  routeRules: {
    "/login": { ssr: false },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
});