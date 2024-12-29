import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../utils/interceptor";

export const useBlog = defineStore("blog", {
  state: () => ({
    blogList: ref([]),
    blog: ref({}),
    postList: ref([]),
    post: ref({}),
    loading: ref(false),
  }),

  getters: {
    getBlog() {
      return this.blog;
    },
    getBlogList() {
      return this.blogList;
    },
    getPost() {
      return this.post;
    },
    getPostList() {
      return this.postList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async getBlogAction(id) {
      try {
        this.loading = true;
        const response = await httpClient.get(`blogs/${id}`);
        if (response) {
          this.blog = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async getBlogsAction(searchText = "Mario") {
      try {
        this.loading = true;
        const response = await httpClient.get(`blogs`);
        if (response) {
          this.blogList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async getPostAction(id) {
      try {
        this.loading = true;
        const response = await httpClient.get(`blog-posts/${id}`);
        if (response) {
          this.post = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async getPostsAction(searchText = "Mario") {
      try {
        this.loading = true;
        const response = await httpClient.get(`blog-posts`);
        if (response) {
          this.postList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    resetBlogData() {
      this.blog = {};
      this.blogList = [];
    },

    resetPostData() {
      this.post = {};
      this.postList = [];
    },
  },
});
