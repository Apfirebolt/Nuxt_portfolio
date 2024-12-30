<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
          {{ blog.title ? blog.title : "Blog Detail" }}
        </h1>
        <div v-if="blog">
          <div v-if="blog.tags && blog.tags.length" class="my-4">
            <span v-for="tag in blog.tags" :key="tag" class="inline-block bg-gray-200 text-gray-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {{ tag.name }}
            </span>
          </div>
          <p class="text-gray-500" v-html="blog.content"></p>
          <div v-if="blog.images && blog.images.length">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="item in blog.images" :key="item.id" class="my-2">
                <img
                  :src="getFullImageUrl(item.image)"
                  alt="Blog Image"
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
            Posted on: {{ new Date(blog.date_posted).toLocaleDateString() }}
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
  title: "My Portfolio - Blog Detail",
  description: "Place of my thoughts",
});

const blogStore = useBlog();
const isLoading = computed(() => blogStore.isLoading);
const blog = computed(() => blogStore.getBlog);

const route = useRoute();

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  // open a new tab with the image
  window.open(`https://softgenie.org${image}`, "_blank");
};

onMounted(async () => {
  const blogId = route.params._id;
  await blogStore.getBlogAction(blogId);
});
</script>
