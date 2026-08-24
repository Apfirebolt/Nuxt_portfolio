<template>
  <NuxtLayout name="default">
    <div
      class="min-h-screen bg-gray-100 text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary">

      <section class="relative overflow-hidden border-b border-secondary-dark/15 bg-secondary/30 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">

            <div class="flex flex-col justify-center lg:col-span-7">
              <div
                class="inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark shadow-sm">
                <span class="h-2 w-2 rounded-full bg-secondary-dark animate-pulse"></span>
                Full Stack &amp; Distributed Systems
              </div>

              <h1
                class="mt-6 min-h-[4rem] text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
                <span>{{ typeText }}</span>
                <span class="inline-block w-1 animate-pulse text-secondary-dark">|</span>
              </h1>

              <p class="mt-6 text-base leading-relaxed text-primary-dark/80 sm:text-lg">
                I am a software engineer specializing in scalable backend architectures, high-performance web
                applications, and intuitive interfaces with modern JavaScript and Python ecosystems.
              </p>

              <form @submit.prevent="handleSearch" class="mt-8 max-w-lg">
                <div class="relative flex items-center">
                  <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-primary-dark/50">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="text" v-model="searchQuery" placeholder="Search articles, notes, and topics..."
                    class="w-full rounded-xl border border-secondary-dark/25 bg-primary py-3 pl-10 pr-24 text-sm text-primary-dark placeholder:text-primary-dark/40 shadow-sm focus:border-secondary-dark focus:outline-none focus:ring-1 focus:ring-secondary-dark transition-all" />
                  <button type="submit"
                    class="absolute right-1.5 rounded-lg bg-secondary-dark px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90 transition-all">
                    Search
                  </button>
                </div>
              </form>

              <div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/80">
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">FastAPI &amp;
                  Django</span>
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">Node.js &amp;
                  Nuxt</span>
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">Docker &amp;
                  Cloud</span>
              </div>
            </div>

            <div class="relative flex justify-center lg:col-span-5">
              <div
                class="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl">
                <img class="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  src="https://softgenie.org/media/images/generic/home.jpeg" alt="Amit Prafulla Portfolio Visual"
                  loading="lazy" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="mt-4 text-base font-bold text-primary-dark">Full-Stack Architecture</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75">
              End-to-end web applications built with Vue/Nuxt, React, Python microservices, and relational databases.
            </p>
          </div>

          <div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="mt-4 text-base font-bold text-primary-dark">Scalable Infrastructure</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75">
              Containerized environments, automated testing, message queues, and cloud deployments across AWS and GCP.
            </p>
          </div>

          <div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="mt-4 text-base font-bold text-primary-dark">Technical Writing &amp; Blogs</h3>
            <p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75">
              Articles and engineering walkthroughs exploring system design, algorithms, web security, and tooling.
            </p>
          </div>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from 'gsap';

definePageMeta({
  layout: false,
  title: 'Home - Amit Prafulla',
  description: 'Full-stack software engineer portfolio showcasing web applications, distributed systems, and technical insights.',
});

useHead({
  title: 'APGIIIT.com - Amit Prafulla',
});

const typeText = ref('');
const searchQuery = ref('');
let timer = null;

const fullText = 'Welcome to my Portfolio';

const startTypewriter = () => {
  let charIndex = 0;
  typeText.value = '';

  timer = setInterval(() => {
    if (charIndex < fullText.length) {
      typeText.value += fullText[charIndex];
      charIndex++;
    } else {
      clearInterval(timer);
    }
  }, 75);
};

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo({
      path: '/blog',
      query: { q: searchQuery.value.trim() },
    });
  }
};

onMounted(() => {
  gsap.from('.hero', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });

  startTypewriter();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>