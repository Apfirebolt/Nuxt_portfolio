<template>
    <footer>
        <div class="copyright text-center text-lg bg-violet-800 text-white py-2">
          © {{ CURRENT_YEAR }} - Amiibo Database App in Nuxt. All rights reserved.
        </div>
      </footer>
  </template>
  <script setup>
  //props
  const CURRENT_YEAR = new Date().getFullYear();
  </script>
  