<template>
  <NuxtLayout name="default">
    <div class="homepage-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
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
                BLOG
              </h2>
              <p class="mt-4">
                Blog section showcases the articles I've written on various topics. This section provides a closer look into my thoughts in a textual way. 
                You can view the details each post by clicking on the "View Details" button. It would display details of the post including the images and the description.
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
      </div>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="blogs.results && blogs.results.length">
          <div
            v-for="blog in blogs.results"
            :key="blog.id"
            class="card my-4 p-4 border rounded bg-secondary shadow"
            :data-aos="randomAOSEffect()"
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
import gsap from "gsap";

useHead({
  title: 'APGIIIT.com - My Blog',
});

definePageMeta({
  layout: false,
  title: "My Portfolio - Blog",
  description: "Place of my thoughts",
});

const blogStore = useBlog();
const isLoading = computed(() => blogStore.isLoading);
const blogs = computed(() => blogStore.getBlogList);

const randomAOSEffect = () => {
  // return a random aos effect
  const effectList = [
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
    "flip-up",
    "flip-down",
    "flip-left",
    "flip-right",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-out",
  ];
  return effectList[Math.floor(Math.random() * effectList.length)];
};

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
  gsap.from('.hero', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
});
</script>
