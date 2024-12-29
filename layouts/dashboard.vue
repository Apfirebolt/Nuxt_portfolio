<template>
  <div>
    <Header />
    <div class="bg-gray-800 text-white py-20">
      <div class="container mx-auto px-6">
        <h1 class="text-4xl font-bold mb-4">Welcome to the Dashboard</h1>
        <p class="text-lg mb-8">
          Manage your data efficiently and effectively.
        </p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </button>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
