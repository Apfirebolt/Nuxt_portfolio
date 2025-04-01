<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

</script>

<template>
<div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-6xl text-red-500">{{ error.statusCode }}</h2>

    <p class="text-gray-700 mt-4 text-center">
      Oops! The page you are looking for does not exist or an error occurred.
    </p>
    <nuxt-link to="/" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Go Back to Home
    </nuxt-link>
</div>
</template>