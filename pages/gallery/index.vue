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
                GALLERY
              </h2>
              <p class="mt-4">
                Gallery section showcases the images I've captured while being part of various solo trips, group trips and other 
                gatherings. This section provides a closer look into my life in a visual way. You can view the details each post 
                by clicking on the "View Details" button. It would display details of the post including the images and the description.
              </p>
            </div>
            <!-- Close Text Wrapper -->
          </div>
          <!-- Close Text Column -->
      </div>
      <Loader v-if="isLoading" />
      <div v-else>
        <div v-if="gallery.results && gallery.results.length">
          <div
            v-for="item in gallery.results"
            :key="item.id"
            class="card my-4 p-4 border bg-secondary rounded shadow"
            :data-aos="randomAOSEffect()"
          >
            <div v-if="item.tags && item.tags.length" class="my-4">
              <span
                v-for="tag in item.tags"
                :key="tag.name"
                class="inline-block bg-gray-200 text-gray-700 font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"
              >
                {{ tag.name }}
              </span>
            </div>
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <div v-html="item.description"></div>
            <div v-if="item.images && item.images.length">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="image in item.images" :key="image.id" class="my-2">
                  <img
                    :src="getFullImageUrl(image.image)"
                    alt="Gallery Image"
                    class="w-full h-auto rounded"
                  />
                  <div class="flex items-center justify-between mt-4">
                    <span>
                      {{ image.caption }}
                    </span>
                    <button
                      @click="viewImageInFullSize(image.image)"
                      class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-blue-200"
                    >
                      View Full Size
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-400">
              Posted on: {{ new Date(item.date_posted).toLocaleDateString() }}
            </p>
            <button
              @click="goToDetail(item)"
              class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-semibold hover:bg-green-200 mt-4"
            >
              View Details
            </button>
          </div>
        </div>
        <div v-else>
          <p>No images available.</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, computed } from "vue";
import gsap from "gsap";

useHead({
  title: 'APGIIIT.com - My Gallery',
});

definePageMeta({
  layout: false,
  title: "My Portfolio - Gallery",
  description: "Showcase of my gallery",
});

const galleryStore = useGallery();
const isLoading = computed(() => galleryStore.isLoading);
const gallery = computed(() => galleryStore.getGalleryList);

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
  window.open(`https://softgenie.org${image}`, "_blank");
};

const goToDetail = async (gallery) => {
  await navigateTo(`/gallery/${gallery.id}`);
};

onMounted(() => {
  galleryStore.getGalleriesAction();
  gsap.from('.hero', {
    y: -100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
});
</script>
