import { h as httpClient } from './interceptor-CfNfEaxn.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { defineStore } from 'pinia';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import Cookies from 'js-cookie';
import 'axios';

var useAuth = defineStore("auth", {
  state: () => ({
    authData: null,
    profileData: null,
    loading: ref(false)
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
    }
  },
  actions: {
    async loginAction(loginData) {
      try {
        const response = await httpClient.post("login", loginData);
        if (response.data) {
          this.authData = response.data;
          console.log("Response data:", response.data);
          localStorage.setItem("authData", JSON.stringify(response.data));
          Cookies.set("authData", JSON.stringify(response.data), { expires: 7 });
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async registerAction(registerData) {
      try {
        const response = await httpClient.post("register", registerData);
        if (response.data) this.authData = response.data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    logout() {
      this.authData = null;
      Cookies.remove("authData");
      router.push("/login");
      toast.success("Logout successful!");
    },
    resetAuth() {
      this.authData = {};
    }
  }
});
var _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gray-100" }, _attrs))}><div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"><h2 class="text-2xl font-bold mb-6 text-center">Login</h2><form><div class="mb-4"><label for="email" class="block text-gray-700">Email</label><input type="email" id="email"${ssrRenderAttr("value", email.value)} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></div><div class="mb-6"><label for="password" class="block text-gray-700">Password</label><input type="password" id="password"${ssrRenderAttr("value", password.value)} class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></div><button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"> Login </button></form></div></div>`);
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-Da0R9Rht.mjs.map
