import { d as useNuxtApp, P as PageRouteSymbol, u as useRoute$1, r as resolveLayoutName, L as LayoutSymbol, e as _mergeTransitionProps, f as _wrapInTransition, g as LayoutMetaSymbol } from '../virtual/entry.mjs';
import { defineComponent, inject, computed, unref, provide, shallowRef, defineAsyncComponent, h, Suspense, nextTick, mergeProps, shallowReactive } from 'vue';
import { useRoute } from 'vue-router';

var virtual_nuxt__nuxt_2Flayouts_default = {
  dashboard: defineAsyncComponent(() => import('./dashboard-D_Ct9aAD.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-DoZXo_E6.mjs').then((m) => m.default || m))
};
var LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(virtual_nuxt__nuxt_2Flayouts_default[props.name], props.layoutProps, context.slots);
  }
});
var nuxt_layout_default = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [
        String,
        Boolean,
        Object
      ],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = !injectedRoute || injectedRoute === useRoute$1() ? useRoute() : injectedRoute;
    const layout = computed(() => {
      let layout2 = resolveLayoutName(route, props.name);
      if (layout2 && !(layout2 in virtual_nuxt__nuxt_2Flayouts_default)) {
        if (props.fallback) layout2 = unref(props.fallback);
      }
      return layout2;
    });
    provide(LayoutSymbol, layout);
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      var _a;
      const hasTransition = !!layout.value && layout.value in virtual_nuxt__nuxt_2Flayouts_default && !!((_a = route == null ? void 0 : route.meta.layoutTransition) != null ? _a : false);
      const transitionProps = hasTransition && _mergeTransitionProps([
        route == null ? void 0 : route.meta.layoutTransition,
        false,
        {
          onBeforeLeave() {
            nuxtApp["~transitionPromise"] = new Promise((resolve) => {
              nuxtApp["~transitionFinish"] = resolve;
            });
          },
          onAfterLeave() {
            var _a2;
            (_a2 = nuxtApp["~transitionFinish"]) == null ? void 0 : _a2.call(nuxtApp);
            delete nuxtApp["~transitionFinish"];
            delete nuxtApp["~transitionPromise"];
          }
        }
      ]);
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(transitionProps, { default: () => h(Suspense, {
        suspensible: true,
        onResolve: async () => {
          await nextTick(done);
        }
      }, { default: () => {
        var _a2;
        return h(LayoutProvider, {
          layoutProps: mergeProps(context.attrs, (_a2 = route.meta.layoutProps) != null ? _a2 : {}, { ref: layoutRef }),
          key: layout.value || void 0,
          name: layout.value,
          shouldProvide: !props.name,
          isRenderingNewLayout: (name) => {
            return name !== previouslyRenderedLayout && name === layout.value;
          },
          hasTransition
        }, context.slots);
      } }) }).default();
    };
  }
});
var LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: { type: [String, Boolean] },
    layoutProps: { type: Object },
    hasTransition: { type: Boolean },
    shouldProvide: { type: Boolean },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) provide(LayoutMetaSymbol, { isCurrent: (route) => name === false || name === resolveLayoutName(route) });
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute$1();
    const enclosingLayout = inject(LayoutMetaSymbol, null);
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) && (!enclosingLayout || enclosingLayout.isCurrent(vueRouterRoute)) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in virtual_nuxt__nuxt_2Flayouts_default)) return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      return h(LayoutLoader, {
        key: name,
        layoutProps: props.layoutProps,
        name
      }, context.slots);
    };
  }
});

export { nuxt_layout_default as n };
//# sourceMappingURL=nuxt-layout-6ds4NoS8.mjs.map
