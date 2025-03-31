<template>
  <NuxtLayout name="default">
    <div class="bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <div v-if="gallery && gallery.images" class="container mx-auto bg-white px-4 py-6 rounded shadow-lg" data-aos="fade-up">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-3xl font-bold mb-6 mt-3">
            {{ gallery.title }}
          </h1>
          <p>
            <span class="text-primary-dark font-semibold">Posted on:</span>
            {{ new Date(gallery.date_posted).toLocaleDateString() }}
          </p>
        </div>
        <div class="mb-4 flex flex-wrap gap-2">
          <span
            v-for="(tag, index) in gallery.tags"
            :key="index"
            class="bg-primary text-black px-3 py-1 rounded-full text-sm shadow"
          >
            {{ tag.name }}
          </span>
        </div>
        <div v-if="isClient">
          <p v-html="gallery.description" class="text-white"></p>
        </div>
        <div class="gallery grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(image, index) in gallery.images" :key="index" class="card">
            <img
              :src="`https://softgenie.org${image.image}`"
              alt="Gallery Image"
              class="w-full h-auto rounded shadow cursor-pointer"
              @click="openLightbox(index)"
            />
          </div>
        </div>
      </div>
      <div v-else-if="pending">
        <Loader />
      </div>
      <div v-else-if="error">
        <p>Error loading gallery. Please try again later.</p>
      </div>
      <transition name="lightbox-fade">
        <div
          v-if="showLightbox && isClient"
          class="lightbox fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <button @click="closeLightbox" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
          <transition name="fade">
            <img
              v-if="showImage"
              :src="`https://softgenie.org${gallery.images[currentImageIndex].image}`"
              alt="Lightbox Image"
              class="max-w-full max-h-full"
            />
          </transition>

          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white flex gap-4">
            <button @click="prevImage" class="text-2xl">&lt;</button>
            <span>{{ currentImageIndex + 1 }} / {{ gallery.images.length }}</span>
            <button @click="nextImage" class="text-2xl">&gt;</button>
          </div>
        </div>
      </transition>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useAsyncData, useSeoMeta } from "#imports";

const route = useRoute();
const isClient = ref(false);
const galleryId = ref(route.params._id);
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const showImage = ref(true);

const {
  data: gallery,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "gallery",
  async () => {
    try {
      const response = await $fetch(
        `https://softgenie.org/api/gallery-posts/${galleryId.value}`
      );
      return response;
    } catch (err) {
      console.error("Error fetching gallery:", err);
      throw err;
    }
  },
  {
    key: () => `gallery-${galleryId.value}`,
  }
);

if (gallery.value) {
  useSeoMeta({
    title: `${gallery.value.title} - Gallery Details`,
    description:
      gallery.value.meta_description ||
      "Explore the gallery images and details.",
  });
}

onMounted(() => {
  isClient.value = true;
});

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

const nextImage = async () => {
  showImage.value = false;
  await nextTick();
  currentImageIndex.value = (currentImageIndex.value + 1) % gallery.value.images.length;
  showImage.value = true;
};

const prevImage = async () => {
  showImage.value = false;
  await nextTick();
  currentImageIndex.value = (currentImageIndex.value - 1 + gallery.value.images.length) % gallery.value.images.length;
  showImage.value = true;
};
</script>

<style scoped>
.lightbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.lightbox-fade-enter,
.lightbox-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>