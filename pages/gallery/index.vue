<template>
  <NuxtLayout name="default">
    <div class="min-h-screen bg-[var(--color-primary)] text-[var(--color-primary-dark)] antialiased transition-colors duration-300">
      
      <!-- Hero Section -->
      <section class="relative overflow-hidden border-b border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] py-16 sm:py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            
            <div class="flex flex-col justify-center lg:col-span-7">
              <div class="inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-primary-dark)]/20 bg-[var(--color-primary-dark)]/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-dark)]">
                <span class="h-2 w-2 rounded-full bg-[var(--color-secondary-dark)]"></span>
                Visual Log &amp; Expeditions
              </div>

              <h1 class="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Photo <span class="text-[var(--color-secondary-dark)]">Gallery</span>
              </h1>

              <p class="mt-6 text-lg leading-relaxed opacity-85">
                A curated visual diary capturing solo journeys, architecture, mountain passes, and personal gatherings across India and Europe.
              </p>

              <div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold opacity-90">
                <span class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5 shadow-sm">🏔️ Landscapes &amp; Nature</span>
                <span class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5 shadow-sm">🏛️ Heritage Sites</span>
                <span class="rounded-lg border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-3 py-1.5 shadow-sm">📸 Travel Chronicles</span>
              </div>
            </div>

            <div class="relative flex justify-center lg:col-span-5">
              <div class="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-primary-dark)]/20 bg-[var(--color-primary-dark)]/5 shadow-2xl">
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

      <!-- Main Gallery List -->
      <main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Loader v-if="isLoading" />

        <div v-else>
          <div v-if="gallery.results && gallery.results.length" class="space-y-12">
            <article
              v-for="item in gallery.results"
              :key="item.id"
              class="overflow-hidden rounded-2xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary)] p-6 shadow-sm transition-all duration-300 hover:border-[var(--color-secondary-dark)] hover:shadow-md sm:p-8"
              data-aos="fade-up"
            >
              <div class="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-primary-dark)]/10 pb-4">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    v-for="tag in item.tags"
                    :key="tag.name"
                    class="rounded-md border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-secondary-dark)] shadow-sm"
                  >
                    #{{ tag.name }}
                  </span>
                </div>
                <ClientOnly>
                  <time class="text-xs font-medium opacity-60">
                    {{ formatDate(item.date_posted) }}
                  </time>
                </ClientOnly>
              </div>

              <div class="mt-5">
                <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
                  {{ item.title }}
                </h2>
                <div
                  class="prose prose-stone mt-3 max-w-none text-sm leading-relaxed opacity-85"
                  v-html="item.description"
                ></div>
              </div>

              <!-- Images Grid -->
              <div v-if="item.images && item.images.length" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="image in item.images"
                  :key="image.id"
                  class="group flex flex-col overflow-hidden rounded-xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/5 transition-all hover:border-[var(--color-secondary-dark)]"
                >
                  <div class="relative aspect-4/3 w-full overflow-hidden bg-[var(--color-primary-dark)]/10">
                    <img
                      :src="getFullImageUrl(image.image)"
                      :alt="image.caption || item.title"
                      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      loading="lazy"
                      @click="openModal(getFullImageUrl(image.image), image.caption)"
                    />
                    <button
                      type="button"
                      @click="openModal(getFullImageUrl(image.image), image.caption)"
                      class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-black/70 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-black cursor-pointer"
                      aria-label="View Full Size Image"
                    >
                      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>

                  <div v-if="image.caption" class="p-3 text-xs opacity-75 truncate">
                    {{ image.caption }}
                  </div>
                </div>
              </div>

              <div class="mt-8 flex items-center justify-end border-t border-[var(--color-primary-dark)]/10 pt-5">
                <button
                  type="button"
                  @click="goToDetail(item)"
                  class="inline-flex items-center gap-2 rounded-xl bg-[var(--color-secondary-dark)] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary-dark)] focus:ring-offset-2 cursor-pointer"
                >
                  <span>View Post Story</span>
                  <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </article>
          </div>

          <!-- Empty State -->
          <div v-else class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-primary-dark)]/30 bg-[var(--color-primary-dark)]/5 py-20 text-center">
            <span class="text-4xl">📷</span>
            <h3 class="mt-4 text-base font-bold">No Stories Published Yet</h3>
            <p class="mt-1 text-xs opacity-65">Check back later for new photography and expedition updates.</p>
          </div>
        </div>
      </main>

      <!-- Headless UI Modal Preview -->
      <TransitionRoot appear :show="isModalOpen" as="template">
        <Dialog as="div" class="relative z-50" @close="closeModal">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/80 backdrop-blur-md" />
          </TransitionChild>

          <div class="fixed inset-0 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="relative max-w-5xl w-full max-h-[90vh] bg-[var(--color-primary)] rounded-3xl border border-[var(--color-primary-dark)]/30 overflow-hidden shadow-2xl flex flex-col">
                <button
                  type="button"
                  @click="closeModal"
                  class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors backdrop-blur-sm cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div class="relative w-full h-[60vh] sm:h-[75vh] bg-black/40 flex items-center justify-center">
                  <img
                    v-if="modalImage"
                    :src="modalImage.src"
                    :alt="modalImage.caption || 'Expanded gallery view'"
                    class="max-h-full max-w-full object-contain"
                  />
                </div>

                <div v-if="modalImage?.caption" class="p-4 sm:p-6 bg-[var(--color-primary-dark)]/5 border-t border-[var(--color-primary-dark)]/15 text-center">
                  <p class="text-sm font-medium">
                    {{ modalImage.caption }}
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue';
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

// Modal state
const isModalOpen = ref(false);
const modalImage = ref(null);

const openModal = (src, caption) => {
  modalImage.value = { src, caption };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  modalImage.value = null;
};

const getFullImageUrl = (image) => {
  return image.startsWith('http') ? image : `https://softgenie.org${image}`;
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
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