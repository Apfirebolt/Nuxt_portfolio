<template>
  <NuxtLayout name="default">
    <div class="homepage-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <div
          class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
        >
          <!-- Image Column -->
          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              class="h-500 w-full object-cover"
              src="https://softgenie.org/media/images/generic/my_blog.jpeg"
              alt="Winding mountain road"
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
              {{ blog.title ? blog.title : "Blog Detail" }}
              </h2>
              <div v-if="blog.tags && blog.tags.length" class="my-4">
                <span v-for="tag in blog.tags" :key="tag" class="inline-block bg-primary text-primary-dark font-semibold mr-2 px-2.5 py-1 shadow-md rounded">
                  {{ tag.name }}
                </span>
              </div>
              <p class="text-secondary-dark">
                Posted on: {{ new Date(blog.date_posted).toLocaleDateString() }}
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
      </div>
        <div v-if="blog" class="bg-white p-4 rounded shadow-lg mt-4">
          
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
