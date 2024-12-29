<template>
    <NuxtLayout name="default">
      <div class="homepage-content py-4 px-6">
        <h1 class="text-3xl semi-bold text-gray-600 my-3">
          Welcome to Project Page
        </h1>
  
        {{ blogs }}
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
  const blogs = computed(() => blogStore.getBlogList);
  
  onMounted(() => {
    blogStore.getBlogsAction();
  });
  </script>