<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-primary text-primary-dark antialiased">
      
      <section class="relative overflow-hidden border-b border-secondary-dark/20 bg-secondary/40 py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            
            <div class="flex flex-col justify-center lg:col-span-6">
              <div class="inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark">
                <span class="h-2 w-2 rounded-full bg-secondary-dark"></span>
                Software &amp; Systems Portfolio
              </div>

              <h1 class="mt-6 text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
                Featured <span class="text-secondary-dark">Projects</span>
              </h1>

              <p class="mt-6 text-lg leading-relaxed text-primary-dark/80">
                A showcase of production web applications, distributed backend services, and open-source tooling built with performance, security, and scalable architecture in mind.
              </p>

              <div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/90">
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">⚡ Full-Stack Systems</span>
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">🔒 Cloud &amp; Microservices</span>
                <span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm">📦 Open Source</span>
              </div>
            </div>

            <div class="relative flex justify-center lg:col-span-6">
              <div class="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl lg:max-w-lg">
                <img
                  class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  src="@/assets/laptop.jpg"
                  alt="Projects and Engineering Showcase"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Loader v-if="isLoading" />

        <div v-else>
          <div v-if="projects.results && projects.results.length" class="space-y-12">
            <article
              v-for="project in projects.results"
              :key="project.id"
              class="overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm transition-all duration-300 hover:border-secondary-dark/40 hover:shadow-md sm:p-8"
              data-aos="fade-up"
            >
              <div class="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag.name"
                    class="rounded-md border border-secondary-dark/30 bg-primary px-2.5 py-0.5 text-xs font-semibold text-secondary-dark shadow-sm"
                  >
                    #{{ tag.name }}
                  </span>
                </div>
                <time class="text-xs font-medium text-primary-dark/60">
                  {{ new Date(project.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                </time>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold tracking-tight text-primary-dark sm:text-3xl">
                  {{ project.title }}
                </h2>
                <div
                  class="prose prose-stone mt-3 max-w-none text-sm leading-relaxed text-primary-dark/80"
                  v-html="project.description"
                ></div>
              </div>

              <div v-if="project.images && project.images.length" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="item in project.images"
                  :key="item.id"
                  class="group flex flex-col overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary transition-all hover:border-secondary-dark/40"
                >
                  <div class="relative aspect-16/10 w-full overflow-hidden bg-secondary">
                    <img
                      :src="getFullImageUrl(item.image)"
                      :alt="item.caption || project.title"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      @click="viewImageInFullSize(item.image)"
                      class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-dark/70 text-primary opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-primary-dark"
                      aria-label="View Full Size Image"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>

                  <div v-if="item.caption" class="p-3 text-xs text-primary-dark/80 truncate">
                    {{ item.caption }}
                  </div>
                </div>
              </div>

              <div class="mt-8 flex items-center justify-end border-t border-secondary-dark/15 pt-5">
                <button
                  type="button"
                  @click="goToDetail(project)"
                  class="inline-flex items-center gap-2 rounded-lg bg-secondary-dark px-5 py-2.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2"
                >
                  <span>Project Overview</span>
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </article>
          </div>

          <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-secondary-dark/30 bg-secondary/20 py-20 text-center">
            <span class="text-4xl">📁</span>
            <h3 class="mt-4 text-base font-bold text-primary-dark">No Projects Available</h3>
            <p class="mt-1 text-xs text-primary-dark/60">New projects and repositories will appear here soon.</p>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { gsap } from 'gsap';

useHead({
  title: 'Projects | APGIIIT.com - Software & Engineering',
});

definePageMeta({
  layout: false,
  title: 'Projects - Amit Prafulla',
  description: 'Showcase of engineering projects, architecture design, and open-source software.',
});

const projectStore = useProject();
const isLoading = computed(() => projectStore.isLoading);
const projects = computed(() => projectStore.getProjectList);

const getFullImageUrl = (image) => {
  return image.startsWith('http') ? image : `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  const url = image.startsWith('http') ? image : `https://softgenie.org${image}`;
  window.open(url, '_blank');
};

const goToDetail = async (project) => {
  await navigateTo(`/project/${project.id}`);
};

onMounted(() => {
  if (!projects.value || !projects.value.results || !projects.value.results.length) {
    projectStore.getProjectsAction();
  }

  gsap.from('.hero', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
});
</script>