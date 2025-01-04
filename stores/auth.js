import { defineStore } from "pinia";
import Cookies from 'js-cookie';
import { ref } from "vue";
import httpClient from "../utils/interceptor";


export const useAuth = defineStore("auth", {
  state: () => ({
    authData: null,
    profileData: null,
    loading: ref(false),
  }),

  getters: {
    getAuthData() {
      return this.authData;
    },
    getProfileData() {
      return this.profileData;
    },
    isLoading() {
      return this.loading;
    },
  },

  actions: {
    async loginAction(loginData) {
      try {
        const response = await httpClient.post("login", loginData);
        if (response.data) {
          this.authData = response.data;
          Cookies.set('authData', response.data, { expires: 7 }); // Set cookie to expire in 7 days
          // localStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    async registerAction(registerData) {
      try {
        const response = await httpClient.post("register", registerData);
        if (response.data) {
          this.authData = response.data;
          // localStorage.setItem("user", JSON.stringify(response.data));
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },

    logout() {
      this.authData = null;
      Cookies.remove('authData');
      // localStorage.removeItem("user");
      router.push("/login");
      toast.success("Logout successful!");
    },

    resetAuth() {
      this.authData = {};
    },
  },
});