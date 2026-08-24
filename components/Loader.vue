<template>
  <div class="flex min-h-[50vh] flex-col items-center justify-center gap-4 py-8">
    <div class="relative flex items-center justify-center">
      <!-- Outer ambient pulse -->
      <div class="absolute h-20 w-20 animate-ping rounded-full bg-secondary/15 duration-1000" />

      <div class="h-16 w-16 rounded-full border-4 border-secondary/20" />

      <div
        class="absolute h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-secondary"
      />

      <div class="absolute h-3 w-3 rounded-full bg-primary/80 animate-pulse" />
    </div>
    
    <span
      v-if="label"
      class="text-xs font-semibold tracking-widest text-secondary-dark uppercase animate-pulse"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Loading...',
  },
});
</script>