<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      
      <section class="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            <div class="flex flex-col justify-center lg:col-span-7">
              <div class="inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <span class="h-2 w-2 rounded-full bg-indigo-600"></span>
                Visual Log &amp; Expeditions
              </div>

              <h1 class="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Photo <span class="text-indigo-600">Gallery</span>
              </h1>

              <p class="mt-6 text-lg leading-relaxed text-slate-600">
                A curated visual diary capturing solo journeys, architecture, mountain passes, and personal gatherings across India and Europe.
              </p>

              <div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
                <span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5">🏔️ Landscapes &amp; Nature</span>
                <span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5">🏛️ Heritage Sites</span>
                <span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5">📸 Travel Chronicles</span>
              </div>
            </div>

            <div class="relative flex justify-center lg:col-span-5">
              <div class="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl">
                <img
                  class="h-full w-full object-cover object-center"
                  src="https://softgenie.org/media/images/generic/gallery.jpeg"
                  alt="Ladakh Lake Showcase"
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
          <div v-if="gallery.results && gallery.results.length" class="space-y-12">
            <article
              v-for="item in gallery.results"
              :key="item.id"
              class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8"
              data-aos="fade-up"
            >
              <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    v-for="tag in item.tags"
                    :key="tag.name"
                    class="rounded-md border border-indigo-100 bg-indigo-50/80 px-2.5 py-0.5 text-xs font-semibold text-indigo-700"
                  >
                    #{{ tag.name }}
                  </span>
                </div>
                <time class="text-xs font-medium text-slate-400">
                  {{ new Date(item.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}
                </time>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {{ item.title }}
                </h2>
                <div
                  class="prose prose-slate mt-3 max-w-none text-sm leading-relaxed text-slate-600"
                  v-html="item.description"
                ></div>
              </div>

              <div v-if="item.images && item.images.length" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="image in item.images"
                  :key="image.id"
                  class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-slate-300"
                >
                  <div class="relative aspect-4/3 w-full overflow-hidden bg-slate-200">
                    <img
                      :src="getFullImageUrl(image.image)"
                      :alt="image.caption || item.title"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      @click="viewImageInFullSize(image.image)"
                      class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80"
                      aria-label="View Full Size Image"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>

                  <div v-if="image.caption" class="p-3 text-xs text-slate-600 truncate">
                    {{ image.caption }}
                  </div>
                </div>
              </div>

              <div class="mt-8 flex items-center justify-end border-t border-slate-100 pt-5">
                <button
                  type="button"
                  @click="goToDetail(item)"
                  class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>View Post Story</span>
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </article>
          </div>

          <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <span class="text-4xl">📷</span>
            <h3 class="mt-4 text-base font-bold text-slate-900">No Stories Published Yet</h3>
            <p class="mt-1 text-xs text-slate-500">Check back later for new photography and expedition updates.</p>
          </div>
        </div>
      </main>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import gsap from 'gsap';

useHead({
  title: 'Gallery | APGIIIT.com - Travel & Photography',
});

definePageMeta({
  layout: false,
  title: 'Gallery - Amit Prafulla',
  description: 'Showcase of photography, solo expeditions, and travel diaries.',
});

const galleryStore = useGallery();
const isLoading = computed(() => galleryStore.isLoading);
const gallery = computed(() => galleryStore.getGalleryList);

const getFullImageUrl = (image) => {
  return image.startsWith('http') ? image : `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  const url = image.startsWith('http') ? image : `https://softgenie.org${image}`;
  window.open(url, '_blank');
};

const goToDetail = async (item) => {
  await navigateTo(`/gallery/${item.id}`);
};

onMounted(() => {
  if (!gallery.value || !gallery.value.results || !gallery.value.results.length) {
    galleryStore.getGalleriesAction();
  }

  gsap.from('.hero', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  });
});
</script>