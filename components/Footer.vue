<template>
  <footer class="bg-primary/95 border-t border-black/10 text-neutral-900">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold tracking-tight text-neutral-950">APGIIIT</span>
          </div>
          <p class="text-sm leading-relaxed text-neutral-700">
            Personal portfolio showcasing creative design, full-stack projects, and technical writings.
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Navigation</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink
                :to="{ name: item.name }"
                class="font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
              >
                {{ item.path }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Contact</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li class="flex items-start gap-2">
              <span class="font-medium text-neutral-700">Prayagraj, Uttar Pradesh, India</span>
            </li>
            <li>
              <a
                href="mailto:aspper20@gmail.com"
                class="font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
              >
                aspper20@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Connect</h3>
          <div class="mt-4 flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950"
              aria-label="GitHub"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950"
              aria-label="LinkedIn"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950"
              aria-label="YouTube"
            >
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-1.2-.8-4.2-1.184-7.615-1.184s-6.415.384-7.615 1.184c-1.2.8-2.385 2.8-2.385 5.816v5.984c0 3.016 1.185 5.016 2.385 5.816 1.2.8 4.2 1.184 7.615 1.184s6.415-.384 7.615-1.184c1.2-.8 2.385-2.8 2.385-5.816v-5.984c0-3.016-1.185-5.016-2.385-5.816zm-9.615 12.816v-8l6 4-6 4z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950"
              aria-label="Twitter"
            >
              <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row text-xs text-neutral-600">
        <p>&copy; {{ CURRENT_YEAR }} APGIIIT.com. All rights reserved.</p>
        <div class="flex space-x-6">
          <NuxtLink to="/" class="transition-colors duration-200 hover:text-neutral-950">Home</NuxtLink>
          <NuxtLink :to="{ name: 'about' }" class="transition-colors duration-200 hover:text-neutral-950">About</NuxtLink>
          <NuxtLink :to="{ name: 'project' }" class="transition-colors duration-200 hover:text-neutral-950">Projects</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const CURRENT_YEAR = new Date().getFullYear();

const navigation = [
  { name: "index", path: "Home", current: false },
  { name: "about", path: "About", current: false },
  { name: "gallery", path: "Gallery", current: false },
  { name: "project", path: "Project", current: false },
  { name: "blog", path: "Blog", current: false },
];
</script>