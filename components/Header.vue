<template>
  <Disclosure as="nav" class="bg-violet-800" v-slot="{ open }">
    <div class="max-w-7xl flex justify-center px-2 sm:px-6 lg:px-8 font-roboto">
      <div class="relative flex items-center h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <ViewfinderCircleIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <LockClosedIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img :src="logo" alt="Logo" class="block w-8 h-8 rounded-full" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nuxt-link
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.name }"
                class="text-lg"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-white hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.path }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">Open user menu</span>
              </MenuButton>
            </div>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.name }"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.path }}</nuxt-link
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { useRouter } from "vue-router";
import logo from '../assets/1.png';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";

import { LockClosedIcon, ViewfinderCircleIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "index", path: "Home", current: false },
];

const router = useRouter();

const navigateToRoute = (routeName) => {
  if (routeName) {
    router.push({ name: routeName });
  }
};
</script>
