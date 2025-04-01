<template>
  <NuxtLayout name="default">
    <div class="bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <div v-if="blog && blog.images" class="container mx-auto bg-white px-4 py-6 rounded shadow-lg" data-aos="fade-left">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-3xl font-bold mb-6 mt-3">
            {{ blog.title }}
          </h1>
          <p>
            <span class="text-primary-dark font-semibold">Posted on:</span>
            {{ new Date(blog.date_posted).toLocaleDateString() }}
          </p>
        </div>

        <div class="my-3 flex flex-wrap items-center gap-2"> 
          <h3 class="bg-primary border-4 border-secondary px-2 py-1">Tags</h3>
          <ul v-if="blog.tags.length > 0" class="flex flex-wrap gap-2">
            <li v-for="(tag, index) in blog.tags" :key="index" class="bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2">
              {{ tag.name }}
            </li>
          </ul>
          <p v-else class="text-primary-dark">
            No tags available for this blog post.
          </p>
        </div>

        <div class="grid">
          <div class="grid-cols-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi?
            </p>
          </div>
          <div class="grid-cols-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi?
            </p>
          </div>
        </div>
        
        <div v-if="isClient" class="bg-white px-4 py-6">
          <p v-html="blog.content" class="text-white"></p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 my-6">
          <div v-for="(image, index) in blog.images" :key="index" class="card">
            <img
              :src="`https://softgenie.org${image.image}`"
              alt="Blog Image"
              class="w-full h-64 rounded shadow"
            />
          </div>
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
      "Explore the Blog images and details.",
  });
}

onMounted(() => {
  isClient.value = true;
});
</script>

<style scoped>
.gallery {
  display: grid;
  gap: 1rem;
}

.card img {
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
