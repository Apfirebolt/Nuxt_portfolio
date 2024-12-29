<template>
  <NuxtLayout name="default">
    <div class="homepage-content py-4 px-6">
      <h1 class="text-3xl semi-bold text-gray-600 my-3">
        Welcome to the Portfolio
      </h1>
    </div>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  layout: false,
  title: "My Portfolio",
  description: "This is the homepage of my portfolio",
});
</script>
