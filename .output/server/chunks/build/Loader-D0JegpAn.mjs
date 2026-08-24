import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

var _sfc_main = {
  __name: "Loader",
  __ssrInlineRender: true,
  props: { label: {
    type: String,
    default: "Loading..."
  } },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-[50vh] flex-col items-center justify-center gap-4 py-8" }, _attrs))}><div class="relative flex items-center justify-center"><div class="absolute h-20 w-20 animate-ping rounded-full bg-secondary/15 duration-1000"></div><div class="h-16 w-16 rounded-full border-4 border-secondary/20"></div><div class="absolute h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-secondary"></div><div class="absolute h-3 w-3 rounded-full bg-primary/80 animate-pulse"></div></div>`);
      if (__props.label) _push(`<span class="text-xs font-semibold tracking-widest text-secondary-dark uppercase animate-pulse">${ssrInterpolate(__props.label)}</span>`);
      else _push(`<!---->`);
      _push(`</div>`);
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Loader-D0JegpAn.mjs.map
