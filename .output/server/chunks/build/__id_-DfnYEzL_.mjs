import { u as useRoute$1, a as useAsyncData, $ as $fetch$2, b as useSeoMeta$1, N as NuxtLink } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { _ as _sfc_main$1 } from './Loader-D0JegpAn.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, openBlock, createBlock, createVNode, unref, Fragment, renderList, toDisplayString, createCommentVNode, Teleport, Transition, withKeys, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
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
import 'pinia';
import 'fnv1a-64';
import 'object-identity';
import 'unhead/utils';

var _sfc_main = {
  __name: "[_id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute$1();
    const isClient = ref(false);
    const projectId = ref(route.params.id || route.params._id);
    const showLightbox = ref(false);
    const currentImageIndex = ref(0);
    const { data: project, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`project-${projectId.value}`, () => $fetch$2(`https://softgenie.org/api/projects/${projectId.value}`), { key: `project-detail-${projectId.value}` })), __temp = await __temp, __restore(), __temp);
    if (project.value) useSeoMeta$1({
      title: `${project.value.title} | APGIIIT Projects`,
      description: project.value.meta_description || "Explore the project architecture, screenshots, and live demo."
    });
    const getImageUrl = (imagePath) => {
      if (!imagePath) return "";
      return imagePath.startsWith("http") ? imagePath : `https://softgenie.org${imagePath}`;
    };
    const openLightbox = (index) => {
      currentImageIndex.value = index;
      showLightbox.value = true;
    };
    const closeLightbox = () => {
      showLightbox.value = false;
    };
    const nextImage = () => {
      var _a, _b;
      if (!((_b = (_a = project.value) == null ? void 0 : _a.images) == null ? void 0 : _b.length)) return;
      currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length;
    };
    const prevImage = () => {
      var _a, _b;
      if (!((_b = (_a = project.value) == null ? void 0 : _a.images) == null ? void 0 : _b.length)) return;
      currentImageIndex.value = (currentImageIndex.value - 1 + project.value.images.length) % project.value.images.length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_NuxtLink = NuxtLink;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="min-h-screen bg-primary text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary"${_scopeId}><main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"${_scopeId}><div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/project",
              class: "inline-flex items-center gap-2 rounded-lg border border-secondary-dark/20 bg-secondary/40 px-4 py-2 text-xs font-semibold text-primary-dark shadow-sm transition-all hover:bg-secondary hover:text-primary-dark"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(`<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>Back to Projects</span>`);
                else return [(openBlock(), createBlock("svg", {
                  class: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })])), createVNode("span", null, "Back to Projects")];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(pending)) {
              _push2(`<div class="flex min-h-[50vh] items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (unref(error)) _push2(`<div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-danger/40 bg-secondary/20 py-16 text-center"${_scopeId}><span class="text-4xl"${_scopeId}>\u26A0\uFE0F</span><h2 class="mt-4 text-base font-bold text-primary-dark"${_scopeId}>Failed to load project</h2><p class="mt-1 text-xs text-primary-dark/70"${_scopeId}>The requested project overview could not be retrieved.</p><button type="button" class="mt-6 rounded-lg bg-secondary-dark px-4 py-2 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90"${_scopeId}> Try Again </button></div>`);
            else if (unref(project) && unref(project).images) {
              _push2(`<article class="overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm sm:p-10"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-6"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(project).tags, (tag) => {
                _push2(`<span class="rounded-md border border-secondary-dark/30 bg-primary px-3 py-1 text-xs font-semibold text-secondary-dark shadow-sm"${_scopeId}> #${ssrInterpolate(tag.name)}</span>`);
              });
              _push2(`<!--]--></div>`);
              if (unref(project).date_posted) _push2(`<time class="text-xs font-medium text-primary-dark/60"${_scopeId}> Published on ${ssrInterpolate(new Date(unref(project).date_posted).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</time>`);
              else _push2(`<!---->`);
              _push2(`</div><div class="mt-8"${_scopeId}><h1 class="text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-5xl"${_scopeId}>${ssrInterpolate(unref(project).title)}</h1><div class="mt-6 flex flex-wrap gap-4 border-y border-secondary-dark/15 py-4"${_scopeId}>`);
              if (unref(project).technology) {
                _push2(`<div class="flex flex-wrap items-center gap-2"${_scopeId}><span class="text-xs font-bold uppercase tracking-wider text-primary-dark/60"${_scopeId}>Tech Stack:</span><div class="flex flex-wrap gap-1.5"${_scopeId}><!--[-->`);
                ssrRenderList(unref(project).technology.split(","), (tech, index) => {
                  _push2(`<span class="rounded-md border border-secondary-dark/20 bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-dark"${_scopeId}>${ssrInterpolate(tech.trim())}</span>`);
                });
                _push2(`<!--]--></div></div>`);
              } else _push2(`<!---->`);
              if (unref(project).project_link) _push2(`<div class="flex items-center gap-2 sm:ml-auto"${_scopeId}><a${ssrRenderAttr("href", unref(project).project_link)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded-lg bg-secondary-dark px-4 py-1.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark"${_scopeId}><span${_scopeId}>Live Demo / Repository</span><svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"${_scopeId}></path></svg></a></div>`);
              else _push2(`<!---->`);
              _push2(`</div>`);
              if (isClient.value && unref(project).description) _push2(`<div class="prose prose-stone mt-6 max-w-none text-base leading-relaxed text-primary-dark/85"${_scopeId}>${(_a = unref(project).description) != null ? _a : ""}</div>`);
              else _push2(`<!---->`);
              _push2(`</div><div class="mt-12"${_scopeId}><div class="flex items-center justify-between pb-4"${_scopeId}><h2 class="text-lg font-bold text-primary-dark"${_scopeId}>Project Screenshots</h2><span class="text-xs font-medium text-primary-dark/60"${_scopeId}>${ssrInterpolate(unref(project).images.length)} captures</span></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(project).images, (image, index) => {
                _push2(`<div class="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-dark/40 hover:shadow-md"${_scopeId}><img${ssrRenderAttr("src", getImageUrl(image.image))}${ssrRenderAttr("alt", image.caption || unref(project).title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"${_scopeId}></div><div class="absolute bottom-0 left-0 right-0 p-4 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between"${_scopeId}><span class="text-xs font-medium truncate pr-2"${_scopeId}>${ssrInterpolate(image.caption || "View screenshot")}</span><svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"${_scopeId}></path></svg></div></div>`);
              });
              _push2(`<!--]--></div></div></article>`);
            } else _push2(`<!---->`);
            _push2(`</main>`);
            ssrRenderTeleport(_push2, (_push3) => {
              var _a2, _b;
              if (showLightbox.value && isClient.value && ((_b = (_a2 = unref(project)) == null ? void 0 : _a2.images) == null ? void 0 : _b.length)) {
                _push3(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 p-4 backdrop-blur-md select-none" tabindex="0"${_scopeId}><button type="button" class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none" aria-label="Close Preview"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
                if (unref(project).images.length > 1) _push3(`<button type="button" class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:left-8" aria-label="Previous image"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg></button>`);
                else _push3(`<!---->`);
                _push3(`<div class="flex max-h-[85vh] max-w-5xl flex-col items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", getImageUrl(unref(project).images[currentImageIndex.value].image))}${ssrRenderAttr("alt", unref(project).images[currentImageIndex.value].caption || unref(project).title)} class="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"${_scopeId}>`);
                if (unref(project).images[currentImageIndex.value].caption) _push3(`<p class="mt-3 text-center text-xs font-medium text-primary/80"${_scopeId}>${ssrInterpolate(unref(project).images[currentImageIndex.value].caption)}</p>`);
                else _push3(`<!---->`);
                _push3(`</div>`);
                if (unref(project).images.length > 1) _push3(`<button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:right-8" aria-label="Next image"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></button>`);
                else _push3(`<!---->`);
                _push3(`<div class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-primary/20 bg-primary-dark/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm"${_scopeId}>${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(unref(project).images.length)}</div></div>`);
              } else _push3(`<!---->`);
            }, "body", false, _parent2);
            _push2(`</div>`);
          } else return [createVNode("div", { class: "min-h-screen bg-primary text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary" }, [createVNode("main", { class: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" }, [createVNode("div", { class: "mb-8 flex items-center justify-between" }, [createVNode(_component_NuxtLink, {
            to: "/project",
            class: "inline-flex items-center gap-2 rounded-lg border border-secondary-dark/20 bg-secondary/40 px-4 py-2 text-xs font-semibold text-primary-dark shadow-sm transition-all hover:bg-secondary hover:text-primary-dark"
          }, {
            default: withCtx(() => [(openBlock(), createBlock("svg", {
              class: "h-4 w-4",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [createVNode("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })])), createVNode("span", null, "Back to Projects")]),
            _: 1
          })]), unref(pending) ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex min-h-[50vh] items-center justify-center"
          }, [createVNode(_component_Loader)])) : unref(error) ? (openBlock(), createBlock("div", {
            key: 1,
            class: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-danger/40 bg-secondary/20 py-16 text-center"
          }, [
            createVNode("span", { class: "text-4xl" }, "\u26A0\uFE0F"),
            createVNode("h2", { class: "mt-4 text-base font-bold text-primary-dark" }, "Failed to load project"),
            createVNode("p", { class: "mt-1 text-xs text-primary-dark/70" }, "The requested project overview could not be retrieved."),
            createVNode("button", {
              type: "button",
              onClick: () => unref(refresh)(),
              class: "mt-6 rounded-lg bg-secondary-dark px-4 py-2 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90"
            }, " Try Again ", 8, ["onClick"])
          ])) : unref(project) && unref(project).images ? (openBlock(), createBlock("article", {
            key: 2,
            class: "overflow-hidden rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm sm:p-10"
          }, [
            createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 border-b border-secondary-dark/15 pb-6" }, [createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(project).tags, (tag) => {
              return openBlock(), createBlock("span", {
                key: tag.name,
                class: "rounded-md border border-secondary-dark/30 bg-primary px-3 py-1 text-xs font-semibold text-secondary-dark shadow-sm"
              }, " #" + toDisplayString(tag.name), 1);
            }), 128))]), unref(project).date_posted ? (openBlock(), createBlock("time", {
              key: 0,
              class: "text-xs font-medium text-primary-dark/60"
            }, " Published on " + toDisplayString(new Date(unref(project).date_posted).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })), 1)) : createCommentVNode("", true)]),
            createVNode("div", { class: "mt-8" }, [
              createVNode("h1", { class: "text-3xl font-black tracking-tight text-primary-dark sm:text-4xl lg:text-5xl" }, toDisplayString(unref(project).title), 1),
              createVNode("div", { class: "mt-6 flex flex-wrap gap-4 border-y border-secondary-dark/15 py-4" }, [unref(project).technology ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-wrap items-center gap-2"
              }, [createVNode("span", { class: "text-xs font-bold uppercase tracking-wider text-primary-dark/60" }, "Tech Stack:"), createVNode("div", { class: "flex flex-wrap gap-1.5" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(project).technology.split(","), (tech, index) => {
                return openBlock(), createBlock("span", {
                  key: index,
                  class: "rounded-md border border-secondary-dark/20 bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-dark"
                }, toDisplayString(tech.trim()), 1);
              }), 128))])])) : createCommentVNode("", true), unref(project).project_link ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex items-center gap-2 sm:ml-auto"
              }, [createVNode("a", {
                href: unref(project).project_link,
                target: "_blank",
                rel: "noopener noreferrer",
                class: "inline-flex items-center gap-1.5 rounded-lg bg-secondary-dark px-4 py-1.5 text-xs font-semibold text-primary shadow-sm transition-all hover:bg-secondary-dark/90 focus:outline-none focus:ring-2 focus:ring-secondary-dark"
              }, [createVNode("span", null, "Live Demo / Repository"), (openBlock(), createBlock("svg", {
                class: "h-3.5 w-3.5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              })]))], 8, ["href"])])) : createCommentVNode("", true)]),
              isClient.value && unref(project).description ? (openBlock(), createBlock("div", {
                key: 0,
                class: "prose prose-stone mt-6 max-w-none text-base leading-relaxed text-primary-dark/85",
                innerHTML: unref(project).description
              }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
            ]),
            createVNode("div", { class: "mt-12" }, [createVNode("div", { class: "flex items-center justify-between pb-4" }, [createVNode("h2", { class: "text-lg font-bold text-primary-dark" }, "Project Screenshots"), createVNode("span", { class: "text-xs font-medium text-primary-dark/60" }, toDisplayString(unref(project).images.length) + " captures", 1)]), createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(project).images, (image, index) => {
              return openBlock(), createBlock("div", {
                key: index,
                onClick: ($event) => openLightbox(index),
                class: "group relative aspect-16/10 cursor-pointer overflow-hidden rounded-xl border border-secondary-dark/20 bg-primary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary-dark/40 hover:shadow-md"
              }, [
                createVNode("img", {
                  src: getImageUrl(image.image),
                  alt: image.caption || unref(project).title,
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
                createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-4 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between" }, [createVNode("span", { class: "text-xs font-medium truncate pr-2" }, toDisplayString(image.caption || "View screenshot"), 1), (openBlock(), createBlock("svg", {
                  class: "h-4 w-4 shrink-0",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                })]))])
              ], 8, ["onClick"]);
            }), 128))])])
          ])) : createCommentVNode("", true)]), (openBlock(), createBlock(Teleport, { to: "body" }, [createVNode(Transition, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0",
            "enter-to-class": "opacity-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100",
            "leave-to-class": "opacity-0"
          }, {
            default: withCtx(() => {
              var _a2, _b;
              return [showLightbox.value && isClient.value && ((_b = (_a2 = unref(project)) == null ? void 0 : _a2.images) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/95 p-4 backdrop-blur-md select-none",
                onKeydown: [
                  withKeys(closeLightbox, ["esc"]),
                  withKeys(nextImage, ["right"]),
                  withKeys(prevImage, ["left"])
                ],
                tabindex: "0"
              }, [
                createVNode("button", {
                  type: "button",
                  onClick: closeLightbox,
                  class: "absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none",
                  "aria-label": "Close Preview"
                }, [(openBlock(), createBlock("svg", {
                  class: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M6 18L18 6M6 6l12 12"
                })]))]),
                unref(project).images.length > 1 ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: withModifiers(prevImage, ["stop"]),
                  class: "absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:left-8",
                  "aria-label": "Previous image"
                }, [(openBlock(), createBlock("svg", {
                  class: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })]))])) : createCommentVNode("", true),
                createVNode("div", { class: "flex max-h-[85vh] max-w-5xl flex-col items-center justify-center" }, [createVNode("img", {
                  src: getImageUrl(unref(project).images[currentImageIndex.value].image),
                  alt: unref(project).images[currentImageIndex.value].caption || unref(project).title,
                  class: "max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
                }, null, 8, ["src", "alt"]), unref(project).images[currentImageIndex.value].caption ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-3 text-center text-xs font-medium text-primary/80"
                }, toDisplayString(unref(project).images[currentImageIndex.value].caption), 1)) : createCommentVNode("", true)]),
                unref(project).images.length > 1 ? (openBlock(), createBlock("button", {
                  key: 1,
                  type: "button",
                  onClick: withModifiers(nextImage, ["stop"]),
                  class: "absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20 focus:outline-none sm:right-8",
                  "aria-label": "Next image"
                }, [(openBlock(), createBlock("svg", {
                  class: "h-6 w-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M9 5l7 7-7 7"
                })]))])) : createCommentVNode("", true),
                createVNode("div", { class: "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-primary/20 bg-primary-dark/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-sm" }, toDisplayString(currentImageIndex.value + 1) + " / " + toDisplayString(unref(project).images.length), 1)
              ], 32)) : createCommentVNode("", true)];
            }),
            _: 1
          })]))])];
        }),
        _: 1
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project/[_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=__id_-DfnYEzL_.mjs.map
