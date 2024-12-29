import { defineStore } from "pinia";
import { ref } from "vue";
import httpClient from "../utils/interceptor";

export const useProject = defineStore("project", {
  state: () => ({
    projectList: ref([]),
    project: ref({}),
    loading: ref(false),
  }),

  getters: {
    getProject() {
      return this.project;
    },
    getProjectList() {
      return this.projectList;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async getProjectAction(id) {
      try {
        this.loading = true;
        const response = await httpClient.get(
          `projects/${id}`
        );
        if (response) {
          this.project = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    async getProjectsAction() {
      try {
        this.loading = true;
        const response = await httpClient.get(
          `projects`
        );
        if (response) {
          this.projectList = response.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },

    resetProjectData() {
      this.project = {};
      this.projectList = [];
    },
  },
});
