<template>
    <NuxtLayout name="dashboard">
      <div class="min-h-full bg-neutral-100 py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-secondary">
            About
          </h2>
          <p>
            This is the about page of my Portfolio
          </p>
        </div>
      </div>
    </NuxtLayout>
  </template>
  <script setup>
  
  // definePageMeta
  definePageMeta({
    layout: "dashboard",
    middleware: 'auth',
    title: "about",
    description: "About page of my portfolio",
  });

  </script>
  