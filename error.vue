<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
<div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-6xl text-red-500">{{ error.statusCode }}</h2>

    <p class="text-red-700 mt-4">
        The page you are looking for is not available.
    </p>
</div>
</template>