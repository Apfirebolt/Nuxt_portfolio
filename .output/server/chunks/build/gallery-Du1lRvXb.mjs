import { c as useHead$1, n as navigateTo } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { _ as _sfc_main$1 } from './Loader-D0JegpAn.mjs';
import { h as httpClient } from './interceptor-CfNfEaxn.mjs';
import { computed, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, ref, useSSRContext } from 'vue';
import { defineStore } from 'pinia';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

var useGallery = defineStore("gallery", {
  state: () => ({
    galleryList: ref([]),
    gallery: ref({}),
    loading: ref(false)
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
    }
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
    }
  }
});
var _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$1({ title: "Gallery | APGIIIT.com - Travel & Photography" });
    const galleryStore = useGallery();
    const isLoading = computed(() => galleryStore.isLoading);
    const gallery = computed(() => galleryStore.getGalleryList);
    const getFullImageUrl = (image) => {
      return image.startsWith("http") ? image : `https://softgenie.org${image}`;
    };
    const viewImageInFullSize = (image) => {
      const url = image.startsWith("http") ? image : `https://softgenie.org${image}`;
      (void 0).open(url, "_blank");
    };
    const goToDetail = async (item) => {
      await navigateTo(`/gallery/${item.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white"${_scopeId}><section class="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24"${_scopeId}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8"${_scopeId}><div class="flex flex-col justify-center lg:col-span-7"${_scopeId}><div class="inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700"${_scopeId}><span class="h-2 w-2 rounded-full bg-indigo-600"${_scopeId}></span> Visual Log &amp; Expeditions </div><h1 class="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"${_scopeId}> Photo <span class="text-indigo-600"${_scopeId}>Gallery</span></h1><p class="mt-6 text-lg leading-relaxed text-slate-600"${_scopeId}> A curated visual diary capturing solo journeys, architecture, mountain passes, and personal gatherings across India and Europe. </p><div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-600"${_scopeId}><span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5"${_scopeId}>\u{1F3D4}\uFE0F Landscapes &amp; Nature</span><span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5"${_scopeId}>\u{1F3DB}\uFE0F Heritage Sites</span><span class="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5"${_scopeId}>\u{1F4F8} Travel Chronicles</span></div></div><div class="relative flex justify-center lg:col-span-5"${_scopeId}><div class="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl"${_scopeId}><img class="h-full w-full object-cover object-center" src="https://softgenie.org/media/images/generic/gallery.jpeg" alt="Ladakh Lake Showcase" loading="lazy"${_scopeId}></div></div></div></div></section><main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"${_scopeId}>`);
            if (isLoading.value) _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            else {
              _push2(`<div${_scopeId}>`);
              if (gallery.value.results && gallery.value.results.length) {
                _push2(`<div class="space-y-12"${_scopeId}><!--[-->`);
                ssrRenderList(gallery.value.results, (item) => {
                  var _a;
                  _push2(`<article class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8" data-aos="fade-up"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(item.tags, (tag) => {
                    _push2(`<span class="rounded-md border border-indigo-100 bg-indigo-50/80 px-2.5 py-0.5 text-xs font-semibold text-indigo-700"${_scopeId}> #${ssrInterpolate(tag.name)}</span>`);
                  });
                  _push2(`<!--]--></div><time class="text-xs font-medium text-slate-400"${_scopeId}>${ssrInterpolate(new Date(item.date_posted).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  }))}</time></div><div class="mt-5"${_scopeId}><h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"${_scopeId}>${ssrInterpolate(item.title)}</h2><div class="prose prose-slate mt-3 max-w-none text-sm leading-relaxed text-slate-600"${_scopeId}>${(_a = item.description) != null ? _a : ""}</div></div>`);
                  if (item.images && item.images.length) {
                    _push2(`<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                    ssrRenderList(item.images, (image) => {
                      _push2(`<div class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-slate-300"${_scopeId}><div class="relative aspect-4/3 w-full overflow-hidden bg-slate-200"${_scopeId}><img${ssrRenderAttr("src", getFullImageUrl(image.image))}${ssrRenderAttr("alt", image.caption || item.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"${_scopeId}><button type="button" class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80" aria-label="View Full Size Image"${_scopeId}><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"${_scopeId}></path></svg></button></div>`);
                      if (image.caption) _push2(`<div class="p-3 text-xs text-slate-600 truncate"${_scopeId}>${ssrInterpolate(image.caption)}</div>`);
                      else _push2(`<!---->`);
                      _push2(`</div>`);
                    });
                    _push2(`<!--]--></div>`);
                  } else _push2(`<!---->`);
                  _push2(`<div class="mt-8 flex items-center justify-end border-t border-slate-100 pt-5"${_scopeId}><button type="button" class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"${_scopeId}><span${_scopeId}>View Post Story</span><svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"${_scopeId}></path></svg></button></div></article>`);
                });
                _push2(`<!--]--></div>`);
              } else _push2(`<div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center"${_scopeId}><span class="text-4xl"${_scopeId}>\u{1F4F7}</span><h3 class="mt-4 text-base font-bold text-slate-900"${_scopeId}>No Stories Published Yet</h3><p class="mt-1 text-xs text-slate-500"${_scopeId}>Check back later for new photography and expedition updates.</p></div>`);
              _push2(`</div>`);
            }
            _push2(`</main></div>`);
          } else return [createVNode("div", { class: "min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white" }, [createVNode("section", { class: "relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-24" }, [createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8" }, [createVNode("div", { class: "flex flex-col justify-center lg:col-span-7" }, [
            createVNode("div", { class: "inline-flex items-center gap-2 self-start rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700" }, [createVNode("span", { class: "h-2 w-2 rounded-full bg-indigo-600" }), createTextVNode(" Visual Log & Expeditions ")]),
            createVNode("h1", { class: "mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" }, [createTextVNode(" Photo "), createVNode("span", { class: "text-indigo-600" }, "Gallery")]),
            createVNode("p", { class: "mt-6 text-lg leading-relaxed text-slate-600" }, " A curated visual diary capturing solo journeys, architecture, mountain passes, and personal gatherings across India and Europe. "),
            createVNode("div", { class: "mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-600" }, [
              createVNode("span", { class: "rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5" }, "\u{1F3D4}\uFE0F Landscapes & Nature"),
              createVNode("span", { class: "rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5" }, "\u{1F3DB}\uFE0F Heritage Sites"),
              createVNode("span", { class: "rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5" }, "\u{1F4F8} Travel Chronicles")
            ])
          ]), createVNode("div", { class: "relative flex justify-center lg:col-span-5" }, [createVNode("div", { class: "relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl" }, [createVNode("img", {
            class: "h-full w-full object-cover object-center",
            src: "https://softgenie.org/media/images/generic/gallery.jpeg",
            alt: "Ladakh Lake Showcase",
            loading: "lazy"
          })])])])])]), createVNode("main", { class: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" }, [isLoading.value ? (openBlock(), createBlock(_component_Loader, { key: 0 })) : (openBlock(), createBlock("div", { key: 1 }, [gallery.value.results && gallery.value.results.length ? (openBlock(), createBlock("div", {
            key: 0,
            class: "space-y-12"
          }, [(openBlock(true), createBlock(Fragment, null, renderList(gallery.value.results, (item) => {
            return openBlock(), createBlock("article", {
              key: item.id,
              class: "overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8",
              "data-aos": "fade-up"
            }, [
              createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4" }, [createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(item.tags, (tag) => {
                return openBlock(), createBlock("span", {
                  key: tag.name,
                  class: "rounded-md border border-indigo-100 bg-indigo-50/80 px-2.5 py-0.5 text-xs font-semibold text-indigo-700"
                }, " #" + toDisplayString(tag.name), 1);
              }), 128))]), createVNode("time", { class: "text-xs font-medium text-slate-400" }, toDisplayString(new Date(item.date_posted).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })), 1)]),
              createVNode("div", { class: "mt-5" }, [createVNode("h2", { class: "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl" }, toDisplayString(item.title), 1), createVNode("div", {
                class: "prose prose-slate mt-3 max-w-none text-sm leading-relaxed text-slate-600",
                innerHTML: item.description
              }, null, 8, ["innerHTML"])]),
              item.images && item.images.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(item.images, (image) => {
                return openBlock(), createBlock("div", {
                  key: image.id,
                  class: "group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all hover:border-slate-300"
                }, [createVNode("div", { class: "relative aspect-4/3 w-full overflow-hidden bg-slate-200" }, [createVNode("img", {
                  src: getFullImageUrl(image.image),
                  alt: image.caption || item.title,
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }, null, 8, ["src", "alt"]), createVNode("button", {
                  type: "button",
                  onClick: ($event) => viewImageInFullSize(image.image),
                  class: "absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/80",
                  "aria-label": "View Full Size Image"
                }, [(openBlock(), createBlock("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                })]))], 8, ["onClick"])]), image.caption ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-3 text-xs text-slate-600 truncate"
                }, toDisplayString(image.caption), 1)) : createCommentVNode("", true)]);
              }), 128))])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-8 flex items-center justify-end border-t border-slate-100 pt-5" }, [createVNode("button", {
                type: "button",
                onClick: ($event) => goToDetail(item),
                class: "inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              }, [createVNode("span", null, "View Post Story"), (openBlock(), createBlock("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              })]))], 8, ["onClick"])])
            ]);
          }), 128))])) : (openBlock(), createBlock("div", {
            key: 1,
            class: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center"
          }, [
            createVNode("span", { class: "text-4xl" }, "\u{1F4F7}"),
            createVNode("h3", { class: "mt-4 text-base font-bold text-slate-900" }, "No Stories Published Yet"),
            createVNode("p", { class: "mt-1 text-xs text-slate-500" }, "Check back later for new photography and expedition updates.")
          ]))]))])])];
        }),
        _: 1
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-Du1lRvXb.mjs.map
