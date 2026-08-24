<template>
  <header class="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center gap-2 group">
          <img
            class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="@/assets/logo.png"
            alt="APGIIIT.com"
          />
        </NuxtLink>
      </div>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg p-2 text-neutral-900 hover:bg-black/10 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-900/40"
          aria-label="Open main menu"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div class="hidden lg:flex lg:items-center lg:gap-x-8">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          class="relative text-sm font-semibold uppercase tracking-wider text-neutral-800 transition-colors duration-200 hover:text-neutral-950 group py-1"
        >
          {{ item.path }}
          <span
            class="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-900 scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
          />
        </NuxtLink>
      </div>
    </nav>

    <Dialog
      as="div"
      class="relative z-50 lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <Transition
        name="fade"
        :css="false"
        appear
        @enter="onFadeEnter"
        @leave="onFadeLeave"
      >
        <div v-show="mobileMenuOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      </Transition>

      <div class="fixed inset-0 z-50 flex">
        <Transition
          name="slide-left"
          :css="false"
          appear
          @enter="onSlideEnter"
          @leave="onSlideLeave"
        >
          <DialogPanel
            v-show="mobileMenuOpen"
            class="relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto bg-primary px-6 py-6 shadow-2xl border-r border-black/10"
          >
            <div class="flex items-center justify-between border-b border-black/10 pb-4">
              <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                <img class="h-8 w-auto object-contain" src="@/assets/logo.png" alt="APGIIIT.com" />
              </NuxtLink>
              <button
                type="button"
                class="rounded-lg p-2 text-neutral-800 hover:bg-black/10 hover:text-neutral-950 transition-colors"
                aria-label="Close menu"
                @click="mobileMenuOpen = false"
              >
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div class="mt-6 flow-root">
              <div class="space-y-1">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-200 hover:bg-black/10 hover:text-neutral-950 hover:translate-x-1"
                  @click="mobileMenuOpen = false"
                >
                  {{ item.path }}
                </NuxtLink>
              </div>
            </div>
          </DialogPanel>
        </Transition>
      </div>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { Dialog, DialogPanel } from '@headlessui/vue';
import gsap from 'gsap';

const navigation = [
  { name: 'index', path: 'Home' },
  { name: 'about', path: 'About' },
  { name: 'gallery', path: 'Gallery' },
  { name: 'project', path: 'Project' },
  { name: 'blog', path: 'Blog' },
];

const mobileMenuOpen = ref(false);

const onFadeEnter = (el, done) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out', onComplete: done });
};
const onFadeLeave = (el, done) => {
  gsap.to(el, { opacity: 0, duration: 0.2, ease: 'power2.in', onComplete: done });
};

const onSlideEnter = (el, done) => {
  gsap.fromTo(
    el,
    { xPercent: -100 },
    { xPercent: 0, duration: 0.35, ease: 'power3.out', onComplete: done }
  );
};
const onSlideLeave = (el, done) => {
  gsap.to(el, {
    xPercent: -100,
    duration: 0.25,
    ease: 'power3.in',
    onComplete: done
  });
};
</script>