<template>
  <NuxtLayout name="default">
    <div class="gallery-content py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
          {{ gallery.title ? gallery.title : "Gallery Detail" }}
        </h1>
        <div v-if="gallery">
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
          <p class="text-sm text-gray-400">
            Posted on: {{ new Date(gallery.date_posted).toLocaleDateString() }}
          </p>
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
