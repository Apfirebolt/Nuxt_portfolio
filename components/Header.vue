<template>
  <header class="sticky top-0 z-50 bg-[var(--color-primary)]/95 backdrop-blur-xl border-b border-[var(--color-primary-dark)]/15 transition-all duration-300 shadow-sm">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20"
      aria-label="Global"
    >
      <!-- Logo Brand -->
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center gap-3 group">
          <div class="p-1.5 rounded-xl bg-[var(--color-primary-dark)]/10 border border-[var(--color-primary-dark)]/20 group-hover:border-[var(--color-secondary-dark)] transition-colors">
            <img
              class="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="@/assets/logo.png"
              alt="APGIIIT.com"
            />
          </div>
          <span class="font-bold tracking-tight text-lg text-[var(--color-primary-dark)] hidden sm:inline-block">
            My<span class="text-[var(--color-secondary-dark)]"> Portfolio</span>
          </span>
        </NuxtLink>
      </div>

      <!-- Mobile Menu Trigger -->
      <div class="flex items-center gap-2 lg:hidden">
        <!-- Mobile Theme Selector Button -->
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl p-2.5 text-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/10 hover:bg-[var(--color-primary-dark)]/20 transition-all focus:outline-none"
          @click="toggleThemeDropdown"
          aria-label="Toggle theme selector"
        >
          <SunIcon class="h-5 w-5" />
        </button>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-xl p-2.5 text-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/10 hover:bg-[var(--color-primary-dark)]/20 transition-all focus:outline-none"
          aria-label="Open main menu"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Desktop Navigation Links (Pill Style) -->
      <div class="hidden lg:flex lg:items-center lg:gap-x-1 bg-[var(--color-primary-dark)]/10 p-1.5 rounded-full border border-[var(--color-primary-dark)]/20 shadow-inner">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          exact-active-class="bg-[var(--color-secondary-dark)] text-white shadow-sm font-bold"
          class="relative px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary-dark)] hover:text-[var(--color-secondary-dark)] transition-all duration-200 rounded-full"
        >
          {{ item.path }}
        </NuxtLink>
      </div>

      <!-- Desktop Right Controls (Theme Switcher & CTA) -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
        
        <!-- Theme Switcher Dropdown -->
        <div class="relative">
          <button
            @click="isThemeDropdownOpen = !isThemeDropdownOpen"
            class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[var(--color-primary-dark)]/10 border border-[var(--color-primary-dark)]/20 text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-dark)]/20 transition-all"
            aria-label="Change theme"
          >
            <SwatchIcon class="h-4 w-4 text-[var(--color-secondary-dark)]" />
            <span class="capitalize">{{ currentThemeName }}</span>
            <ChevronDownIcon class="h-3.5 w-3.5 opacity-70" />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="isThemeDropdownOpen"
            class="absolute right-0 mt-2 w-44 rounded-2xl bg-[var(--color-secondary)] border border-[var(--color-primary-dark)]/25 shadow-2xl py-2 z-50 backdrop-blur-xl"
          >
            <button
              v-for="t in themes"
              :key="t.id"
              @click="setTheme(t.id)"
              class="w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-dark)]/15 transition-colors flex items-center justify-between"
            >
              <span>{{ t.name }}</span>
              <span v-if="currentTheme === t.id" class="w-2 h-2 rounded-full bg-[var(--color-secondary-dark)]"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer Dialog -->
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
        <div v-show="mobileMenuOpen" class="fixed inset-0 bg-black/70 backdrop-blur-md" />
      </Transition>

      <div class="fixed inset-0 z-50 flex justify-end">
        <Transition
          name="slide-right"
          :css="false"
          appear
          @enter="onSlideEnter"
          @leave="onSlideLeave"
        >
          <DialogPanel
            v-show="mobileMenuOpen"
            class="relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto bg-[var(--color-primary)] px-6 py-6 shadow-2xl border-l border-[var(--color-primary-dark)]/20 text-[var(--color-primary-dark)]"
          >
            <div class="flex items-center justify-between border-b border-[var(--color-primary-dark)]/20 pb-5">
              <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center gap-2" @click="mobileMenuOpen = false">
                <img class="h-8 w-auto object-contain" src="@/assets/logo.png" alt="APGIIIT.com" />
              </NuxtLink>
              <button
                type="button"
                class="rounded-xl p-2.5 text-[var(--color-primary-dark)] bg-[var(--color-primary-dark)]/10 hover:bg-[var(--color-primary-dark)]/20 transition-colors"
                aria-label="Close menu"
                @click="mobileMenuOpen = false"
              >
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Mobile Theme Switcher Section -->
            <div class="mt-6 py-4 border-b border-[var(--color-primary-dark)]/20">
              <span class="text-xs font-bold uppercase tracking-widest opacity-80 mb-3 block">Select Theme</span>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="t in themes"
                  :key="t.id"
                  @click="setTheme(t.id)"
                  :class="[
                    currentTheme === t.id ? 'bg-[var(--color-secondary-dark)] text-white font-bold' : 'bg-[var(--color-primary-dark)]/10 text-[var(--color-primary-dark)]',
                    'px-3 py-2 rounded-xl text-xs uppercase tracking-wider text-center transition-all'
                  ]"
                >
                  {{ t.name }}
                </button>
              </div>
            </div>

            <div class="mt-6 flow-root">
              <div class="space-y-2">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="{ name: item.name }"
                  exact-active-class="bg-[var(--color-secondary-dark)] text-white font-bold shadow-sm"
                  class="flex items-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wider text-[var(--color-primary-dark)] transition-all duration-200 hover:bg-[var(--color-primary-dark)]/15"
                  @click="mobileMenuOpen = false"
                >
                  {{ item.path }}
                </NuxtLink>
              </div>
            </div>

            <div class="mt-auto pt-6 border-t border-[var(--color-primary-dark)]/20">
              <NuxtLink
                to="/contact"
                class="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white bg-[var(--color-secondary-dark)] rounded-xl hover:opacity-95 transition-all shadow-md"
                @click="mobileMenuOpen = false"
              >
                <span>Let's Talk</span>
                <span>&rarr;</span>
              </NuxtLink>
            </div>
          </DialogPanel>
        </Transition>
      </div>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bars3Icon, XMarkIcon, SunIcon, SwatchIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
