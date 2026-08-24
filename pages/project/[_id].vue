<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-primary text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary">
      
      <main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div class="mb-8 flex items-center justify-between">
          <NuxtLink
            to="/project"
            class="inline-flex items-center gap-2 rounded-lg border border-secondary-dark/20 bg-secondary/40 px-4 py-2 text-xs font-semibold text-primary-dark shadow-sm transition-all hover:bg-secondary hover:text-primary-dark"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </NuxtLink>
        </div>

        <div v-if="pending" class="flex min-h-[50vh] items-center justify-center">
          <Loader />
        </div>

        <div
          v-else-if="error"
          class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-danger/40 bg-secondary/20 py-16 text-center"
        >
          <span class="text-4xl">⚠️</span>
          <h2 class="mt-4 text-base font-bold text-primary-dark">Failed to load project</h2>
          <p class="mt-1 text-xs text-primary-dark/70">The requested project overview could not be retrieved.</p>
          <button
            type="button"
            @click="() => refresh()"
            class="mt-6 rounded-lg bg-secondary-dark px-4 py-2 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90"
          >
            Try Again
          </button>
        </div>

        <article
          v-else-if="project && project.images"
          class="overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm sm:p-10"
        >
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-6">
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                class="rounded-md border border-secondary-dark/30 bg-primary px-3 py-1 text-xs font-semibold text-secondary-dark shadow-sm"
              >
                #{{ tag.name }}
              </span>
            </div>
            <time v-if="project.date_posted" class="text-xs font-medium text-primary-dark/60">
              Published on {{ new Date(project.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
          </div>

          <div class="mt-8">
            <h1 class="text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-5xl">
              {{ project.title }}
            </h1>

            <div class="mt-6 flex flex-wrap gap-4 border-y border-secondary-dark/15 py-4">
              <div v-if="project.technology" class="flex flex-wrap items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider text-primary-dark/60">Tech Stack:</span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="(tech, index) in project.technology.split(',')"
                    :key="index"
                    class="rounded-md border border-secondary-dark/20 bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-dark"
                  >
                    {{ tech.trim() }}
                  </span>
                </div>
              </div>

              <div v-if="project.project_link" class="flex items-center gap-2 sm:ml-auto">
                <a
                  :href="project.project_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 rounded-lg bg-secondary-dark px-4 py-1.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
                >
                  <span>Live Demo / Repository</span>
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              v-if="isClient && project.description"
              class="prose prose-stone mt-6 max-w-none text-base leading-relaxed text-primary-dark/85"
              v-html="project.description"
            />
          </div>

          <div class="mt-12">
            <div class="flex items-center justify-between pb-4">
              <h2 class="text-lg font-bold text-primary-dark">Project Screenshots</h2>
              <span class="text-xs font-medium text-primary-dark/60">{{ project.images.length }} captures</span>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="(image, index) in project.images"
                :key="index"
                @click="openLightbox(index)"
                class="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-dark/40 hover:shadow-md"
              >
                <img
                  :src="getImageUrl(image.image)"
                  :alt="image.caption || project.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div class="absolute bottom-0 left-0 right-0 p-4 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between">
                  <span class="text-xs font-medium truncate pr-2">{{ image.caption || 'View screenshot' }}</span>
                  <svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </article>

      </main>

      <Teleport to="body">
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="showLightbox && isClient && project?.images?.length"
            class="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 p-4 backdrop-blur-md select-none"
            @keydown.esc="closeLightbox"
            @keydown.right="nextImage"
            @keydown.left="prevImage"
            tabindex="0"
          >
            <button
              type="button"
              @click="closeLightbox"
              class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none"
              aria-label="Close Preview"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              v-if="project.images.length > 1"
              type="button"
              @click.stop="prevImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:left-8"
              aria-label="Previous image"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex max-h-[85vh] max-w-5xl flex-col items-center justify-center">
              <img
                :src="getImageUrl(project.images[currentImageIndex].image)"
                :alt="project.images[currentImageIndex].caption || project.title"
                class="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
              />
              <p v-if="project.images[currentImageIndex].caption" class="mt-3 text-center text-xs font-medium text-primary/80">
                {{ project.images[currentImageIndex].caption }}
              </p>
            </div>

            <button
              v-if="project.images.length > 1"
              type="button"
              @click.stop="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:right-8"
              aria-label="Next image"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-primary/20 bg-primary-dark/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm">
              {{ currentImageIndex + 1 }} / {{ project.images.length }}
            </div>
          </div>
        </Transition>
      </Teleport>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute, useAsyncData, useSeoMeta } from '#imports';

const route = useRoute();
const isClient = ref(false);
const projectId = ref(route.params.id || route.params._id);
const showLightbox = ref(false);
const currentImageIndex = ref(0);

const {
  data: project,
  pending,
  error,
  refresh,
} = await useAsyncData(
  `project-${projectId.value}`,
  () => $fetch(`https://softgenie.org/api/projects/${projectId.value}`),
  {
    key: `project-detail-${projectId.value}`,
  }
);

if (project.value) {
  useSeoMeta({
    title: `${project.value.title} | APGIIIT Projects`,
    description: project.value.meta_description || 'Explore the project architecture, screenshots, and live demo.',
  });
}

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  return imagePath.startsWith('http') ? imagePath : `https://softgenie.org${imagePath}`;
};

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

const nextImage = () => {
  if (!project.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length;
};

const prevImage = () => {
  if (!project.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + project.value.images.length) % project.value.images.length;
};

const handleKeyDown = (e) => {
  if (!showLightbox.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

onMounted(() => {
  isClient.value = true;
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>