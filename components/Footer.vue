<template>
  <footer class="bg-[var(--color-primary)] border-t border-[var(--color-primary-dark)]/15 text-[var(--color-primary-dark)] transition-colors duration-300">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      
      <!-- Top Section: Grid (Info & Contact Form) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-primary-dark)]/15">
        
        <!-- Brand & Bio (4 Columns) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-xl bg-[var(--color-primary-dark)]/10 border border-[var(--color-primary-dark)]/20">
              <span class="text-xl font-bold tracking-tight text-[var(--color-primary-dark)]">APGIIIT</span>
            </div>
          </div>
          <p class="text-sm leading-relaxed opacity-85">
            Personal portfolio showcasing my work in Software Engineering, my travels and my blog posts.
          </p>

          <!-- Quick Navigation Links -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Quick Navigation</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="item in navigation" :key="item.name">
                <NuxtLink
                  :to="{ name: item.name }"
                  class="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[var(--color-primary-dark)]/5 border border-[var(--color-primary-dark)]/10 hover:bg-[var(--color-secondary-dark)] hover:text-white transition-all"
                >
                  {{ item.path }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Social Connect Icons -->
          <div>
            <h3 class="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">Connect</h3>
            <div class="flex items-center gap-3">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-primary-dark)]/15 bg-[var(--color-primary-dark)]/10 text-[var(--color-primary-dark)] transition-all duration-200 hover:bg-[var(--color-secondary-dark)] hover:text-white hover:scale-105 shadow-xs"
                :aria-label="social.name"
              >
                <svg class="h-4 w-4 fill-current transition-colors" viewBox="0 0 24 24">
                  <path :d="social.path" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form Box (7 Columns) -->
        <div class="lg:col-span-7 bg-[var(--color-primary-dark)]/5 border border-[var(--color-primary-dark)]/15 p-6 sm:p-8 rounded-3xl shadow-sm">
          <div class="mb-6">
            <h3 class="text-lg font-bold tracking-tight">Connect with me</h3>
            <p class="text-xs opacity-75 mt-1">Send a direct message and I'll get back to you shortly.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name Field -->
              <div>
                <label for="footer-name" class="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">Your Name</label>
                <input
                  type="text"
                  id="footer-name"
                  v-model="form.name"
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-2.5 rounded-xl bg-[var(--color-primary)] border border-[var(--color-primary-dark)]/20 text-sm focus:outline-none focus:border-[var(--color-secondary-dark)] transition-colors"
                />
              </div>

              <!-- Email Field -->
              <div>
                <label for="footer-email" class="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">Your Email</label>
                <input
                  type="email"
                  id="footer-email"
                  v-model="form.email"
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-[var(--color-primary)] border border-[var(--color-primary-dark)]/20 text-sm focus:outline-none focus:border-[var(--color-secondary-dark)] transition-colors"
                />
              </div>
            </div>

            <!-- Message Field -->
            <div>
              <label for="footer-message" class="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">Your Message</label>
              <textarea
                id="footer-message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Type your message..."
                class="w-full px-4 py-2.5 rounded-xl bg-[var(--color-primary)] border border-[var(--color-primary-dark)]/20 text-sm focus:outline-none focus:border-[var(--color-secondary-dark)] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit Button & Status -->
            <div class="flex items-center justify-between pt-2">
              <span v-if="successMessage" class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                {{ successMessage }}
              </span>
              <span v-else class="text-xs opacity-60">Prayagraj, UP, India</span>

              <button
                type="submit"
                class="px-6 py-2.5 bg-[var(--color-secondary-dark)] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-md cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>

      <!-- Bottom Copyright Bar -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs opacity-75">
        <p>&copy; <ClientOnly>{{ currentYear }}</ClientOnly> APGIIIT.com. All rights reserved.</p>
        <p>Designed & Built with Nuxt & Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(2026);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});

const navigation = [
  { name: "index", path: "Home" },
  { name: "about", path: "About" },
  { name: "gallery", path: "Gallery" },
  { name: "project", path: "Project" },
  { name: "blog", path: "Blog" },
];

const form = ref({
  name: '',
  email: '',
  message: ''
});

const successMessage = ref('');

const handleSubmit = () => {
  successMessage.value = 'Thank you! Your message has been sent.';
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';

  setTimeout(() => {
    successMessage.value = '';
  }, 5000);
};

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    path: 'M19.615 3.184c-1.2-.8-4.2-1.184-7.615-1.184s-6.415.384-7.615 1.184c-1.2.8-2.385 2.8-2.385 5.816v5.984c0 3.016 1.185 5.016 2.385 5.816 1.2.8 4.2 1.184 7.615 1.184s6.415-.384 7.615-1.184c1.2-.8 2.385-2.8 2.385-5.816v-5.984c0-3.016-1.185-5.016-2.385-5.816zm-9.615 12.816v-8l6 4-6 4z'
  }
];
</script>