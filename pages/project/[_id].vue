<template>
  <NuxtLayout name="default">
    <div class="bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <div v-if="project && project.images" class="container mx-auto bg-white px-4 py-6 rounded shadow-lg" data-aos="fade-left">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-3xl font-bold mb-6 mt-3">
            {{ project.title }}
          </h1>
          <p>
            <span class="text-primary-dark font-semibold">Posted on:</span>
            {{ new Date(project.date_posted).toLocaleDateString() }}
          </p>
        </div>

        <div class="my-3 flex flex-wrap items-center gap-2"> 
          <h3 class="bg-primary border-4 border-secondary px-2 py-1">Tags</h3>
          <ul v-if="project.tags.length > 0" class="flex flex-wrap gap-2">
            <li v-for="(tag, index) in project.tags" :key="index" class="bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2">
              {{ tag.name }}
            </li>
          </ul>
          <p v-else class="text-primary-dark">
            No tags available for this project.
          </p>
        </div>
        
        <div class="my-3 flex flex-wrap items-center gap-2"> 
          <h3 class="bg-primary border-4 border-secondary px-2 py-1">Technologies used</h3>
          <ul class="flex flex-wrap gap-2">
            <li v-for="(tech, index) in project.technology.split(',')" :key="index" class="bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2">
              {{ tech }}
            </li>
          </ul>
        </div>
        <div class="my-3 flex flex-wrap items-center gap-2"> 
          <h3 class="bg-primary border-4 border-secondary px-2 py-1">Project URL</h3>
          <span @click="goToProject(project)" class="bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2 hover:bg-danger transition-all duration-200 ease-linear hover:cursor-pointer">
            {{ project.project_link }}
          </span>
        </div>
        <div v-if="isClient">
          <p v-html="project.description" class="text-white"></p>
        </div>
        <div class="gallery grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(image, index) in project.images" :key="index" class="card">
            <img
              :src="`https://softgenie.org${image.image}`"
              alt="Project Image"
              class="w-full h-auto rounded shadow cursor-pointer"
              @click="openLightbox(index)"
            />
          </div>
        </div>
      </div>
      <div v-else-if="pending">
        <Loader />
      </div>
      <div v-else-if="error">
        <p>Error loading project. Please try again later.</p>
      </div>
      <transition name="lightbox-fade">
        <div
          v-if="showLightbox && isClient"
          class="lightbox fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <button @click="closeLightbox" class="absolute top-4 right-4 text-white text-3xl">&times;</button>
          <transition name="fade">
            <img
              v-if="showImage"
              :src="`https://softgenie.org${project.images[currentImageIndex].image}`"
              alt="Lightbox Image"
              class="max-w-full max-h-full"
            />
          </transition>

          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white flex gap-4">
            <button @click="prevImage" class="text-2xl">&lt;</button>
            <span>{{ currentImageIndex + 1 }} / {{ project.images.length }}</span>
            <button @click="nextImage" class="text-2xl">&gt;</button>
          </div>
        </div>
      </transition>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useAsyncData, useSeoMeta } from "#imports";

const route = useRoute();
const isClient = ref(false);
const projectId = ref(route.params._id);
const showLightbox = ref(false);
const currentImageIndex = ref(0);
const showImage = ref(true);

const goToProject = (project) => {
  // open link in new tab
  window.open(project.project_link, "_blank");
};

const {
  data: project,
  pending,
  error,
  refresh,
} = await useAsyncData(
  "project",
  async () => {
    try {
      const response = await $fetch(
        `https://softgenie.org/api/projects/${projectId.value}`
      );
      return response;
    } catch (err) {
      console.error("Error fetching project:", err);
      throw err;
    }
  },
  {
    key: () => `project-${projectId.value}`,
  }
);

if (project.value) {
  useSeoMeta({
    title: `${project.value.title} - Project Details`,
    description:
      project.value.meta_description ||
      "Explore the project images and details.",
  });
}

onMounted(() => {
  isClient.value = true;
});

const openLightbox = (index) => {
  currentImageIndex.value = index;
  showLightbox.value = true;
};

const closeLightbox = () => {
  showLightbox.value = false;
};

const nextImage = async () => {
  showImage.value = false;
  await nextTick();
  currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length;
  showImage.value = true;
};

const prevImage = async () => {
  showImage.value = false;
  await nextTick();
  currentImageIndex.value = (currentImageIndex.value - 1 + project.value.images.length) % project.value.images.length;
  showImage.value = true;
};
</script>

<style scoped>
.lightbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.lightbox-fade-enter,
.lightbox-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>