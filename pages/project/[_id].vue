<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
          {{ project.title ? project.title : "Project Detail" }}
        </h1>
        <div v-if="project">
          <h2 class="text-2xl font-bold">{{ project.name }}</h2>
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

onMounted(async () => {
  const projectId = route.params._id;
  await projectStore.getProjectAction(projectId);
});
</script>
