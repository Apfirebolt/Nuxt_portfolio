<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
        Projects
      </h1>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="projects.results && projects.results.length">
          <div
            v-for="project in projects.results"
            :key="project.id"
            class="card my-4 p-4 border rounded shadow"
          >
            <h2 class="text-2xl font-bold">{{ project.title }}</h2>
            <p class="text-gray-500" v-html="project.description"></p>

            <div v-if="project.images && project.images.length">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="item in project.images" :key="item.id" class="my-2">
                  <img
                    :src="getFullImageUrl(item.image)"
                    alt="Project Image"
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
              Posted on: {{ new Date(project.date_posted).toLocaleDateString() }}
            </p>
          </div>
        </div>
        <div v-else>
          <p>No projects available.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Projects",
  description: "Showcase of my work",
});

const projectStore = useProject();
const isLoading = computed(() => projectStore.isLoading);
const projects = computed(() => projectStore.getProjectList);

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  // open a new tab with the image
  window.open(`https://softgenie.org${image}`, "_blank");
};

onMounted(() => {
  projectStore.getProjectsAction();
});
</script>
