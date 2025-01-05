<template>
  <NuxtLayout name="default">
    <div 
      class="homepage-content py-4 px-6 h-screen bg-cover bg-center" 
      style="background-image: url('https://media.istockphoto.com/id/1279106704/photo/defocused-illuminated-background.jpg?s=1024x1024&w=is&k=20&c=aSUZCDSGibPQVr7cYnErvniXDAMVis1qkMG12y9NkfM=');"
    >
      <div
        class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"
      >
        <!-- Image Column -->
        <div class="w-full lg:w-1/2">
          <img
            class="h-400 w-full object-cover"
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
            {{ typeText }}
            </h2>
            <p class="mt-4">
              This is the homepage of my portfolio. I am a web developer and I love
              building web applications. I have experience in building web
              applications using various technologies like Vue.js, Nuxt.js, React.js,
              Node.js, Express.js, and MongoDB.
            </p>
            <p class="mt-4">
              I have also worked on projects that involve building RESTful APIs,
              GraphQL APIs, and serverless applications using AWS Lambda and API
              Gateway. I have experience in building web applications that are
              responsive and accessible.
            </p>

            <div class="search-box my-4">
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search blogs..."
                class="border rounded py-2 px-4 w-full"
              />
            </div>
          </div>
          <!-- Close Text Wrapper -->
        </div>
        <!-- Close Text Column -->
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import { gsap } from 'gsap';

// apply slide in left on hero class using gsap
onMounted(() => {
  gsap.from('.hero', {
    x: 100,
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power4.out',
  });
});

definePageMeta({
  layout: false,
  title: "My Portfolio",
  description: "This is the homepage of my portfolio",
});

const typeText = ref("");
const searchQuery = ref("");

const typeWriterEffect = () => {
  const text = "Welcome to the Portfolio";
  let index = 1;
  typeText.value = "W"; // Initialize typeText to an empty string
  let timer = setInterval(() => {
    if (index < text.length) {
      typeText.value += text[index];
      index++;
    } else {
      clearInterval(timer);
      setTimeout(typeWriterEffect, 1000); // Restart the effect after 1 second
    }
  }, 100);
}

onMounted(() => {
  typeWriterEffect();
});
</script>