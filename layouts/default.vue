<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>