<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      
      <main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div class="mb-8 flex items-center justify-between">
          <NuxtLink
            to="/gallery"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Gallery</span>
          </NuxtLink>
        </div>

        <div v-if="pending" class="flex min-h-[50vh] items-center justify-center">
          <Loader />
        </div>

        <div
          v-else-if="error"
          class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-white py-16 text-center"
        >
          <span class="text-4xl">⚠️</span>
          <h2 class="mt-4 text-base font-bold text-slate-900">Failed to load story</h2>
          <p class="mt-1 text-xs text-slate-500">The requested gallery entry could not be retrieved.</p>
          <button
            type="button"
            @click="() => refresh()"
            class="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>

        <article
          v-else-if="gallery && gallery.images"
          class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"
        >
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tag in gallery.tags"
                :key="tag.name"
                class="rounded-md border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700"
              >
                #{{ tag.name }}
              </span>
            </div>
            <time v-if="gallery.date_posted" class="text-xs font-medium text-slate-400">
              Published on {{ new Date(gallery.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
          </div>

          <div class="mt-8">
            <h1 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {{ gallery.title }}
            </h1>

            <div
              v-if="isClient && gallery.description"
              class="prose prose-slate mt-6 max-w-none text-base leading-relaxed text-slate-600"
              v-html="gallery.description"
            />
          </div>

          <div class="mt-12">
            <div class="flex items-center justify-between pb-4">
              <h2 class="text-lg font-bold text-slate-900">Photographs</h2>
              <span class="text-xs font-medium text-slate-400">{{ gallery.images.length }} captures</span>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div
                v-for="(image, index) in gallery.images"
                :key="index"
                @click="openLightbox(index)"
                class="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <img
                  :src="getImageUrl(image.image)"
                  :alt="image.caption || gallery.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div class="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between">
                  <span class="text-xs font-medium truncate pr-2">{{ image.caption || 'View full photo' }}</span>
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
            v-if="showLightbox && isClient && gallery?.images?.length"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md select-none"
            @keydown.esc="closeLightbox"
            @keydown.right="nextImage"
            @keydown.left="prevImage"
            tabindex="0"
          >
            <button
              type="button"
              @click="closeLightbox"
              class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none"
              aria-label="Close Preview"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              v-if="gallery.images.length > 1"
              type="button"
              @click.stop="prevImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:left-8"
              aria-label="Previous image"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex max-h-[85vh] max-w-5xl flex-col items-center justify-center">
              <img
                :src="getImageUrl(gallery.images[currentImageIndex].image)"
                :alt="gallery.images[currentImageIndex].caption || gallery.title"
                class="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
              />
              <p v-if="gallery.images[currentImageIndex].caption" class="mt-3 text-center text-xs font-medium text-white/80">
                {{ gallery.images[currentImageIndex].caption }}
              </p>
            </div>

            <button
              v-if="gallery.images.length > 1"
              type="button"
              @click.stop="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:right-8"
              aria-label="Next image"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
              {{ currentImageIndex + 1 }} / {{ gallery.images.length }}
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
const galleryId = ref(route.params.id || route.params._id);
const showLightbox = ref(false);
const currentImageIndex = ref(0);

const {
  data: gallery,
  pending,
  error,
  refresh,
} = await useAsyncData(
  `gallery-${galleryId.value}`,
  () => $fetch(`https://softgenie.org/api/gallery-posts/${galleryId.value}`),
  {
    key: `gallery-detail-${galleryId.value}`,
  }
);

if (gallery.value) {
  useSeoMeta({
    title: `${gallery.value.title} | APGIIIT Gallery`,
    description: gallery.value.meta_description || 'Explore the gallery images and detailed travelogue.',
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
  if (!gallery.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % gallery.value.images.length;
};

const prevImage = () => {
  if (!gallery.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + gallery.value.images.length) % gallery.value.images.length;
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