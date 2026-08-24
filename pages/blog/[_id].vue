<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-primary text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary">
      
      <main class="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div class="mb-8 flex items-center justify-between">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 rounded-lg border border-secondary-dark/20 bg-secondary/40 px-4 py-2 text-xs font-semibold text-primary-dark shadow-sm transition-all hover:bg-secondary hover:text-primary-dark"
          >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Articles</span>
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
          <h2 class="mt-4 text-base font-bold text-primary-dark">Failed to load article</h2>
          <p class="mt-1 text-xs text-primary-dark/70">The requested blog post could not be retrieved.</p>
          <button
            type="button"
            @click="() => refresh()"
            class="mt-6 rounded-lg bg-secondary-dark px-4 py-2 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90"
          >
            Try Again
          </button>
        </div>

        <article
          v-else-if="blog"
          class="overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm sm:p-10"
        >
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-6">
            <div class="flex flex-wrap items-center gap-2">
              <span
                v-for="tag in blog.tags"
                :key="tag.name || tag"
                class="rounded-md border border-secondary-dark/30 bg-primary px-3 py-1 text-xs font-semibold text-secondary-dark shadow-sm"
              >
                #{{ tag.name || tag }}
              </span>
            </div>
            <time v-if="blog.date_posted" class="text-xs font-medium text-primary-dark/60">
              Published on {{ new Date(blog.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
            </time>
          </div>

          <div class="mt-8">
            <h1 class="text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-5xl leading-tight">
              {{ blog.title }}
            </h1>

            <div
              v-if="isClient && blog.content"
              class="prose prose-stone mt-8 max-w-none text-base leading-relaxed text-primary-dark/90"
              v-html="blog.content"
            />
          </div>

          <div v-if="blog.images && blog.images.length" class="mt-12 border-t border-secondary-dark/15 pt-8">
            <h2 class="text-lg font-bold text-primary-dark mb-4">Post Gallery</h2>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div
                v-for="(image, index) in blog.images"
                :key="index"
                class="group relative aspect-16/10 overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary shadow-sm transition-all hover:border-secondary-dark/40"
              >
                <img
                  :src="getImageUrl(image.image)"
                  :alt="image.caption || blog.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div v-if="image.caption" class="absolute bottom-0 left-0 right-0 bg-primary-dark/80 p-3 text-xs text-primary backdrop-blur-sm">
                  {{ image.caption }}
                </div>
              </div>
            </div>
          </div>
        </article>

      </main>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useAsyncData, useSeoMeta } from '#imports';

const route = useRoute();
const isClient = ref(false);
const blogId = ref(route.params.id || route.params._id);

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

onMounted(() => {
  isClient.value = true;
});
</script>