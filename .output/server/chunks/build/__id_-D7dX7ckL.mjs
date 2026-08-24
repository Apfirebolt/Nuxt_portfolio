import { _ as _plugin_vue_export_helper_default, u as useRoute$1, a as useAsyncData, $ as $fetch$2, b as useSeoMeta$1 } from '../virtual/entry.mjs';
import { n as nuxt_layout_default } from './nuxt-layout-6ds4NoS8.mjs';
import { _ as _sfc_main$1 } from './Loader-D0JegpAn.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const blogId = ref(route.params._id);
    const { data: blog, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("blog", async () => {
      try {
        return await $fetch$2(`https://softgenie.org/api/blogs/${blogId.value}`);
      } catch (err) {
        console.error("Error fetching blog:", err);
        throw err;
      }
    }, { key: () => `blog-${blogId.value}` })), __temp = await __temp, __restore(), __temp);
    if (blog.value) useSeoMeta$1({
      title: `${blog.value.title} - Blog Details`,
      description: blog.value.meta_description || "Explore the Blog images and details."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = nuxt_layout_default;
      const _component_Loader = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<div class="bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6" data-v-27ec353c${_scopeId}>`);
            if (unref(blog) && unref(blog).images) {
              _push2(`<div class="container mx-auto bg-white px-4 py-6 rounded shadow-lg" data-aos="fade-left" data-v-27ec353c${_scopeId}><div class="flex justify-between items-center mb-4" data-v-27ec353c${_scopeId}><h1 class="text-3xl font-bold mb-6 mt-3" data-v-27ec353c${_scopeId}>${ssrInterpolate(unref(blog).title)}</h1><p data-v-27ec353c${_scopeId}><span class="text-primary-dark font-semibold" data-v-27ec353c${_scopeId}>Posted on:</span> ${ssrInterpolate(new Date(unref(blog).date_posted).toLocaleDateString())}</p></div><div class="my-3 flex flex-wrap items-center gap-2" data-v-27ec353c${_scopeId}><h3 class="bg-primary border-4 border-secondary px-2 py-1" data-v-27ec353c${_scopeId}>Tags</h3>`);
              if (unref(blog).tags.length > 0) {
                _push2(`<ul class="flex flex-wrap gap-2" data-v-27ec353c${_scopeId}><!--[-->`);
                ssrRenderList(unref(blog).tags, (tag, index) => {
                  _push2(`<li class="bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2" data-v-27ec353c${_scopeId}>${ssrInterpolate(tag.name)}</li>`);
                });
                _push2(`<!--]--></ul>`);
              } else _push2(`<p class="text-primary-dark" data-v-27ec353c${_scopeId}> No tags available for this blog post. </p>`);
              _push2(`</div><div class="grid" data-v-27ec353c${_scopeId}><div class="grid-cols-2" data-v-27ec353c${_scopeId}><p data-v-27ec353c${_scopeId}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi? </p></div><div class="grid-cols-2" data-v-27ec353c${_scopeId}><p data-v-27ec353c${_scopeId}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi? </p></div></div>`);
              if (isClient.value) _push2(`<div class="bg-white px-4 py-6" data-v-27ec353c${_scopeId}><p class="text-white" data-v-27ec353c${_scopeId}>${(_a = unref(blog).content) != null ? _a : ""}</p></div>`);
              else _push2(`<!---->`);
              _push2(`<div class="grid md:grid-cols-2 gap-6 my-6" data-v-27ec353c${_scopeId}><!--[-->`);
              ssrRenderList(unref(blog).images, (image, index) => {
                _push2(`<div class="card" data-v-27ec353c${_scopeId}><img${ssrRenderAttr("src", `https://softgenie.org${image.image}`)} alt="Blog Image" class="w-full h-64 rounded shadow" data-v-27ec353c${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else if (unref(pending)) {
              _push2(`<div data-v-27ec353c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (unref(error)) _push2(`<div data-v-27ec353c${_scopeId}><p data-v-27ec353c${_scopeId}>Error loading blog. Please try again later.</p></div>`);
            else _push2(`<!---->`);
            _push2(`</div>`);
          } else return [createVNode("div", { class: "bg-gradient-to-r from-primary-dark to-secondary-dark py-4 px-6" }, [unref(blog) && unref(blog).images ? (openBlock(), createBlock("div", {
            key: 0,
            class: "container mx-auto bg-white px-4 py-6 rounded shadow-lg",
            "data-aos": "fade-left"
          }, [
            createVNode("div", { class: "flex justify-between items-center mb-4" }, [createVNode("h1", { class: "text-3xl font-bold mb-6 mt-3" }, toDisplayString(unref(blog).title), 1), createVNode("p", null, [createVNode("span", { class: "text-primary-dark font-semibold" }, "Posted on:"), createTextVNode(" " + toDisplayString(new Date(unref(blog).date_posted).toLocaleDateString()), 1)])]),
            createVNode("div", { class: "my-3 flex flex-wrap items-center gap-2" }, [createVNode("h3", { class: "bg-primary border-4 border-secondary px-2 py-1" }, "Tags"), unref(blog).tags.length > 0 ? (openBlock(), createBlock("ul", {
              key: 0,
              class: "flex flex-wrap gap-2"
            }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(blog).tags, (tag, index) => {
              return openBlock(), createBlock("li", {
                key: index,
                class: "bg-primary-dark text-center text-white px-4 py-1 rounded-full text-sm shadow mr-2"
              }, toDisplayString(tag.name), 1);
            }), 128))])) : (openBlock(), createBlock("p", {
              key: 1,
              class: "text-primary-dark"
            }, " No tags available for this blog post. "))]),
            createVNode("div", { class: "grid" }, [createVNode("div", { class: "grid-cols-2" }, [createVNode("p", null, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi? ")]), createVNode("div", { class: "grid-cols-2" }, [createVNode("p", null, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sequi? ")])]),
            isClient.value ? (openBlock(), createBlock("div", {
              key: 0,
              class: "bg-white px-4 py-6"
            }, [createVNode("p", {
              innerHTML: unref(blog).content,
              class: "text-white"
            }, null, 8, ["innerHTML"])])) : createCommentVNode("", true),
            createVNode("div", { class: "grid md:grid-cols-2 gap-6 my-6" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(blog).images, (image, index) => {
              return openBlock(), createBlock("div", {
                key: index,
                class: "card"
              }, [createVNode("img", {
                src: `https://softgenie.org${image.image}`,
                alt: "Blog Image",
                class: "w-full h-64 rounded shadow"
              }, null, 8, ["src"])]);
            }), 128))])
          ])) : unref(pending) ? (openBlock(), createBlock("div", { key: 1 }, [createVNode(_component_Loader)])) : unref(error) ? (openBlock(), createBlock("div", { key: 2 }, [createVNode("p", null, "Error loading blog. Please try again later.")])) : createCommentVNode("", true)])];
        }),
        _: 1
      }, _parent));
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var __id__default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-27ec353c"]]);

export { __id__default as default };
//# sourceMappingURL=__id_-D7dX7ckL.mjs.map
