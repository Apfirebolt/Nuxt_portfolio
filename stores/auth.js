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
          console.log('Response data:', response.data);
          localStorage.setItem("authData", JSON.stringify(response.data));
          Cookies.set('authData', JSON.stringify(response.data), { expires: 7 });
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