<template>
  <div class="flex justify-center items-center h-full my-8">
    <div class="loader ease-linear rounded-full border-8 text-secondary border-t-8 h-24 w-24"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Loader',
});
</script>

<style>
.loader {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
  margin-top: 20px;
  margin-bottom: 20px;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
