<template>
  <NuxtLayout name="default">
    <div class="gallery-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6">
      <Loader v-if="isLoading" />
      <div v-else>
        <div
          class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
        >
          <!-- Image Column -->
          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <img
              class="h-500 w-full object-cover"
              src="https://softgenie.org/media/images/generic/gallery.jpeg"
              alt="Ladakh lake"
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
              {{ gallery.title ? gallery.title : "Gallery Detail" }}
              </h2>
              <p class="text-sm text-secondary-dark mt-4">
                Posted on: {{ new Date(gallery.date_posted).toLocaleDateString() }}
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
      </div>
        <div v-if="gallery" class="bg-white p-4 rounded shadow-lg mt-4">
          <div v-html="gallery.description"></div>
          <div v-if="gallery.images && gallery.images.length">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div v-for="item in gallery.images" :key="item.id" class="my-2">
                <img
                  @click="viewImageInFullSize(item)"
                  :src="getFullImageUrl(item.image)"
                  alt="Gallery Image"
                  class="w-full h-auto rounded"
                />
                <div class="flex items-center justify-between mt-4">
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
  title: "My Portfolio - Gallery Detail",
  description: "Collection of my works",
});

const isOpen = ref(false);
const selectedImage = ref(null);
const galleryStore = useGallery();
const isLoading = computed(() => galleryStore.isLoading);
const gallery = computed(() => galleryStore.getGallery);
const visibleRef = ref(false);
const indexRef = ref(0);
const imgs = computed(() =>
  gallery && gallery.value && gallery.value.images.map((image) => ({
    src: getFullImageUrl(image.image),
    caption: image.caption,
  }))
);

const route = useRoute();

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);

const getFullImageUrl = (image) => {
  return `https://softgenie.org${image}`;
};

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};

const prevImage = () => {
  // get the index of the current image
  const currentIndex = gallery.value.images.findIndex(
    (image) => image.image === selectedImage.value
  );
  // get the previous image
  const prevImage =
    currentIndex > 0
      ? gallery.value.images[currentIndex - 1]
      : gallery.value.images[gallery.value.images.length - 1];
  selectedImage.value = prevImage;
};

const nextImage = () => {
  // get the index of the current image
  const currentIndex = gallery.value.images.findIndex(
    (image) => image.image === selectedImage.value
  );
  // get the next image
  const nextImage =
    currentIndex < gallery.value.images.length - 1
      ? gallery.value.images[currentIndex + 1]
      : gallery.value.images[0];
  selectedImage.value = nextImage;
};

const viewImageInFullSize = (image) => {
  selectedImage.value = image;
  openModal();
  // window.open(`https://softgenie.org${image}`, "_blank");
};

onMounted(async () => {
  const galleryId = route.params._id;
  await galleryStore.getGalleryAction(galleryId);
});
</script>