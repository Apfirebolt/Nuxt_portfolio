<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-gray-600 my-3">
        Welcome to About Page
      </h1>

      <div class="card my-4 p-4 border rounded shadow">
        <h2 class="text-2xl font-bold">About Me</h2>
        <p class="text-gray-500">
          I am a full-stack developer with 5 years of experience in building
          web applications. I have worked with various technologies like
          JavaScript, Node.js, Vue.js, React, and Python. I have also worked
          with various databases like MySQL, MongoDB, and PostgreSQL.
        </p>
        <p class="text-sm text-gray-400">
          Posted on: {{ new Date().toLocaleDateString() }}
        </p>
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
</script>