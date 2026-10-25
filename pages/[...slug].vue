<template>
  <NuxtLayout name="default">
    <div
      class="min-h-[80vh] flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-primary-dark)] antialiased transition-colors duration-300 px-4 py-20">
      
      <div class="max-w-lg w-full text-center bg-[var(--color-primary-dark)]/5 p-8 sm:p-12 rounded-3xl border border-[var(--color-primary-dark)]/15 shadow-xl backdrop-blur-md">
        
        <!-- Error Badge Icon -->
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-secondary-dark)]/15 text-[var(--color-secondary-dark)] mb-6 font-extrabold text-3xl border border-[var(--color-secondary-dark)]/30 shadow-sm">
          404
        </div>

        <!-- Heading -->
        <h1 class="text-2xl sm:text-4xl font-black tracking-tight mb-3">
          Page Not Found
        </h1>

        <!-- Description -->
        <p class="text-sm sm:text-base leading-relaxed opacity-80 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink
            to="/"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[var(--color-secondary-dark)] hover:opacity-90 rounded-xl transition-all shadow-md cursor-pointer"
          >
            &larr; Back to Home
          </NuxtLink>
          
          <NuxtLink
            to="/project"
            class="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/10 hover:bg-[var(--color-primary-dark)]/20 rounded-xl transition-all border border-[var(--color-primary-dark)]/15 cursor-pointer"
          >
            View Projects
          </NuxtLink>
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});

useHead({
  title: '404 - Page Not Found | APGIIIT.com',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
});
</script>