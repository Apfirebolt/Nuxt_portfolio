<template>
  <NuxtLayout name="default">
    <div
      class="homepage-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6"
    >
      <Loader v-if="isLoading" />
      <div v-else>
        <div
          class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
        >
          <!-- Image Column -->
          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              class="h-full w-full object-cover"
              src="@/assets/laptop.jpg"
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
                class="text-2xl font-medium uppercase text-secondary-dark lg:text-3xl"
              >
                {{ project.title ? project.title : "Project Detail" }}
              </h2>
              <div v-if="technologies.length" class="my-4">
                <span
                  v-for="tech in technologies"
                  :key="tech"
                  class="inline-block bg-primary text-primary-dark font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"
                >
                  {{ tech }}
                </span>
                <p class="text-secondary-dark mt-4">
                  Posted on:
                  {{ new Date(project.date_posted).toLocaleDateString() }}
                </p>
                <div v-if="project.project_link" class="mt-4">
                  <a
                    :href="project.project_link"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                  >
                    {{ project.project_link }}
                  </a>
                </div>
              </div>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
        </div>
        <div v-if="project">
          <div v-html="project.description"></div>

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
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Project Detail",
  description: "Details of my project",
});

const projectStore = useProject();
const isLoading = computed(() => projectStore.isLoading);
const project = computed(() => projectStore.getProject);

const route = useRoute();

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  window.open(`https://softgenie.org${image}`, "_blank");
};

const technologies = computed(() => {
  return project.value && project.value.technology
    ? project.value.technology.split(",")
    : [];
});

onMounted(async () => {
  const projectId = route.params._id;
  await projectStore.getProjectAction(projectId);
});
</script>
