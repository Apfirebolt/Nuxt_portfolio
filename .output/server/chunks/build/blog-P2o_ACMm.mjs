import { c as useHead$1, n as navigateTo } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { _ as _sfc_main$1 } from './Loader-D0JegpAn.mjs';
import { h as httpClient } from './interceptor-CfNfEaxn.mjs';
import { computed, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, ref, useSSRContext } from 'vue';
import { defineStore } from 'pinia';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import Cookies from 'js-cookie';
import 'nostics';
import 'nostics/formatters/ansi';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';
import 'unhead/utils';
import 'axios';

var useBlog = defineStore("blog", {
  state: () => ({
    blogList: ref([]),
    blog: ref({}),
    postList: ref([]),
    post: ref({}),
    loading: ref(false)
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
    }
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
        const token = Cookies.get("authData");
        console.log("Token:", token);
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
    async getPostsAction() {
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
    resetBlogData() {
      this.blog = {};
      this.blogList = [];
    },
    resetPostData() {
      this.post = {};
      this.postList = [];
      this.blog = {};
      this.blogList = [];
    }
  }
});
var _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$1({ title: "APGIIIT.com - My Blog" });
    const blogStore = useBlog();
    const isLoading = computed(() => blogStore.isLoading);
    const blogs = computed(() => blogStore.getBlogList);
    const randomAOSEffect = () => {
      const effectList = [
        "fade-up",
        "fade-down",
        "fade-left",
        "fade-right",
        "fade-up-right",
        "fade-up-left",
        "fade-down-right",
        "fade-down-left",
        "flip-up",
        "flip-down",
        "flip-left",
        "flip-right",
        "slide-left",
        "slide-right",
        "zoom-in",
        "zoom-out"
      ];
      return effectList[Math.floor(Math.random() * effectList.length)];
    };
    const getFullImageUrl = (image) => {
      return `https://softgenie.org${image}`;
    };
    const viewImageInFullSize = (image) => {
      (void 0).open(`https://softgenie.org${image}`, "_blank");
    };
    const goToDetail = async (blog) => {
      await navigateTo(`/blog/${blog.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="homepage-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6"${_scopeId}><div class="hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl"${_scopeId}><div class="w-full h-64 lg:w-1/2 lg:h-auto"${_scopeId}><img class="h-500 w-full object-cover" src="https://softgenie.org/media/images/generic/my_blog.jpeg" alt="Winding mountain road"${_scopeId}></div><div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"${_scopeId}><div class="flex flex-col p-12 md:px-16"${_scopeId}><h2 class="text-2xl font-medium uppercase text-secondary-dark lg:text-4xl"${_scopeId}> BLOG </h2><p class="mt-4"${_scopeId}> Blog section showcases the articles I&#39;ve written on various topics. This section provides a closer look into my thoughts in a textual way. You can view the details each post by clicking on the &quot;View Details&quot; button. It would display details of the post including the images and the description. </p></div></div></div>`);
            if (isLoading.value) _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            else {
              _push2(`<div${_scopeId}>`);
              if (blogs.value.results && blogs.value.results.length) {
                _push2(`<div${_scopeId}><!--[-->`);
                ssrRenderList(blogs.value.results, (blog) => {
                  var _a;
                  _push2(`<div class="card my-4 p-4 border bg-white rounded shadow-lg"${ssrRenderAttr("data-aos", randomAOSEffect())}${_scopeId}>`);
                  if (blog.tags && blog.tags.length) {
                    _push2(`<div class="my-4"${_scopeId}><!--[-->`);
                    ssrRenderList(blog.tags, (tag) => {
                      _push2(`<span class="inline-block bg-primary text-primary-dark font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"${_scopeId}>${ssrInterpolate(tag.name)}</span>`);
                    });
                    _push2(`<!--]--></div>`);
                  } else _push2(`<!---->`);
                  _push2(`<h2 class="text-2xl font-bold"${_scopeId}>${ssrInterpolate(blog.title)}</h2><div${_scopeId}>${(_a = blog.content) != null ? _a : ""}</div>`);
                  if (blog.images && blog.images.length) {
                    _push2(`<div${_scopeId}><div class="grid grid-cols-1 md:grid-cols-3 gap-4"${_scopeId}><!--[-->`);
                    ssrRenderList(blog.images, (item) => {
                      _push2(`<div class="my-2"${_scopeId}><img${ssrRenderAttr("src", getFullImageUrl(item.image))} alt="Blog Image" class="w-full h-auto rounded"${_scopeId}><div class="flex items-center justify-between mt-4"${_scopeId}><span${_scopeId}>${ssrInterpolate(item.caption)}</span><button class="bg-primary-dark text-primary py-2 px-3 rounded-full font-semibold hover:bg-gray-500"${_scopeId}> View Full Size </button></div></div>`);
                    });
                    _push2(`<!--]--></div></div>`);
                  } else _push2(`<!---->`);
                  _push2(`<p class="text-sm text-gray-400"${_scopeId}> Posted on: ${ssrInterpolate(new Date(blog.date_posted).toLocaleDateString())}</p><button class="bg-secondary-dark text-primary py-2 px-3 rounded-full font-semibold mt-4"${_scopeId}> View Details </button></div>`);
                });
                _push2(`<!--]--></div>`);
              } else _push2(`<div${_scopeId}><p${_scopeId}>No blogs available.</p></div>`);
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else return [createVNode("div", { class: "homepage-content bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6" }, [createVNode("div", { class: "hero relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl" }, [createVNode("div", { class: "w-full h-64 lg:w-1/2 lg:h-auto" }, [createVNode("img", {
            class: "h-500 w-full object-cover",
            src: "https://softgenie.org/media/images/generic/my_blog.jpeg",
            alt: "Winding mountain road"
          })]), createVNode("div", { class: "max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12" }, [createVNode("div", { class: "flex flex-col p-12 md:px-16" }, [createVNode("h2", { class: "text-2xl font-medium uppercase text-secondary-dark lg:text-4xl" }, " BLOG "), createVNode("p", { class: "mt-4" }, ` Blog section showcases the articles I've written on various topics. This section provides a closer look into my thoughts in a textual way. You can view the details each post by clicking on the "View Details" button. It would display details of the post including the images and the description. `)])])]), isLoading.value ? (openBlock(), createBlock(_component_Loader, { key: 0 })) : (openBlock(), createBlock("div", { key: 1 }, [blogs.value.results && blogs.value.results.length ? (openBlock(), createBlock("div", { key: 0 }, [(openBlock(true), createBlock(Fragment, null, renderList(blogs.value.results, (blog) => {
            return openBlock(), createBlock("div", {
              key: blog.id,
              class: "card my-4 p-4 border bg-white rounded shadow-lg",
              "data-aos": randomAOSEffect()
            }, [
              blog.tags && blog.tags.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "my-4"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(blog.tags, (tag) => {
                return openBlock(), createBlock("span", {
                  key: tag,
                  class: "inline-block bg-primary text-primary-dark font-semibold mr-2 px-2.5 py-0.5 rounded-lg shadow-lg"
                }, toDisplayString(tag.name), 1);
              }), 128))])) : createCommentVNode("", true),
              createVNode("h2", { class: "text-2xl font-bold" }, toDisplayString(blog.title), 1),
              createVNode("div", { innerHTML: blog.content }, null, 8, ["innerHTML"]),
              blog.images && blog.images.length ? (openBlock(), createBlock("div", { key: 1 }, [createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-4" }, [(openBlock(true), createBlock(Fragment, null, renderList(blog.images, (item) => {
                return openBlock(), createBlock("div", {
                  key: item.id,
                  class: "my-2"
                }, [createVNode("img", {
                  src: getFullImageUrl(item.image),
                  alt: "Blog Image",
                  class: "w-full h-auto rounded"
                }, null, 8, ["src"]), createVNode("div", { class: "flex items-center justify-between mt-4" }, [createVNode("span", null, toDisplayString(item.caption), 1), createVNode("button", {
                  onClick: ($event) => viewImageInFullSize(item.image),
                  class: "bg-primary-dark text-primary py-2 px-3 rounded-full font-semibold hover:bg-gray-500"
                }, " View Full Size ", 8, ["onClick"])])]);
              }), 128))])])) : createCommentVNode("", true),
              createVNode("p", { class: "text-sm text-gray-400" }, " Posted on: " + toDisplayString(new Date(blog.date_posted).toLocaleDateString()), 1),
              createVNode("button", {
                onClick: ($event) => goToDetail(blog),
                class: "bg-secondary-dark text-primary py-2 px-3 rounded-full font-semibold mt-4"
              }, " View Details ", 8, ["onClick"])
            ], 8, ["data-aos"]);
          }), 128))])) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("p", null, "No blogs available.")]))]))])];
        }),
        _: 1
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-P2o_ACMm.mjs.map
