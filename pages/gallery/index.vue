<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">Gallery</h1>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="gallery.results && gallery.results.length">
          <div
            v-for="item in gallery.results"
            :key="item.id"
            class="card my-4 p-4 border rounded shadow"
          >
            <div v-if="item.tags && item.tags.length" class="my-4">
              <span
                v-for="tag in item.tags"
                :key="tag.name"
                class="inline-block bg-gray-200 text-gray-700 font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"
              >
                {{ tag.name }}
              </span>
            </div>
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <div v-html="item.description"></div>
            <div v-if="item.images && item.images.length">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="image in item.images" :key="image.id" class="my-2">
                  <img
                    :src="getFullImageUrl(image.image)"
                    alt="Gallery Image"
                    class="w-full h-auto rounded"
                  />
                  <div class="flex items-center justify-between mt-4">
                    <span>
                      {{ image.caption }}
                    </span>
                    <button
                      @click="viewImageInFullSize(image.image)"
                      class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-blue-200"
                    >
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-400">
              Posted on: {{ new Date(item.date_posted).toLocaleDateString() }}
            </p>
            <button
              @click="goToDetail(item)"
              class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-green-200 mt-4"
            >
              View Details
            </button>
          </div>
        </div>
        <div v-else>
          <p>No images available.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Gallery",
  description: "Showcase of my gallery",
});

const galleryStore = useGallery();
const isLoading = computed(() => galleryStore.isLoading);
const gallery = computed(() => galleryStore.getGalleryList);

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  window.open(`https://softgenie.org${image}`, "_blank");
};

const goToDetail = async (gallery) => {
  await navigateTo(`/gallery/${gallery.id}`);
};

onMounted(() => {
  galleryStore.getGalleriesAction();
});
</script>
