<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
        Blog
      </h1>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="blogs.results && blogs.results.length">
          <div
            v-for="blog in blogs.results"
            :key="blog.id"
            class="card my-4 p-4 border rounded shadow"
          >
            <div v-if="blog.tags && blog.tags.length" class="my-4">
              <span v-for="tag in blog.tags" :key="tag" class="inline-block bg-gray-200 text-gray-700 font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg">
                {{ tag.name }}
              </span>
            </div>
            <h2 class="text-2xl font-bold">{{ blog.title }}</h2>
            <div v-html="blog.content"></div>

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
            <button
              @click="goToDetail(blog)"
              class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-green-200 mt-4"
            >
              View Details
            </button>
          </div>
        </div>
        <div v-else>
          <p>No blogs available.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Blog",
  description: "Place of my thoughts",
});

const blogStore = useBlog();
const isLoading = computed(() => blogStore.isLoading);
const blogs = computed(() => blogStore.getBlogList);

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  // open a new tab with the image
  window.open(`https://softgenie.org${image}`, "_blank");
};

const goToDetail = async (blog) => {
  await navigateTo(`/blog/${blog.id}`);
};

onMounted(() => {
  blogStore.getBlogsAction();
});
</script>
