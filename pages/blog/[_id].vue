<template>
  <NuxtLayout name="default">
    <div class="bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <div v-if="blog" class="container mx-auto bg-white px-4 py-6 rounded shadow-lg">
        <h1 class="text-3xl font-bold mb-6 mt-3">
          {{ blog.title }}
        </h1>
        <div class="mb-4 flex flex-wrap gap-2">
          <span
            v-for="(tag, index) in blog.tags"
            :key="index"
            class="bg-primary text-black px-3 py-1 rounded-full text-sm shadow"
          >
            {{ tag.name }}
          </span>
        </div>
        <div v-if="isClient">
          <p v-html="blog.content" class="text-black"></p>
        </div>
      </div>
      <div v-else-if="pending">
        <Loader />
      </div>
      <div v-else-if="error">
        <p>Error loading blog. Please try again later.</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useAsyncData, useSeoMeta } from "#imports";

const route = useRoute();
const isClient = ref(false);
const blogId = ref(route.params._id);

const {
  data: blog,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "blog",
  async () => {
    try {
      const response = await $fetch(
        `https://softgenie.org/api/blogs/${blogId.value}`
      );
      return response;
    } catch (err) {
      console.error("Error fetching blog:", err);
      throw err;
    }
  },
  {
    key: () => `blog-${blogId.value}`,
  }
);

if (blog.value) {
  useSeoMeta({
    title: `${blog.value.title} - Blog Details`,
    description:
      blog.value.meta_description ||
      "Read the blog post and explore its details.",
  });
}

onMounted(() => {
  isClient.value = true;
});
</script>

<style scoped>
/* Add any blog-specific styles here */
</style>
