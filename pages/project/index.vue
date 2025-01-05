<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <div
          class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
        >
          <!-- Image Column -->
          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              class="h-full w-full object-cover"
              src="https://picsum.photos/id/1018/2000"
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
                class="text-2xl font-medium uppercase text-green-800 lg:text-4xl"
              >
                PROJECTS
              </h2>
              <p class="mt-4">
                This section shows the projects I've worked on. You can view the
                details of each project by clicking on the "View Details"
                button. It would display details of the project including the
                images and the description plus the technologies used.
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
        </div>
        <div v-if="projects.results && projects.results.length">
          <div
            v-for="project in projects.results"
            :key="project.id"
            class="card my-4 p-4 border rounded shadow"
          >
            <div v-if="project.tags && project.tags.length" class="my-4">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                class="inline-block bg-gray-200 text-gray-700 font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"
              >
                {{ tag.name }}
              </span>
            </div>
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
              Posted on:
              {{ new Date(project.date_posted).toLocaleDateString() }}
            </p>
            <button
              @click="goToDetail(project)"
              class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-green-200 mt-4"
            >
              View Details
            </button>
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
import { onMounted, computed } from "vue";

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

const goToDetail = async (project) => {
  await navigateTo(`/project/${project.id}`);
};

onMounted(() => {
  projectStore.getProjectsAction();
});
</script>
