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
    const galleryId = ref(route.params.id || route.params._id);
    const showLightbox = ref(false);
    const currentImageIndex = ref(0);
    const { data: gallery, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`gallery-${galleryId.value}`, () => $fetch$2(`https://softgenie.org/api/gallery-posts/${galleryId.value}`), { key: `gallery-detail-${galleryId.value}` })), __temp = await __temp, __restore(), __temp);
    if (gallery.value) useSeoMeta$1({
      title: `${gallery.value.title} | APGIIIT Gallery`,
      description: gallery.value.meta_description || "Explore the gallery images and detailed travelogue."
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
      if (!((_b = (_a = gallery.value) == null ? void 0 : _a.images) == null ? void 0 : _b.length)) return;
      currentImageIndex.value = (currentImageIndex.value + 1) % gallery.value.images.length;
    };
    const prevImage = () => {
      var _a, _b;
      if (!((_b = (_a = gallery.value) == null ? void 0 : _a.images) == null ? void 0 : _b.length)) return;
      currentImageIndex.value = (currentImageIndex.value - 1 + gallery.value.images.length) % gallery.value.images.length;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_NuxtLink = NuxtLink;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white"${_scopeId}><main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"${_scopeId}><div class="mb-8 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/gallery",
              class: "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) _push3(`<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId2}></path></svg><span${_scopeId2}>Back to Gallery</span>`);
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
                })])), createVNode("span", null, "Back to Gallery")];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(pending)) {
              _push2(`<div class="flex min-h-[50vh] items-center justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (unref(error)) _push2(`<div class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-white py-16 text-center"${_scopeId}><span class="text-4xl"${_scopeId}>\u26A0\uFE0F</span><h2 class="mt-4 text-base font-bold text-slate-900"${_scopeId}>Failed to load story</h2><p class="mt-1 text-xs text-slate-500"${_scopeId}>The requested gallery entry could not be retrieved.</p><button type="button" class="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700"${_scopeId}> Try Again </button></div>`);
            else if (unref(gallery) && unref(gallery).images) {
              _push2(`<article class="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"${_scopeId}><div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6"${_scopeId}><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
              ssrRenderList(unref(gallery).tags, (tag) => {
                _push2(`<span class="rounded-md border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700"${_scopeId}> #${ssrInterpolate(tag.name)}</span>`);
              });
              _push2(`<!--]--></div>`);
              if (unref(gallery).date_posted) _push2(`<time class="text-xs font-medium text-slate-400"${_scopeId}> Published on ${ssrInterpolate(new Date(unref(gallery).date_posted).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }))}</time>`);
              else _push2(`<!---->`);
              _push2(`</div><div class="mt-8"${_scopeId}><h1 class="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"${_scopeId}>${ssrInterpolate(unref(gallery).title)}</h1>`);
              if (isClient.value && unref(gallery).description) _push2(`<div class="prose prose-slate mt-6 max-w-none text-base leading-relaxed text-slate-600"${_scopeId}>${(_a = unref(gallery).description) != null ? _a : ""}</div>`);
              else _push2(`<!---->`);
              _push2(`</div><div class="mt-12"${_scopeId}><div class="flex items-center justify-between pb-4"${_scopeId}><h2 class="text-lg font-bold text-slate-900"${_scopeId}>Photographs</h2><span class="text-xs font-medium text-slate-400"${_scopeId}>${ssrInterpolate(unref(gallery).images.length)} captures</span></div><div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
              ssrRenderList(unref(gallery).images, (image, index) => {
                _push2(`<div class="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"${_scopeId}><img${ssrRenderAttr("src", getImageUrl(image.image))}${ssrRenderAttr("alt", image.caption || unref(gallery).title)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy"${_scopeId}><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"${_scopeId}></div><div class="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between"${_scopeId}><span class="text-xs font-medium truncate pr-2"${_scopeId}>${ssrInterpolate(image.caption || "View full photo")}</span><svg class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"${_scopeId}></path></svg></div></div>`);
              });
              _push2(`<!--]--></div></div></article>`);
            } else _push2(`<!---->`);
            _push2(`</main>`);
            ssrRenderTeleport(_push2, (_push3) => {
              var _a2, _b;
              if (showLightbox.value && isClient.value && ((_b = (_a2 = unref(gallery)) == null ? void 0 : _a2.images) == null ? void 0 : _b.length)) {
                _push3(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md select-none" tabindex="0"${_scopeId}><button type="button" class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none" aria-label="Close Preview"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button>`);
                if (unref(gallery).images.length > 1) _push3(`<button type="button" class="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:left-8" aria-label="Previous image"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"${_scopeId}></path></svg></button>`);
                else _push3(`<!---->`);
                _push3(`<div class="flex max-h-[85vh] max-w-5xl flex-col items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", getImageUrl(unref(gallery).images[currentImageIndex.value].image))}${ssrRenderAttr("alt", unref(gallery).images[currentImageIndex.value].caption || unref(gallery).title)} class="max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"${_scopeId}>`);
                if (unref(gallery).images[currentImageIndex.value].caption) _push3(`<p class="mt-3 text-center text-xs font-medium text-white/80"${_scopeId}>${ssrInterpolate(unref(gallery).images[currentImageIndex.value].caption)}</p>`);
                else _push3(`<!---->`);
                _push3(`</div>`);
                if (unref(gallery).images.length > 1) _push3(`<button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:right-8" aria-label="Next image"${_scopeId}><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"${_scopeId}></path></svg></button>`);
                else _push3(`<!---->`);
                _push3(`<div class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm"${_scopeId}>${ssrInterpolate(currentImageIndex.value + 1)} / ${ssrInterpolate(unref(gallery).images.length)}</div></div>`);
              } else _push3(`<!---->`);
            }, "body", false, _parent2);
            _push2(`</div>`);
          } else return [createVNode("div", { class: "min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white" }, [createVNode("main", { class: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" }, [createVNode("div", { class: "mb-8 flex items-center justify-between" }, [createVNode(_component_NuxtLink, {
            to: "/gallery",
            class: "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900"
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
            })])), createVNode("span", null, "Back to Gallery")]),
            _: 1
          })]), unref(pending) ? (openBlock(), createBlock("div", {
            key: 0,
            class: "flex min-h-[50vh] items-center justify-center"
          }, [createVNode(_component_Loader)])) : unref(error) ? (openBlock(), createBlock("div", {
            key: 1,
            class: "flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose-200 bg-white py-16 text-center"
          }, [
            createVNode("span", { class: "text-4xl" }, "\u26A0\uFE0F"),
            createVNode("h2", { class: "mt-4 text-base font-bold text-slate-900" }, "Failed to load story"),
            createVNode("p", { class: "mt-1 text-xs text-slate-500" }, "The requested gallery entry could not be retrieved."),
            createVNode("button", {
              type: "button",
              onClick: () => unref(refresh)(),
              class: "mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700"
            }, " Try Again ", 8, ["onClick"])
          ])) : unref(gallery) && unref(gallery).images ? (openBlock(), createBlock("article", {
            key: 2,
            class: "overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"
          }, [
            createVNode("div", { class: "flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6" }, [createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(gallery).tags, (tag) => {
              return openBlock(), createBlock("span", {
                key: tag.name,
                class: "rounded-md border border-indigo-100 bg-indigo-50/80 px-3 py-1 text-xs font-semibold text-indigo-700"
              }, " #" + toDisplayString(tag.name), 1);
            }), 128))]), unref(gallery).date_posted ? (openBlock(), createBlock("time", {
              key: 0,
              class: "text-xs font-medium text-slate-400"
            }, " Published on " + toDisplayString(new Date(unref(gallery).date_posted).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })), 1)) : createCommentVNode("", true)]),
            createVNode("div", { class: "mt-8" }, [createVNode("h1", { class: "text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl" }, toDisplayString(unref(gallery).title), 1), isClient.value && unref(gallery).description ? (openBlock(), createBlock("div", {
              key: 0,
              class: "prose prose-slate mt-6 max-w-none text-base leading-relaxed text-slate-600",
              innerHTML: unref(gallery).description
            }, null, 8, ["innerHTML"])) : createCommentVNode("", true)]),
            createVNode("div", { class: "mt-12" }, [createVNode("div", { class: "flex items-center justify-between pb-4" }, [createVNode("h2", { class: "text-lg font-bold text-slate-900" }, "Photographs"), createVNode("span", { class: "text-xs font-medium text-slate-400" }, toDisplayString(unref(gallery).images.length) + " captures", 1)]), createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(gallery).images, (image, index) => {
              return openBlock(), createBlock("div", {
                key: index,
                onClick: ($event) => openLightbox(index),
                class: "group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              }, [
                createVNode("img", {
                  src: getImageUrl(image.image),
                  alt: image.caption || unref(gallery).title,
                  class: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
                createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-between" }, [createVNode("span", { class: "text-xs font-medium truncate pr-2" }, toDisplayString(image.caption || "View full photo"), 1), (openBlock(), createBlock("svg", {
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
              return [showLightbox.value && isClient.value && ((_b = (_a2 = unref(gallery)) == null ? void 0 : _a2.images) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md select-none",
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
                  class: "absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none",
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
                unref(gallery).images.length > 1 ? (openBlock(), createBlock("button", {
                  key: 0,
                  type: "button",
                  onClick: withModifiers(prevImage, ["stop"]),
                  class: "absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:left-8",
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
                  src: getImageUrl(unref(gallery).images[currentImageIndex.value].image),
                  alt: unref(gallery).images[currentImageIndex.value].caption || unref(gallery).title,
                  class: "max-h-[75vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300"
                }, null, 8, ["src", "alt"]), unref(gallery).images[currentImageIndex.value].caption ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-3 text-center text-xs font-medium text-white/80"
                }, toDisplayString(unref(gallery).images[currentImageIndex.value].caption), 1)) : createCommentVNode("", true)]),
                unref(gallery).images.length > 1 ? (openBlock(), createBlock("button", {
                  key: 1,
                  type: "button",
                  onClick: withModifiers(nextImage, ["stop"]),
                  class: "absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none sm:right-8",
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
                createVNode("div", { class: "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm" }, toDisplayString(currentImageIndex.value + 1) + " / " + toDisplayString(unref(gallery).images.length), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery/[_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=__id_-N7q_rncn.mjs.map
