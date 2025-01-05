<template>
  <NuxtLayout name="default">
    <div 
      class="homepage-content py-4 px-6 h-screen bg-cover bg-center" 
      style="background-image: url('https://media.istockphoto.com/id/1279106704/photo/defocused-illuminated-background.jpg?s=1024x1024&w=is&k=20&c=aSUZCDSGibPQVr7cYnErvniXDAMVis1qkMG12y9NkfM=');"
    >
      <h1 class="text-3xl semi-bold text-center text-gray-600 my-3">
      {{ typeText }}
      </h1>

      <p class="text-white">
      This is the homepage of my portfolio. I am a web developer and I love
      building web applications. I have experience in building web
      applications using various technologies like Vue.js, Nuxt.js, React.js,
      Node.js, Express.js, and MongoDB.
      </p>
      
      <p class="text-white">
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
  </NuxtLayout>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";

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