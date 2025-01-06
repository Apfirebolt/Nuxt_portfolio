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
                  @click="viewImageInFullSize(item)"
                  :src="getFullImageUrl(item.image)"
                  alt="Blog Image"
                  class="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  <div class="mt-2">
                    <div class="mt-4 flex justify-between">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-secondary-dark p-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-2"
                        @click="prevImage"
                      >
                        <ChevronLeftIcon class="h-5 w-5" />
                      </button>
                      <p class="text-lg text-secondary-dark">
                        {{ selectedImage.caption }}
                      </p>
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-secondary-dark p-2 text-sm font-medium text-primary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="nextImage"
                      >
                        <ChevronRightIcon class="h-5 w-5" />
                      </button>
                    </div>
                    <img
                      v-if="selectedImage"
                      :src="getFullImageUrl(selectedImage.image)"
                      alt="Selected Image"
                      class="w-full h-auto rounded mt-4"
                    />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

definePageMeta({
  layout: false,
  title: "My Portfolio - Blog Detail",
  description: "Place of my thoughts",
});

const isOpen = ref(false);
const selectedImage = ref(null);
const blogStore = useBlog();
const isLoading = computed(() => blogStore.isLoading);
const blog = computed(() => blogStore.getBlog);

const route = useRoute();

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

const prevImage = () => {
  // get the index of the current image
  const currentIndex = blog.value.images.findIndex(
    (image) => image.image === selectedImage.value
  );
  // get the previous image
  const prevImage =
    currentIndex > 0
      ? blog.value.images[currentIndex - 1]
      : blog.value.images[blog.value.images.length - 1];
  selectedImage.value = prevImage;
};

const nextImage = () => {
  // get the index of the current image
  const currentIndex = blog.value.images.findIndex(
    (image) => image.image === selectedImage.value
  );
  // get the next image
  const nextImage =
    currentIndex < blog.value.images.length - 1
      ? blog.value.images[currentIndex + 1]
      : blog.value.images[0];
  selectedImage.value = nextImage;
};

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const viewImageInFullSize = (image) => {
  selectedImage.value = image;
  openModal();
  // window.open(`https://softgenie.org${image}`, "_blank");
};

onMounted(async () => {
  const blogId = route.params._id;
  await blogStore.getBlogAction(blogId);
});
</script>