import { Dialog, DialogPanel } from '@headlessui/vue';
import gsap from 'gsap';

const navigation = [
  { name: 'index', path: 'Home' },
  { name: 'about', path: 'About' },
  { name: 'gallery', path: 'Gallery' },
  { name: 'project', path: 'Project' },
  { name: 'blog', path: 'Blog' },
];

const themes = [
  { id: 'light', name: 'Light' },
  { id: 'dark', name: 'Dark' },
  { id: 'winter', name: 'Winter' },
  { id: 'summer', name: 'Summer' },
  { id: 'autumn', name: 'Autumn' },
];

const mobileMenuOpen = ref(false);
const isThemeDropdownOpen = ref(false);
const currentTheme = ref('light');
const currentThemeName = ref('Light');

const setTheme = (themeId) => {
  currentTheme.value = themeId;
  const found = themes.find(t => t.id === themeId);
  if (found) currentThemeName.value = found.name;

  if (process.client) {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme', themeId);
  }
  isThemeDropdownOpen.value = false;
  mobileMenuOpen.value = false;
};

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }
});

const toggleThemeDropdown = () => {
  isThemeDropdownOpen.value = !isThemeDropdownOpen.value;
};

const onFadeEnter = (el, done) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out', onComplete: done });
};
const onFadeLeave = (el, done) => {
  gsap.to(el, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: done });
};

const onSlideEnter = (el, done) => {
  gsap.fromTo(
    el,
    { xPercent: 100 },
    { xPercent: 0, duration: 0.4, ease: 'power3.out', onComplete: done }
  );
};
const onSlideLeave = (el, done) => {
  gsap.to(el, {
    xPercent: 100,
    duration: 0.3,
    ease: 'power3.in',
    onComplete: done
  });
};
</script>