<template>
  <NuxtLayout name="default">
    <div class="gallery-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <div
          class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
        >
          <!-- Image Column -->
          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              class="h-500 w-full object-cover"
              src="https://softgenie.org/media/images/generic/gallery.jpeg"
              alt="Ladakh lake"
            />
          </div>
          <!-- Close Image Column -->

          <!-- Text Column -->
          <div
            class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
          >
            <!-- Text Wrapper -->
            <div class="flex flex-col p-12 md:px-16">
              <h2
                class="text-2xl font-medium uppercase text-secondary-dark lg:text-4xl"
              >
              {{ gallery.title ? gallery.title : "Gallery Detail" }}
              </h2>
              <p class="text-sm text-secondary-dark mt-4">
                Posted on: {{ new Date(gallery.date_posted).toLocaleDateString() }}
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
      </div>
        <div v-if="gallery" class="bg-white p-4 rounded shadow-lg mt-4">
          <div v-html="gallery.description"></div>
          <div v-if="gallery.images && gallery.images.length">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="item in gallery.images" :key="item.id" class="my-2">
                <img
                  :src="getFullImageUrl(item.image)"
                  alt="Gallery Image"
                  class="w-full h-auto rounded"
                />
                <div class="flex items-center justify-between mt-4">
                  <span>
                    {{ item.caption }}
                  </span>
                  <button
                    @click="viewImageInFullSize(item.image)"
                    class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-blue-200"
                  >
                    View Full Size
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Gallery Detail",
  description: "Collection of my works",
});

const galleryStore = useGallery();
const isLoading = computed(() => galleryStore.isLoading);
const gallery = computed(() => galleryStore.getGallery);

const route = useRoute();

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  // open a new tab with the image
  window.open(`https://softgenie.org${image}`, "_blank");
};

onMounted(async () => {
  const galleryId = route.params._id;
  await galleryStore.getGalleryAction(galleryId);
});
</script>
