import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../utils/interceptor";

export const useGallery = defineStore("gallery", {
  state: () => ({
    galleryList: ref([]),
    gallery: ref({}),
    loading: ref(false),
  }),

  getters: {
    getGallery() {
      return this.gallery;
    },
    getGalleryList() {
      return this.galleryList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async getGalleryAction(id) {
      try {
        this.loading = true;
        const response = await httpClient.get(`gallery-posts/${id}`);
        if (response) {
          this.gallery = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async getGalleriesAction(searchText = "Mario") {
      try {
        this.loading = true;
        const response = await httpClient.get(`gallery-posts`);
        if (response) {
          this.galleryList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    resetGalleryData() {
      this.gallery = {};
      this.galleryList = [];
    },
  },
});
