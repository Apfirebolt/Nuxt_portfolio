<template>
  <NuxtLayout name="default">
    <div
      class="min-h-screen bg-[var(--color-primary)] text-[var(--color-primary-dark)] antialiased transition-colors duration-300">
      
      <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        
        <!-- Back Navigation -->
        <div class="mb-8 flex items-center justify-between">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 rounded-xl border border-[var(--color-primary-dark)]/20 bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold shadow-sm transition-all hover:bg-[var(--color-primary-dark)]/5 cursor-pointer"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Articles</span>
          </NuxtLink>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex min-h-[50vh] items-center justify-center">
          <Loader />
        </div>

        <!-- Error State -->
        <div
          v-else-if="error"
          class="flex flex-col items-center justify-center rounded-3xl border border-dashed border-rose-400/40 bg-[var(--color-primary)] py-16 text-center shadow-sm"
        >
          <span class="text-4xl">⚠️</span>
          <h2 class="mt-4 text-base font-bold">Failed to load article</h2>
          <p class="mt-1 text-xs opacity-65">The requested blog post could not be retrieved.</p>
          <button
            type="button"
            @click="() => refresh()"
            class="mt-6 rounded-xl bg-[var(--color-secondary-dark)] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 cursor-pointer"
          >
            Try Again
          </button>
        </div>

        <!-- Blog Article -->
        <article
          v-else-if="blog"
          class="overflow-hidden rounded-3xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] p-6 shadow-sm sm:p-10"
        >
          <!-- Tags & Date Meta -->
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-primary-dark)]/10 pb-6">
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag.name || tag"
                class="rounded-md border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1 text-xs font-semibold text-[var(--color-secondary-dark)] shadow-sm"
              >
                #{{ tag.name || tag }}
              </span>
            </div>
            <ClientOnly>
              <time v-if="blog.date_posted" class="text-xs font-medium opacity-60">
                Published on {{ formatDate(blog.date_posted) }}
              </time>
            </ClientOnly>
          </div>

          <!-- Title & Content Body -->
          <div class="mt-8">
            <h1 class="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              {{ blog.title }}
            </h1>

            <div
              v-if="isClient && blog.content"
              class="prose prose-stone mt-8 max-w-none text-base leading-relaxed opacity-90"
              v-html="blog.content"
            />
          </div>

          <!-- Post Gallery Section -->
          <div v-if="blog.images && blog.images.length" class="mt-12 border-t border-[var(--color-primary-dark)]/10 pt-8">
            <h2 class="text-lg font-bold mb-6">Post Gallery</h2>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                v-for="(image, index) in blog.images"
                :key="index"
                @click="openLightbox(index)"
                class="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary-dark)] hover:shadow-md"
              >
                <img
                  :src="getImageUrl(image.image)"
                  :alt="image.caption || blog.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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

      <!-- Immersive Lightbox Modal -->
      <Teleport to="body">
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
          enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="showLightbox && isClient && blog?.images?.length"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md select-none"
            @keydown.esc="closeLightbox" @keydown.right="nextImage" @keydown.left="prevImage" tabindex="0">
            
            <button type="button" @click="closeLightbox"
              class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none cursor-pointer"
              aria-label="Close Preview">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button v-if="blog.images.length > 1" type="button" @click.stop="prevImage"
              class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:left-8 cursor-pointer"
              aria-label="Previous image">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div class="flex max-h-[85vh] max-w-5xl flex-col items-center justify-center">
              <img :src="getImageUrl(blog.images[currentImageIndex].image)"
                :alt="blog.images[currentImageIndex].caption || blog.title"
                class="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl transition-all duration-300" />
              <p v-if="blog.images[currentImageIndex].caption"
                class="mt-4 text-center text-xs font-medium text-white/90">
                {{ blog.images[currentImageIndex].caption }}
              </p>
            </div>

            <button v-if="blog.images.length > 1" type="button" @click.stop="nextImage"
              class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:right-8 cursor-pointer"
              aria-label="Next image">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {{ currentImageIndex + 1 }} / {{ blog.images.length }}
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
const blogId = ref(route.params.id || route.params._id);
const showLightbox = ref(false);
const currentImageIndex = ref(0);

const {
  data: blog,
  pending,
  error,
  refresh,
} = await useAsyncData(
  `blog-${blogId.value}`,
  () => $fetch(`https://softgenie.org/api/blogs/${blogId.value}`),
  {
    key: `blog-detail-${blogId.value}`,
  }
);

if (blog.value) {
  useSeoMeta({
    title: `${blog.value.title} | APGIIIT Blog`,
    description: blog.value.meta_description || 'Explore this in-depth engineering article and technical walkthrough.',
  });
}

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  return imagePath.startsWith('http') ? imagePath : `https://softgenie.org${imagePath}`;
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

const nextImage = () => {
  if (!blog.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % blog.value.images.length;
};

const prevImage = () => {
  if (!blog.value?.images?.length) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + blog.value.images.length) % blog.value.images.length;
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