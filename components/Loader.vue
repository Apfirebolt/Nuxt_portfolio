<template>
  <div class="flex min-h-[50vh] flex-col items-center justify-center gap-5 py-12">
    <div class="relative flex items-center justify-center">
      <!-- Outer ambient pulse glow -->
      <div class="absolute h-24 w-24 animate-ping rounded-full bg-[var(--color-secondary-dark)]/15 duration-1000" />

      <!-- Inner static track ring -->
      <div class="h-16 w-16 rounded-full border-4 border-[var(--color-primary-dark)]/15" />

      <!-- Spinning gradient/accent ring -->
      <div
        class="absolute h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-[var(--color-secondary-dark)] border-r-[var(--color-primary-dark)]"
      />

      <!-- Center pulsing dot -->
      <div class="absolute h-3 w-3 rounded-full bg-[var(--color-secondary-dark)] animate-pulse" />
    </div>
    
    <!-- Loading Label -->
    <span
      v-if="label"
      class="text-xs font-bold tracking-widest text-[var(--color-primary-dark)] uppercase opacity-80 animate-pulse"
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