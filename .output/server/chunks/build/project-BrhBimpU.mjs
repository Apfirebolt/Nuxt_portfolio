import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { c as useHead$1, n as navigateTo } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { _ as _sfc_main$1 } from './Loader-D0JegpAn.mjs';
import { h as httpClient } from './interceptor-CfNfEaxn.mjs';
import { computed, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, ref, useSSRContext } from 'vue';
import { defineStore } from 'pinia';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'nostics/formatters/ansi';
import 'vue-router';
import '@vue/shared';
import 'fnv1a-64';
import 'object-identity';
import 'unhead/utils';
import 'axios';

var useProject = defineStore("project", {
  state: () => ({
    projectList: ref([]),
    project: ref({}),
    loading: ref(false)
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
    }
  },
  actions: {
    async getProjectAction(id) {
      try {
        this.loading = true;
        const response = await httpClient.get(`projects/${id}`);
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
        const response = await httpClient.get(`projects`);
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
    }
  }
});
var laptop_default = "" + buildAssetsURL("laptop.BVMVNDZO.jpg");
var _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$1({ title: "Projects | APGIIIT.com - Software & Engineering" });
    const projectStore = useProject();
    const isLoading = computed(() => projectStore.isLoading);
    const projects = computed(() => projectStore.getProjectList);
    const getFullImageUrl = (image) => {
      return image.startsWith("http") ? image : `https://softgenie.org${image}`;
    };
    const viewImageInFullSize = (image) => {
      const url = image.startsWith("http") ? image : `https://softgenie.org${image}`;
      (void 0).open(url, "_blank");
    };
    const goToDetail = async (project) => {
      await navigateTo(`/project/${project.id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-primary text-primary-dark antialiased"${_scopeId}><section class="relative overflow-hidden border-b border-secondary-dark/20 bg-secondary/40 py-16 sm:py-24"${_scopeId}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"${_scopeId}><div class="flex flex-col justify-center lg:col-span-6"${_scopeId}><div class="inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark"${_scopeId}><span class="h-2 w-2 rounded-full bg-secondary-dark"${_scopeId}></span> Software &amp; Systems Portfolio </div><h1 class="mt-6 text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl"${_scopeId}> Featured <span class="text-secondary-dark"${_scopeId}>Projects</span></h1><p class="mt-6 text-lg leading-relaxed text-primary-dark/80"${_scopeId}> A showcase of production web applications, distributed backend services, and open-source tooling built with performance, security, and scalable architecture in mind. </p><div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/90"${_scopeId}><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>\u26A1 Full-Stack Systems</span><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>\u{1F512} Cloud &amp; Microservices</span><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>\u{1F4E6} Open Source</span></div></div><div class="relative flex justify-center lg:col-span-6"${_scopeId}><div class="relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl lg:max-w-lg"${_scopeId}><img class="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"${ssrRenderAttr("src", laptop_default)} alt="Projects and Engineering Showcase" loading="lazy"${_scopeId}></div></div></div></div></section><main class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"${_scopeId}>`);
            if (isLoading.value) _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
            else {
              _push2(`<div${_scopeId}>`);
              if (projects.value.results && projects.value.results.length) {
                _push2(`<div class="space-y-12"${_scopeId}><!--[-->`);
                ssrRenderList(projects.value.results, (project) => {
                  var _a;
                  _push2(`<article class="overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm transition-all duration-300 hover:border-secondary-dark/40 hover:shadow-md sm:p-8" data-aos="fade-up"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-4"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
                  ssrRenderList(project.tags, (tag) => {
                    _push2(`<span class="rounded-md border border-secondary-dark/30 bg-primary px-2.5 py-0.5 text-xs font-semibold text-secondary-dark shadow-sm"${_scopeId}> #${ssrInterpolate(tag.name)}</span>`);
                  });
                  _push2(`<!--]--></div><time class="text-xs font-medium text-primary-dark/60"${_scopeId}>${ssrInterpolate(new Date(project.date_posted).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  }))}</time></div><div class="mt-5"${_scopeId}><h2 class="text-2xl font-bold tracking-tight text-primary-dark sm:text-3xl"${_scopeId}>${ssrInterpolate(project.title)}</h2><div class="prose prose-stone mt-3 max-w-none text-sm leading-relaxed text-primary-dark/80"${_scopeId}>${(_a = project.description) != null ? _a : ""}</div></div>`);
                  if (project.images && project.images.length) {
                    _push2(`<div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                    ssrRenderList(project.images, (item) => {
                      _push2(`<div class="group flex flex-col overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary transition-all hover:border-secondary-dark/40"${_scopeId}><div class="relative aspect-16/10 w-full overflow-hidden bg-secondary"${_scopeId}><img${ssrRenderAttr("src", getFullImageUrl(item.image))}${ssrRenderAttr("alt", item.caption || project.title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"${_scopeId}><button type="button" class="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-dark/70 text-primary opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-primary-dark" aria-label="View Full Size Image"${_scopeId}><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"${_scopeId}></path></svg></button></div>`);
                      if (item.caption) _push2(`<div class="p-3 text-xs text-primary-dark/80 truncate"${_scopeId}>${ssrInterpolate(item.caption)}</div>`);
                      else _push2(`<!---->`);
                      _push2(`</div>`);
                    });
                    _push2(`<!--]--></div>`);
                  } else _push2(`<!---->`);
                  _push2(`<div class="mt-8 flex items-center justify-end border-t border-secondary-dark/15 pt-5"${_scopeId}><button type="button" class="inline-flex items-center gap-2 rounded-lg bg-secondary-dark px-5 py-2.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2"${_scopeId}><span${_scopeId}>Project Overview</span><svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"${_scopeId}></path></svg></button></div></article>`);
                });
                _push2(`<!--]--></div>`);
              } else _push2(`<div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-secondary-dark/30 bg-secondary/20 py-20 text-center"${_scopeId}><span class="text-4xl"${_scopeId}>\u{1F4C1}</span><h3 class="mt-4 text-base font-bold text-primary-dark"${_scopeId}>No Projects Available</h3><p class="mt-1 text-xs text-primary-dark/60"${_scopeId}>New projects and repositories will appear here soon.</p></div>`);
              _push2(`</div>`);
            }
            _push2(`</main></div>`);
          } else return [createVNode("div", { class: "min-h-screen bg-primary text-primary-dark antialiased" }, [createVNode("section", { class: "relative overflow-hidden border-b border-secondary-dark/20 bg-secondary/40 py-16 sm:py-24" }, [createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10" }, [createVNode("div", { class: "flex flex-col justify-center lg:col-span-6" }, [
            createVNode("div", { class: "inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark" }, [createVNode("span", { class: "h-2 w-2 rounded-full bg-secondary-dark" }), createTextVNode(" Software & Systems Portfolio ")]),
            createVNode("h1", { class: "mt-6 text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl" }, [createTextVNode(" Featured "), createVNode("span", { class: "text-secondary-dark" }, "Projects")]),
            createVNode("p", { class: "mt-6 text-lg leading-relaxed text-primary-dark/80" }, " A showcase of production web applications, distributed backend services, and open-source tooling built with performance, security, and scalable architecture in mind. "),
            createVNode("div", { class: "mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/90" }, [
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "\u26A1 Full-Stack Systems"),
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "\u{1F512} Cloud & Microservices"),
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "\u{1F4E6} Open Source")
            ])
          ]), createVNode("div", { class: "relative flex justify-center lg:col-span-6" }, [createVNode("div", { class: "relative aspect-4/3 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl lg:max-w-lg" }, [createVNode("img", {
            class: "h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105",
            src: laptop_default,
            alt: "Projects and Engineering Showcase",
            loading: "lazy"
          })])])])])]), createVNode("main", { class: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" }, [isLoading.value ? (openBlock(), createBlock(_component_Loader, { key: 0 })) : (openBlock(), createBlock("div", { key: 1 }, [projects.value.results && projects.value.results.length ? (openBlock(), createBlock("div", {
            key: 0,
            class: "space-y-12"
          }, [(openBlock(true), createBlock(Fragment, null, renderList(projects.value.results, (project) => {
            return openBlock(), createBlock("article", {
              key: project.id,
              class: "overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm transition-all duration-300 hover:border-secondary-dark/40 hover:shadow-md sm:p-8",
              "data-aos": "fade-up"
            }, [
              createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-4" }, [createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(project.tags, (tag) => {
                return openBlock(), createBlock("span", {
                  key: tag.name,
                  class: "rounded-md border border-secondary-dark/30 bg-primary px-2.5 py-0.5 text-xs font-semibold text-secondary-dark shadow-sm"
                }, " #" + toDisplayString(tag.name), 1);
              }), 128))]), createVNode("time", { class: "text-xs font-medium text-primary-dark/60" }, toDisplayString(new Date(project.date_posted).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })), 1)]),
              createVNode("div", { class: "mt-5" }, [createVNode("h2", { class: "text-2xl font-bold tracking-tight text-primary-dark sm:text-3xl" }, toDisplayString(project.title), 1), createVNode("div", {
                class: "prose prose-stone mt-3 max-w-none text-sm leading-relaxed text-primary-dark/80",
                innerHTML: project.description
              }, null, 8, ["innerHTML"])]),
              project.images && project.images.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(project.images, (item) => {
                return openBlock(), createBlock("div", {
                  key: item.id,
                  class: "group flex flex-col overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary transition-all hover:border-secondary-dark/40"
                }, [createVNode("div", { class: "relative aspect-16/10 w-full overflow-hidden bg-secondary" }, [createVNode("img", {
                  src: getFullImageUrl(item.image),
                  alt: item.caption || project.title,
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }, null, 8, ["src", "alt"]), createVNode("button", {
                  type: "button",
                  onClick: ($event) => viewImageInFullSize(item.image),
                  class: "absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-dark/70 text-primary opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 hover:bg-primary-dark",
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
                })]))], 8, ["onClick"])]), item.caption ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "p-3 text-xs text-primary-dark/80 truncate"
                }, toDisplayString(item.caption), 1)) : createCommentVNode("", true)]);
              }), 128))])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-8 flex items-center justify-end border-t border-secondary-dark/15 pt-5" }, [createVNode("button", {
                type: "button",
                onClick: ($event) => goToDetail(project),
                class: "inline-flex items-center gap-2 rounded-lg bg-secondary-dark px-5 py-2.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark focus:ring-offset-2"
              }, [createVNode("span", null, "Project Overview"), (openBlock(), createBlock("svg", {
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
            class: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-secondary-dark/30 bg-secondary/20 py-20 text-center"
          }, [
            createVNode("span", { class: "text-4xl" }, "\u{1F4C1}"),
            createVNode("h3", { class: "mt-4 text-base font-bold text-primary-dark" }, "No Projects Available"),
            createVNode("p", { class: "mt-1 text-xs text-primary-dark/60" }, "New projects and repositories will appear here soon.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=project-BrhBimpU.mjs.map
