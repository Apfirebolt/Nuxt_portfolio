<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-gray-600 my-3">
        Welcome to Blog Page
      </h1>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="blogs.results && blogs.results.length">
          <div
            v-for="blog in blogs.results"
            :key="blog.id"
            class="card my-4 p-4 border rounded shadow"
          >
            <h2 class="text-2xl font-bold">{{ blog.title }}</h2>
            <p class="text-gray-500" v-html="blog.content"></p>
            <p class="text-sm text-gray-400">
              Posted on: {{ new Date(blog.date_posted).toLocaleDateString() }}
            </p>
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
  title: "My Portfolio",
  description: "This is the homepage of my portfolio",
});

const blogStore = useBlog();
const isLoading = computed(() => blogStore.isLoading);
const blogs = computed(() => blogStore.getBlogList);

onMounted(() => {
  blogStore.getBlogsAction();
});
</script>
