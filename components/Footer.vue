<template>
  <footer class="bg-primary text-primary-dark">
  <div class="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
    <div class="p-5 sm:w-2/12 border-r">
        <div class="text-sm uppercase text-indigo-600 font-bold">Menu</div>
        <ul>
        <li v-for="item in navigation" :key="item.name" class="my-2">
            <a class="hover:text-indigo-600" :href="`/${item.name}`">{{ item.path }}</a>
        </li>
        </ul>
    </div>
    
    <div class="p-5 sm:w-6/12 border-r">
        <div class="text-sm uppercase text-indigo-600 font-bold">Contact Me</div>
        <ul>
          <li class="my-2">
            <a class="hover:text-indigo-600" href="#">Prayagraj/Allahabad, Uttar Pradesh, India</a>
          </li>
          <li class="my-2">
            <a class="hover:text-indigo-600" href="#">aspper20@gmail.com</a>
          </li>
        </ul>
    </div>

    <div class="p-5 sm:w-4/12">
        <div class="text-sm uppercase text-indigo-600 font-bold">Follow Me</div>
        <ul>
          <li class="my-2">
            <a class="hover:text-indigo-600" href="https://twitter.com">Twitter</a>
          </li>
          <li class="my-2">
            <a class="hover:text-indigo-600" href="https://facebook.com">Facebook</a>
          </li>
        </ul>
    </div>


  </div>
  <div class="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
      <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          
        <a href="https://www.youtube.com" class="w-6 mx-1">
            <svg class="fill-current text-gray-800 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-1.2-.8-4.2-1.184-7.615-1.184s-6.415.384-7.615 1.184c-1.2.8-2.385 2.8-2.385 5.816v5.984c0 3.016 1.185 5.016 2.385 5.816 1.2.8 4.2 1.184 7.615 1.184s6.415-.384 7.615-1.184c1.2-.8 2.385-2.8 2.385-5.816v-5.984c0-3.016-1.185-5.016-2.385-5.816zm-9.615 12.816v-8l6 4-6 4z"/>
            </svg>
        </a>
        <a href="https://www.linkedin.com" class="w-6 mx-1">
            <svg class="fill-current text-gray-800 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
            </svg>
        </a>
        <a href="https://www.github.com" class="w-6 mx-1">
            <svg class="fill-current text-gray-800 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
      </div>
      <div class="my-5">{{ CURRENT_YEAR }} - APGIIIT.com All rights reserved.</div>
  </div>
</footer>
</template>
  <script setup>
  //props
  const CURRENT_YEAR = new Date().getFullYear();

  const navigation = [
  { name: "index", path: "Home", current: false },
  { name: "about", path: "About", current: false },
  { name: "gallery", path: "Gallery", current: false },
  { name: "project", path: "Project", current: false },
  { name: "blog", path: "Blog", current: false },
];
  </script>
  