import { c as useHead$1, n as navigateTo } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, withModifiers, openBlock, createBlock, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead$1({ title: "APGIIIT.com - Amit Prafulla" });
    const typeText = ref("");
    const searchQuery = ref("");
    const handleSearch = () => {
      if (searchQuery.value.trim()) navigateTo({
        path: "/blog",
        query: { q: searchQuery.value.trim() }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(nuxt_layout_default, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`<div class="min-h-screen bg-gray-100 text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary"${_scopeId}><section class="relative overflow-hidden border-b border-secondary-dark/15 bg-secondary/30 py-16 sm:py-24"${_scopeId}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"${_scopeId}><div class="hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10"${_scopeId}><div class="flex flex-col justify-center lg:col-span-7"${_scopeId}><div class="inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark shadow-sm"${_scopeId}><span class="h-2 w-2 rounded-full bg-secondary-dark animate-pulse"${_scopeId}></span> Full Stack &amp; Distributed Systems </div><h1 class="mt-6 min-h-[4rem] text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl"${_scopeId}><span${_scopeId}>${ssrInterpolate(typeText.value)}</span><span class="inline-block w-1 animate-pulse text-secondary-dark"${_scopeId}>|</span></h1><p class="mt-6 text-base leading-relaxed text-primary-dark/80 sm:text-lg"${_scopeId}> I am a software engineer specializing in scalable backend architectures, high-performance web applications, and intuitive interfaces with modern JavaScript and Python ecosystems. </p><form class="mt-8 max-w-lg"${_scopeId}><div class="relative flex items-center"${_scopeId}><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-primary-dark/50"${_scopeId}><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"${_scopeId}></path></svg></div><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="Search articles, notes, and topics..." class="w-full rounded-xl border border-secondary-dark/25 bg-primary py-3 pl-10 pr-24 text-sm text-primary-dark placeholder:text-primary-dark/40 shadow-sm focus:border-secondary-dark focus:outline-none focus:ring-1 focus:ring-secondary-dark transition-all"${_scopeId}><button type="submit" class="absolute right-1.5 rounded-lg bg-secondary-dark px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90 transition-all"${_scopeId}> Search </button></div></form><div class="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/80"${_scopeId}><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>FastAPI &amp; Django</span><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>Node.js &amp; Nuxt</span><span class="rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm"${_scopeId}>Docker &amp; Cloud</span></div></div><div class="relative flex justify-center lg:col-span-5"${_scopeId}><div class="relative aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl"${_scopeId}><img class="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105" src="https://softgenie.org/media/images/generic/home.jpeg" alt="Amit Prafulla Portfolio Visual" loading="lazy"${_scopeId}></div></div></div></div></section><section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"${_scopeId}><div class="grid grid-cols-1 gap-6 sm:grid-cols-3"${_scopeId}><div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm"${_scopeId}><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm"${_scopeId}><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"${_scopeId}></path></svg></div><h3 class="mt-4 text-base font-bold text-primary-dark"${_scopeId}>Full-Stack Architecture</h3><p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75"${_scopeId}> End-to-end web applications built with Vue/Nuxt, React, Python microservices, and relational databases. </p></div><div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm"${_scopeId}><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm"${_scopeId}><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"${_scopeId}></path></svg></div><h3 class="mt-4 text-base font-bold text-primary-dark"${_scopeId}>Scalable Infrastructure</h3><p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75"${_scopeId}> Containerized environments, automated testing, message queues, and cloud deployments across AWS and GCP. </p></div><div class="rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm"${_scopeId}><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm"${_scopeId}><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"${_scopeId}></path></svg></div><h3 class="mt-4 text-base font-bold text-primary-dark"${_scopeId}>Technical Writing &amp; Blogs</h3><p class="mt-1.5 text-xs leading-relaxed text-primary-dark/75"${_scopeId}> Articles and engineering walkthroughs exploring system design, algorithms, web security, and tooling. </p></div></div></section></div>`);
          else return [createVNode("div", { class: "min-h-screen bg-gray-100 text-primary-dark antialiased selection:bg-secondary-dark selection:text-primary" }, [createVNode("section", { class: "relative overflow-hidden border-b border-secondary-dark/15 bg-secondary/30 py-16 sm:py-24" }, [createVNode("div", { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" }, [createVNode("div", { class: "hero grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10" }, [createVNode("div", { class: "flex flex-col justify-center lg:col-span-7" }, [
            createVNode("div", { class: "inline-flex items-center gap-2 self-start rounded-full border border-secondary-dark/30 bg-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-dark shadow-sm" }, [createVNode("span", { class: "h-2 w-2 rounded-full bg-secondary-dark animate-pulse" }), createTextVNode(" Full Stack & Distributed Systems ")]),
            createVNode("h1", { class: "mt-6 min-h-[4rem] text-4xl font-black tracking-tight text-primary-dark sm:text-5xl lg:text-6xl" }, [createVNode("span", null, toDisplayString(typeText.value), 1), createVNode("span", { class: "inline-block w-1 animate-pulse text-secondary-dark" }, "|")]),
            createVNode("p", { class: "mt-6 text-base leading-relaxed text-primary-dark/80 sm:text-lg" }, " I am a software engineer specializing in scalable backend architectures, high-performance web applications, and intuitive interfaces with modern JavaScript and Python ecosystems. "),
            createVNode("form", {
              onSubmit: withModifiers(handleSearch, ["prevent"]),
              class: "mt-8 max-w-lg"
            }, [createVNode("div", { class: "relative flex items-center" }, [
              createVNode("div", { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-primary-dark/50" }, [(openBlock(), createBlock("svg", {
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              })]))]),
              withDirectives(createVNode("input", {
                type: "text",
                "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                placeholder: "Search articles, notes, and topics...",
                class: "w-full rounded-xl border border-secondary-dark/25 bg-primary py-3 pl-10 pr-24 text-sm text-primary-dark placeholder:text-primary-dark/40 shadow-sm focus:border-secondary-dark focus:outline-none focus:ring-1 focus:ring-secondary-dark transition-all"
              }, null, 8, ["onUpdate:modelValue"]), [[vModelText, searchQuery.value]]),
              createVNode("button", {
                type: "submit",
                class: "absolute right-1.5 rounded-lg bg-secondary-dark px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm hover:bg-secondary-dark/90 transition-all"
              }, " Search ")
            ])], 32),
            createVNode("div", { class: "mt-8 flex flex-wrap gap-3 text-xs font-semibold text-primary-dark/80" }, [
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "FastAPI & Django"),
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "Node.js & Nuxt"),
              createVNode("span", { class: "rounded-lg border border-secondary-dark/20 bg-primary px-3 py-1.5 shadow-sm" }, "Docker & Cloud")
            ])
          ]), createVNode("div", { class: "relative flex justify-center lg:col-span-5" }, [createVNode("div", { class: "relative aspect-4/5 w-full max-w-md overflow-hidden rounded-2xl border border-secondary-dark/30 bg-secondary shadow-2xl" }, [createVNode("img", {
            class: "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105",
            src: "https://softgenie.org/media/images/generic/home.jpeg",
            alt: "Amit Prafulla Portfolio Visual",
            loading: "lazy"
          })])])])])]), createVNode("section", { class: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" }, [createVNode("div", { class: "grid grid-cols-1 gap-6 sm:grid-cols-3" }, [
            createVNode("div", { class: "rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm" }, [
              createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm" }, [(openBlock(), createBlock("svg", {
                class: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              })]))]),
              createVNode("h3", { class: "mt-4 text-base font-bold text-primary-dark" }, "Full-Stack Architecture"),
              createVNode("p", { class: "mt-1.5 text-xs leading-relaxed text-primary-dark/75" }, " End-to-end web applications built with Vue/Nuxt, React, Python microservices, and relational databases. ")
            ]),
            createVNode("div", { class: "rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm" }, [
              createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm" }, [(openBlock(), createBlock("svg", {
                class: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })]))]),
              createVNode("h3", { class: "mt-4 text-base font-bold text-primary-dark" }, "Scalable Infrastructure"),
              createVNode("p", { class: "mt-1.5 text-xs leading-relaxed text-primary-dark/75" }, " Containerized environments, automated testing, message queues, and cloud deployments across AWS and GCP. ")
            ]),
            createVNode("div", { class: "rounded-2xl border border-secondary-dark/20 bg-secondary/30 p-6 shadow-sm" }, [
              createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary-dark shadow-sm" }, [(openBlock(), createBlock("svg", {
                class: "h-5 w-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor"
              }, [createVNode("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              })]))]),
              createVNode("h3", { class: "mt-4 text-base font-bold text-primary-dark" }, "Technical Writing & Blogs"),
              createVNode("p", { class: "mt-1.5 text-xs leading-relaxed text-primary-dark/75" }, " Articles and engineering walkthroughs exploring system design, algorithms, web security, and tooling. ")
            ])
          ])])])];
        }),
        _: 1
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pages-BM5QaNGY.mjs.map
