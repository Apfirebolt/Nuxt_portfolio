<template>
  <header class="bg-primary">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-4 px-2"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="w-auto brand-logo"
            src="@/assets/logo.png"
            alt="APGIIIT.com"
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          class="font-semibold uppercase text-secondary-dark text-lg tracking-wider transition duration-300 ease-in-out transform hover:text-primary-dark hover:scale-105"
        >
          {{ item.path }}
        </nuxt-link>
      </PopoverGroup>
    </nav>

    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <Transition
          name="fade"
          @enter="onFadeEnter"
          @leave="onFadeLeave"
          :css="false" appear>
          <div v-show="mobileMenuOpen" class="fixed inset-0 z-10 bg-gray-900/50" />
      </Transition>

      <Transition
        name="slide-left"
        @enter="onSlideEnter"
        @leave="onSlideLeave" :css="false" appear>
        <DialogPanel
           v-show="mobileMenuOpen"
           class="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Apgiiit.com</span>
              <img class="h-12 w-32 mx-auto" src="@/assets/logo.png" alt="APGIIIT.com" />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false" >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <nuxt-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileMenuOpen = false" class="-mx-3 block text-center rounded-lg px-3 py-2 text-base/7 font-semibold text-secondary-dark bg-neutral-100 shadow-lg hover:bg-secondary transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {{ item.path }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Transition>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/vue";
import gsap from "gsap";

const navigation = [
  { name: "index", path: "Home", current: false },
  { name: "about", path: "About", current: false },
  { name: "gallery", path: "Gallery", current: false },
  { name: "project", path: "Project", current: false },
  { name: "blog", path: "Blog", current: false },
];

const mobileMenuOpen = ref(false);

// Backdrop Fade In/Out
const onFadeEnter = (el, done) => {
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, onComplete: done });
};
const onFadeLeave = (el, done) => {
    gsap.to(el, { opacity: 0, duration: 0.2, onComplete: done });
};


// Dialog Panel Slide In (from LEFT)
const onSlideEnter = (el, done) => {
  gsap.set(el, { x: '-100%' }); // Set initial position off-screen left
  gsap.to(el, {
    x: 0, // Animate to final position (on-screen)
    duration: 0.4,
    ease: 'power3.out',
    onComplete: done
  });
};

// Dialog Panel Slide Out (to LEFT) - <<< THIS HANDLES CLOSING
const onSlideLeave = (el, done) => {
  gsap.to(el, {
    x: '-100%', // Animate back off-screen left
    duration: 0.3, // Adjust timing for closing feel
    ease: 'power3.in', // Adjust easing for closing feel
    onComplete: done
  });
};

</script>

<style scoped>
.brand-logo {
  height: 40px;
}
</style>