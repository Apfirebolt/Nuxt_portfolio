import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { N as NuxtLink, h as gsapWithCSS } from '../virtual/entry.mjs';
import * as e$1 from 'vue';
import { ref, mergeProps, withCtx, createVNode, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, Transition, withDirectives, vShow, createElementBlock, createElementVNode, defineComponent, computed, inject, provide, nextTick, watchEffect, h, watch, getCurrentInstance, Teleport, reactive, shallowRef, cloneVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

var logo_default = "" + buildAssetsURL("logo.CGfZJ2cS.png");
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [createElementVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  })]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [createElementVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })]);
}
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$3() {
  let a2 = [], s2 = {
    addEventListener(e2, t2, r2, i2) {
      return e2.addEventListener(t2, r2, i2), s2.add(() => e2.removeEventListener(t2, r2, i2));
    },
    requestAnimationFrame(...e2) {
      let t2 = requestAnimationFrame(...e2);
      s2.add(() => cancelAnimationFrame(t2));
    },
    nextFrame(...e2) {
      s2.requestAnimationFrame(() => {
        s2.requestAnimationFrame(...e2);
      });
    },
    setTimeout(...e2) {
      let t2 = setTimeout(...e2);
      s2.add(() => clearTimeout(t2));
    },
    microTask(...e2) {
      let t2 = { current: true };
      return t$4(() => {
        t2.current && e2[0]();
      }), s2.add(() => {
        t2.current = false;
      });
    },
    style(e2, t2, r2) {
      let i2 = e2.style.getPropertyValue(t2);
      return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
        Object.assign(e2.style, { [t2]: i2 });
      });
    },
    group(e2) {
      let t2 = o$3();
      return e2(t2), this.add(() => t2.dispose());
    },
    add(e2) {
      return a2.push(e2), () => {
        let t2 = a2.indexOf(e2);
        if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
      };
    },
    dispose() {
      for (let e2 of a2.splice(0)) e2();
    }
  };
  return s2;
}
var r;
var n$4 = /* @__PURE__ */ Symbol("headlessui.useid");
var o$2 = 0;
var i$5 = (r = e$1.useId) != null ? r : function() {
  return e$1.inject(n$4, () => `${++o$2}`)();
};
function o$1(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$5(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = /* @__PURE__ */ new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
}
var i$4 = Object.defineProperty;
var d$3 = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: r2
}) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
var s$2 = class {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
var c$2 = new s$2();
function i$3(r2) {
  if (c$2.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$1(r2);
    if (n2) return n2.ownerDocument;
  }
}
var c$1 = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])"
].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$3 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$3 || {});
var T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {});
var F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E$2(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h$1 || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$5(r2, {
    [0]() {
      return e2.matches(c$1);
    },
    [1]() {
      let l2 = e2;
      for (; l2 !== null; ) {
        if (l2.matches(c$1)) return true;
        l2 = l2.parentElement;
      }
      return false;
    }
  });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null ? void 0 : e2.focus({ preventScroll: true });
}
var H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o2.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s2 = p + a2;
    if (r2 & 16) s2 = (s2 + d2) % d2;
    else {
      if (s2 < 0) return 3;
      if (s2 >= d2) return 1;
    }
    u2 = n2[s2], u2 == null ? void 0 : u2.focus(L), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$2();
}
function u$4(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = (function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    })(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h$1.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$4("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$4("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var N$2 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$2 || {});
var S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$2({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) return u$5((a2 = n2.unmount) == null || a2 ? 0 : 1, {
    [0]() {
      return null;
    },
    [1]() {
      return y$1({
        ...i2,
        props: {
          ...n2,
          hidden: true,
          style: { display: "none" }
        }
      });
    }
  });
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h$6;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0) throw new Error([
        'Passing props on "template"!',
        "",
        `The current component <${i2} /> is rendering a "template".`,
        "However we need to passthrough the following props:",
        Object.keys(l2).concat(Object.keys(t2)).map((s2) => s2.trim()).filter((s2, g, R2) => R2.indexOf(s2) === g).sort((s2, g) => s2.localeCompare(g)).map((s2) => `  - ${s2}`).join(`
`),
        "",
        "You can apply a few solutions:",
        ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)
      ].join(`
`));
      let p = j((h$6 = u2.props) != null ? h$6 : {}, l2, d2), f2 = cloneVNode(u2, p, true);
      for (let s2 in p) s2.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s2] = p[s2]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  var _a;
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? ((_a = e2[n2]) != null ? _a : e2[n2] = [], e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$3 || {});
var f$1 = defineComponent({
  name: "Hidden",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    features: {
      type: Number,
      default: 1
    }
  },
  setup(t2, { slots: n2, attrs: i2 }) {
    return () => {
      var r2;
      let { features: e2, ...d2 } = t2;
      return A$2({
        ourProps: {
          "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0,
          hidden: (e2 & 4) === 4 ? true : void 0,
          style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" }
          }
        },
        theirProps: d2,
        slot: {},
        attrs: i2,
        slots: n2,
        name: "Hidden"
      });
    };
  }
});
var n$1 = /* @__PURE__ */ Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function l$1() {
  return inject(n$1, null);
}
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
var t$1 = [];
function E$1(n2, e2, o2, r2) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$1(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$1 || {});
var ue = Object.assign(defineComponent({
  name: "FocusTrap",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    initialFocus: {
      type: Object,
      default: null
    },
    features: {
      type: Number,
      default: 30
    },
    containers: {
      type: [Object, Function],
      default: ref(/* @__PURE__ */ new Set())
    }
  },
  inheritAttrs: false,
  setup(t2, { attrs: n$5, slots: r2, expose: l2 }) {
    let o2 = ref(null);
    l2({
      el: o2,
      $el: o2
    });
    let i2 = computed(() => i$3(o2)), e2 = ref(false);
    $$1({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
    let m2 = z$1({
      ownerDocument: i2,
      container: o2,
      initialFocus: computed(() => t2.initialFocus)
    }, computed(() => e2.value && Boolean(t2.features & 2)));
    J({
      ownerDocument: i2,
      container: o2,
      containers: t2.containers,
      previousActiveElement: m2
    }, computed(() => e2.value && Boolean(t2.features & 8)));
    let f2 = n();
    function a2(u2) {
      let T2 = o$1(o2);
      if (!T2) return;
      ((w2) => w2())(() => {
        u$5(f2.value, {
          [d$2.Forwards]: () => {
            P(T2, N$3.First, { skipElements: [u2.relatedTarget] });
          },
          [d$2.Backwards]: () => {
            P(T2, N$3.Last, { skipElements: [u2.relatedTarget] });
          }
        });
      });
    }
    let s2 = ref(false);
    function F2(u2) {
      u2.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
        s2.value = false;
      }));
    }
    function H2(u2) {
      if (!e2.value) return;
      let T2 = B(t2.containers);
      o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
      let d2 = u2.relatedTarget;
      d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$1(T2, d2) || (s2.value ? P(o$1(o2), u$5(f2.value, {
        [d$2.Forwards]: () => N$3.Next,
        [d$2.Backwards]: () => N$3.Previous
      }) | N$3.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
    }
    return () => {
      let u2 = {}, T2 = {
        ref: o2,
        onKeydown: F2,
        onFocusout: H2
      }, { features: d2, initialFocus: w2, containers: Q, ...O2 } = t2;
      return h(Fragment, [
        Boolean(d2 & 4) && h(f$1, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": true,
          onFocus: a2,
          features: u$3.Focusable
        }),
        A$2({
          ourProps: T2,
          theirProps: {
            ...n$5,
            ...O2
          },
          slot: u2,
          attrs: n$5,
          slots: r2,
          name: "FocusTrap"
        }),
        Boolean(d2 & 4) && h(f$1, {
          as: "button",
          type: "button",
          "data-headlessui-focus-guard": true,
          onFocus: a2,
          features: u$3.Focusable
        })
      ]);
    };
  }
}), { features: A$1 });
function W(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$4(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$1({ ownerDocument: t2 }, n2) {
  W(n2);
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null);
  ref(false);
  return o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$1(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$1(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$1(t2) {
  return shallowRef(t2.getSnapshot());
}
function a$1(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return {
    getSnapshot() {
      return t2;
    },
    subscribe(e2) {
      return n2.add(e2), () => n2.delete(e2);
    },
    dispatch(e2, ...s2) {
      let i2 = r2[e2].call(t2, ...s2);
      i2 && (t2 = i2, n2.forEach((c2) => c2()));
    }
  };
}
function c() {
  let o2;
  return {
    before({ doc: e2 }) {
      var l2;
      let n2 = e2.documentElement;
      o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
    },
    after({ doc: e2, d: n2 }) {
      let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
      n2.style(t2, "paddingRight", `${r2}px`);
    }
  };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s2;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$3();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s2 = (void 0).scrollY) != null ? s2 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
var a = a$1(() => /* @__PURE__ */ new Map(), {
  PUSH(e2, n2) {
    var o2;
    let t2 = (o2 = this.get(e2)) != null ? o2 : {
      doc: e2,
      count: 0,
      d: o$3(),
      meta: /* @__PURE__ */ new Set()
    };
    return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
  },
  POP(e2, n2) {
    let t2 = this.get(e2);
    return t2 && (t2.count--, t2.meta.delete(n2)), this;
  },
  SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
    let o2 = {
      doc: e2,
      d: n2,
      meta: m(t2)
    }, c$3 = [
      w$1(),
      c(),
      l()
    ];
    c$3.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$3.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
  },
  SCROLL_ALLOW({ d: e2 }) {
    e2.dispose();
  },
  TEARDOWN({ doc: e2 }) {
    this.delete(e2);
  }
});
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$2, n2) {
  let i2 = m$1(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
var i = /* @__PURE__ */ new Map();
var t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$1(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, {
      "aria-hidden": e2.getAttribute("aria-hidden"),
      inert: e2.inert
    }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return {
    resolveContainers: u2,
    contains(n2) {
      return u2().some((l2) => l2.contains(n2));
    },
    mainTreeNodeRef: t2,
    MainTreeNode() {
      return H2 != null ? null : h(f$1, {
        features: u$3.Hidden,
        ref: t2
      });
    }
  };
}
var e = /* @__PURE__ */ Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
var u$2 = defineComponent({
  name: "ForcePortalRoot",
  props: {
    as: {
      type: [Object, String],
      default: "template"
    },
    force: {
      type: Boolean,
      default: false
    }
  },
  setup(o2, { slots: t2, attrs: r2 }) {
    return provide(e, o2.force), () => {
      let { force: f2, ...n2 } = o2;
      return A$2({
        theirProps: n2,
        ourProps: {},
        slot: {},
        slots: t2,
        attrs: r2,
        name: "ForcePortalRoot"
      });
    };
  }
});
var u$1 = /* @__PURE__ */ Symbol("StackContext");
var s = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s || {});
function y() {
  return inject(u$1, () => {
  });
}
function R({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null ? void 0 : i2(...n2), a2(...n2);
  }
  provide(u$1, t2);
}
var u = /* @__PURE__ */ Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s2 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, {
    register: r2,
    slot: t2,
    name: o2,
    props: s2
  }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({
  name: "Description",
  props: {
    as: {
      type: [Object, String],
      default: "p"
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(t2, { attrs: o2, slots: s2 }) {
    var n2;
    let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$5()}`, r2 = w();
    return () => {
      let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2;
      return A$2({
        ourProps: {
          ...Object.entries(d2).reduce((a2, [g, m2]) => Object.assign(a2, { [g]: unref(m2) }), {}),
          id: e2
        },
        theirProps: c2,
        slot: l2.value,
        attrs: o2,
        slots: s2,
        name: i2
      });
    };
  }
});
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
var f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
var $ = defineComponent({
  name: "Portal",
  props: { as: {
    type: [Object, String],
    default: "div"
  } },
  setup(e2, { slots: t2, attrs: l2 }) {
    let r2 = ref(null);
    computed(() => i$3(r2));
    let o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
    n2.value && M(n2.value, (a2) => a2 + 1);
    let c2 = ref(false);
    watchEffect(() => {
      o2 || u2 != null && (n2.value = u2.resolveTarget());
    });
    let v2 = inject(d, null), g = false;
    getCurrentInstance();
    return watch(r2, () => {
      if (g || !v2) return;
      o$1(r2) && (g = true);
    }), () => {
      if (!c2.value || n2.value === null) return null;
      let a2 = {
        ref: r2,
        "data-headlessui-portal": ""
      };
      return h(Teleport, { to: n2.value }, A$2({
        ourProps: a2,
        theirProps: e2,
        slot: {},
        attrs: l2,
        slots: t2,
        name: "Portal"
      }));
    };
  }
});
var d = /* @__PURE__ */ Symbol("PortalParentContext");
function q() {
  let e2 = inject(d, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = {
    register: l2,
    unregister: r2,
    portals: t2
  };
  return [t2, defineComponent({
    name: "PortalWrapper",
    setup(o2, { slots: u2 }) {
      return provide(d, i2), () => {
        var n2;
        return (n2 = u2.default) == null ? void 0 : n2.call(u2);
      };
    }
  })];
}
var H$1 = /* @__PURE__ */ Symbol("PortalGroupContext");
var z = defineComponent({
  name: "PortalGroup",
  props: {
    as: {
      type: [Object, String],
      default: "template"
    },
    target: {
      type: Object,
      default: null
    }
  },
  setup(e2, { attrs: t2, slots: l2 }) {
    let r2 = reactive({ resolveTarget() {
      return e2.target;
    } });
    return provide(H$1, r2), () => {
      let { target: i2, ...o2 } = e2;
      return A$2({
        theirProps: o2,
        ourProps: {},
        slot: {},
        attrs: t2,
        slots: l2,
        name: "PortalGroup"
      });
    };
  }
});
var Te = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te || {});
var H = /* @__PURE__ */ Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = /* @__PURE__ */ new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
var A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var Ye = defineComponent({
  name: "Dialog",
  inheritAttrs: false,
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    static: {
      type: Boolean,
      default: false
    },
    unmount: {
      type: Boolean,
      default: true
    },
    open: {
      type: [Boolean, String],
      default: A
    },
    initialFocus: {
      type: Object,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: "dialog"
    }
  },
  emits: { close: (t2) => true },
  setup(t2, { emit: i2, attrs: l2, slots: p, expose: s$3 }) {
    var q$1, W2;
    let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$5()}`, u2 = ref(false);
    let r2 = false, g = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$1(), R$1 = computed(() => t2.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$3 = computed(() => i$3(m2));
    if (s$3({
      el: m2,
      $el: m2
    }), !(t2.open !== A || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
    if (typeof R$1.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R$1.value === A ? void 0 : t2.open}`);
    let c2 = computed(() => u2.value && R$1.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N$4 = inject(H, null) !== null, [Q, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N({
      portals: Q,
      defaultContainers: [computed(() => {
        var e2;
        return (e2 = h$2.panelRef.value) != null ? e2 : m2.value;
      })]
    }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N$4 || U2.value ? false : k$1.value);
    E(computed(() => {
      var e2, a2, d2;
      return (d2 = Array.from((a2 = (e2 = E$3.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
    }), te);
    let ae = computed(() => w2.value ? true : k$1.value);
    E(computed(() => {
      var e2, a2, d2;
      return (d2 = Array.from((a2 = (e2 = E$3.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
    }), ae), R({
      type: "Dialog",
      enabled: computed(() => c2.value === 0),
      element: m2,
      onUpdate: (e2, a2) => {
        if (a2 === "Dialog") return u$5(e2, {
          [s.Add]: () => D.value += 1,
          [s.Remove]: () => D.value -= 1
        });
      }
    });
    let re = k({
      name: "DialogDescription",
      slot: computed(() => ({ open: R$1.value }))
    }), M2 = ref(null), h$2 = {
      titleId: M2,
      panelRef: ref(null),
      dialogState: c2,
      setTitleId(e2) {
        M2.value !== e2 && (M2.value = e2);
      },
      close() {
        i2("close", false);
      }
    };
    provide(H, h$2);
    w$2(B2, (e2, a2) => {
      e2.preventDefault(), h$2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
    }, computed(() => !(!k$1.value || w2.value)));
    let ie = computed(() => !(w2.value || c2.value !== 0));
    E$1((W2 = E$3.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
      ie.value && (e2.defaultPrevented || e2.key === o.Escape && (e2.preventDefault(), e2.stopPropagation(), h$2.close()));
    });
    return d$1(E$3, computed(() => !(U2.value || c2.value !== 0 || N$4)), (e2) => {
      var a2;
      return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
    }), watchEffect((e2) => {
      if (c2.value !== 0) return;
      let a2 = o$1(m2);
      if (!a2) return;
      let d2 = new ResizeObserver((f2) => {
        for (let L of f2) {
          let x2 = L.target.getBoundingClientRect();
          x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h$2.close();
        }
      });
      d2.observe(a2), e2(() => d2.disconnect());
    }), () => {
      let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = {
        ...l2,
        ref: m2,
        id: n2,
        role: g.value,
        "aria-modal": c2.value === 0 ? true : void 0,
        "aria-labelledby": M2.value,
        "aria-describedby": re.value
      }, L = { open: c2.value === 0 };
      return h(u$2, { force: true }, () => [h($, () => h(z, { target: m2.value }, () => h(u$2, { force: false }, () => h(ue, {
        initialFocus: a2,
        containers: B2,
        features: k$1.value ? u$5(ee.value, {
          parent: ue.features.RestoreFocus,
          leaf: ue.features.All & ~ue.features.FocusLock
        }) : ue.features.None
      }, () => h(X, {}, () => A$2({
        ourProps: f2,
        theirProps: {
          ...d2,
          ...l2
        },
        slot: L,
        attrs: l2,
        slots: p,
        visible: c2.value === 0,
        features: N$2.RenderStrategy | N$2.Static,
        name: "Dialog"
      })))))), h(Z)]);
    };
  }
});
defineComponent({
  name: "DialogOverlay",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(t2, { attrs: i2, slots: l2 }) {
    var u2;
    let p = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$5()}`, s2 = T("DialogOverlay");
    function n2(r2) {
      r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s2.close());
    }
    return () => {
      let { ...r2 } = t2;
      return A$2({
        ourProps: {
          id: p,
          "aria-hidden": true,
          onClick: n2
        },
        theirProps: r2,
        slot: { open: s2.dialogState.value === 0 },
        attrs: i2,
        slots: l2,
        name: "DialogOverlay"
      });
    };
  }
});
defineComponent({
  name: "DialogBackdrop",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    id: {
      type: String,
      default: null
    }
  },
  inheritAttrs: false,
  setup(t2, { attrs: i2, slots: l2, expose: p }) {
    var r2;
    let s2 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$5()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
    return p({
      el: u2,
      $el: u2
    }), () => {
      let { ...g } = t2, D = {
        id: s2,
        ref: u2,
        "aria-hidden": true
      };
      return h(u$2, { force: true }, () => h($, () => A$2({
        ourProps: D,
        theirProps: {
          ...i2,
          ...g
        },
        slot: { open: n2.dialogState.value === 0 },
        attrs: i2,
        slots: l2,
        name: "DialogBackdrop"
      })));
    };
  }
});
var Ge = defineComponent({
  name: "DialogPanel",
  props: {
    as: {
      type: [Object, String],
      default: "div"
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(t2, { attrs: i2, slots: l2, expose: p }) {
    var r2;
    let s2 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$5()}`, n2 = T("DialogPanel");
    p({
      el: n2.panelRef,
      $el: n2.panelRef
    });
    function u2(g) {
      g.stopPropagation();
    }
    return () => {
      let { ...g } = t2;
      return A$2({
        ourProps: {
          id: s2,
          ref: n2.panelRef,
          onClick: u2
        },
        theirProps: g,
        slot: { open: n2.dialogState.value === 0 },
        attrs: i2,
        slots: l2,
        name: "DialogPanel"
      });
    };
  }
});
defineComponent({
  name: "DialogTitle",
  props: {
    as: {
      type: [Object, String],
      default: "h2"
    },
    id: {
      type: String,
      default: null
    }
  },
  setup(t2, { attrs: i2, slots: l2 }) {
    var n2;
    let p = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$5()}`, s2 = T("DialogTitle");
    return () => {
      let { ...u2 } = t2;
      return A$2({
        ourProps: { id: p },
        theirProps: u2,
        slot: { open: s2.dialogState.value === 0 },
        attrs: i2,
        slots: l2,
        name: "DialogTitle"
      });
    };
  }
});
var _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      {
        name: "index",
        path: "Home"
      },
      {
        name: "about",
        path: "About"
      },
      {
        name: "gallery",
        path: "Gallery"
      },
      {
        name: "project",
        path: "Project"
      },
      {
        name: "blog",
        path: "Blog"
      }
    ];
    const mobileMenuOpen = ref(false);
    const onFadeEnter = (el, done) => {
      gsapWithCSS.fromTo(el, { opacity: 0 }, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
        onComplete: done
      });
    };
    const onFadeLeave = (el, done) => {
      gsapWithCSS.to(el, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: done
      });
    };
    const onSlideEnter = (el, done) => {
      gsapWithCSS.fromTo(el, { xPercent: -100 }, {
        xPercent: 0,
        duration: 0.35,
        ease: "power3.out",
        onComplete: done
      });
    };
    const onSlideLeave = (el, done) => {
      gsapWithCSS.to(el, {
        xPercent: -100,
        duration: 0.25,
        ease: "power3.in",
        onComplete: done
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = NuxtLink;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10 transition-all duration-300" }, _attrs))}><nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "-m-1.5 p-1.5 flex items-center gap-2 group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`<img class="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"${ssrRenderAttr("src", logo_default)} alt="APGIIIT.com"${_scopeId}>`);
          else return [createVNode("img", {
            class: "h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105",
            src: logo_default,
            alt: "APGIIIT.com"
          })];
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex lg:hidden"><button type="button" class="inline-flex items-center justify-center rounded-lg p-2 text-neutral-900 hover:bg-black/10 hover:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-neutral-900/40" aria-label="Open main menu">`);
      _push(ssrRenderComponent(unref(render$1), {
        class: "h-6 w-6",
        "aria-hidden": "true"
      }, null, _parent));
      _push(`</button></div><div class="hidden lg:flex lg:items-center lg:gap-x-8"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: { name: item.name },
          class: "relative text-sm font-semibold uppercase tracking-wider text-neutral-800 transition-colors duration-200 hover:text-neutral-950 group py-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) _push2(`${ssrInterpolate(item.path)} <span class="absolute inset-x-0 bottom-0 h-0.5 bg-neutral-900 scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"${_scopeId}></span>`);
            else return [createTextVNode(toDisplayString(item.path) + " ", 1), createVNode("span", { class: "absolute inset-x-0 bottom-0 h-0.5 bg-neutral-900 scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" })];
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav>`);
      _push(ssrRenderComponent(unref(Ye), {
        as: "div",
        class: "relative z-50 lg:hidden",
        open: mobileMenuOpen.value,
        onClose: ($event) => mobileMenuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<template><div class="fixed inset-0 bg-black/60 backdrop-blur-sm" style="${ssrRenderStyle(mobileMenuOpen.value ? null : { display: "none" })}"${_scopeId}></div></template><div class="fixed inset-0 z-50 flex"${_scopeId}><template>`);
            _push2(ssrRenderComponent(unref(Ge), {
              style: mobileMenuOpen.value ? null : { display: "none" },
              class: "relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto bg-primary px-6 py-6 shadow-2xl border-r border-black/10"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between border-b border-black/10 pb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: "/",
                    class: "-m-1.5 p-1.5",
                    onClick: ($event) => mobileMenuOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) _push4(`<img class="h-8 w-auto object-contain"${ssrRenderAttr("src", logo_default)} alt="APGIIIT.com"${_scopeId3}>`);
                      else return [createVNode("img", {
                        class: "h-8 w-auto object-contain",
                        src: logo_default,
                        alt: "APGIIIT.com"
                      })];
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<button type="button" class="rounded-lg p-2 text-neutral-800 hover:bg-black/10 hover:text-neutral-950 transition-colors" aria-label="Close menu"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(render), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div><div class="mt-6 flow-root"${_scopeId2}><div class="space-y-1"${_scopeId2}><!--[-->`);
                  ssrRenderList(navigation, (item) => {
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      key: item.name,
                      to: { name: item.name },
                      class: "flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-200 hover:bg-black/10 hover:text-neutral-950 hover:translate-x-1",
                      onClick: ($event) => mobileMenuOpen.value = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) _push4(`${ssrInterpolate(item.path)}`);
                        else return [createTextVNode(toDisplayString(item.path), 1)];
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div></div>`);
                } else return [createVNode("div", { class: "flex items-center justify-between border-b border-black/10 pb-4" }, [createVNode(_component_NuxtLink, {
                  to: "/",
                  class: "-m-1.5 p-1.5",
                  onClick: ($event) => mobileMenuOpen.value = false
                }, {
                  default: withCtx(() => [createVNode("img", {
                    class: "h-8 w-auto object-contain",
                    src: logo_default,
                    alt: "APGIIIT.com"
                  })]),
                  _: 1
                }, 8, ["onClick"]), createVNode("button", {
                  type: "button",
                  class: "rounded-lg p-2 text-neutral-800 hover:bg-black/10 hover:text-neutral-950 transition-colors",
                  "aria-label": "Close menu",
                  onClick: ($event) => mobileMenuOpen.value = false
                }, [createVNode(unref(render), {
                  class: "h-6 w-6",
                  "aria-hidden": "true"
                })], 8, ["onClick"])]), createVNode("div", { class: "mt-6 flow-root" }, [createVNode("div", { class: "space-y-1" }, [(openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                  return createVNode(_component_NuxtLink, {
                    key: item.name,
                    to: { name: item.name },
                    class: "flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-200 hover:bg-black/10 hover:text-neutral-950 hover:translate-x-1",
                    onClick: ($event) => mobileMenuOpen.value = false
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(item.path), 1)]),
                    _: 2
                  }, 1032, ["to", "onClick"]);
                }), 64))])])];
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</template></div>`);
          } else return [createVNode(Transition, {
            name: "fade",
            css: false,
            appear: "",
            onEnter: onFadeEnter,
            onLeave: onFadeLeave
          }, {
            default: withCtx(() => [withDirectives(createVNode("div", { class: "fixed inset-0 bg-black/60 backdrop-blur-sm" }, null, 512), [[vShow, mobileMenuOpen.value]])]),
            _: 1
          }), createVNode("div", { class: "fixed inset-0 z-50 flex" }, [createVNode(Transition, {
            name: "slide-left",
            css: false,
            appear: "",
            onEnter: onSlideEnter,
            onLeave: onSlideLeave
          }, {
            default: withCtx(() => [withDirectives(createVNode(unref(Ge), { class: "relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto bg-primary px-6 py-6 shadow-2xl border-r border-black/10" }, {
              default: withCtx(() => [createVNode("div", { class: "flex items-center justify-between border-b border-black/10 pb-4" }, [createVNode(_component_NuxtLink, {
                to: "/",
                class: "-m-1.5 p-1.5",
                onClick: ($event) => mobileMenuOpen.value = false
              }, {
                default: withCtx(() => [createVNode("img", {
                  class: "h-8 w-auto object-contain",
                  src: logo_default,
                  alt: "APGIIIT.com"
                })]),
                _: 1
              }, 8, ["onClick"]), createVNode("button", {
                type: "button",
                class: "rounded-lg p-2 text-neutral-800 hover:bg-black/10 hover:text-neutral-950 transition-colors",
                "aria-label": "Close menu",
                onClick: ($event) => mobileMenuOpen.value = false
              }, [createVNode(unref(render), {
                class: "h-6 w-6",
                "aria-hidden": "true"
              })], 8, ["onClick"])]), createVNode("div", { class: "mt-6 flow-root" }, [createVNode("div", { class: "space-y-1" }, [(openBlock(), createBlock(Fragment, null, renderList(navigation, (item) => {
                return createVNode(_component_NuxtLink, {
                  key: item.name,
                  to: { name: item.name },
                  class: "flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all duration-200 hover:bg-black/10 hover:text-neutral-950 hover:translate-x-1",
                  onClick: ($event) => mobileMenuOpen.value = false
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(item.path), 1)]),
                  _: 2
                }, 1032, ["to", "onClick"]);
              }), 64))])])]),
              _: 1
            }, 512), [[vShow, mobileMenuOpen.value]])]),
            _: 1
          })])];
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const CURRENT_YEAR = (/* @__PURE__ */ new Date()).getFullYear();
    const navigation = [
      {
        name: "index",
        path: "Home",
        current: false
      },
      {
        name: "about",
        path: "About",
        current: false
      },
      {
        name: "gallery",
        path: "Gallery",
        current: false
      },
      {
        name: "project",
        path: "Project",
        current: false
      },
      {
        name: "blog",
        path: "Blog",
        current: false
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = NuxtLink;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary/95 border-t border-black/10 text-neutral-900" }, _attrs))}><div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"><div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"><div class="space-y-4"><div class="flex items-center gap-2"><span class="text-xl font-bold tracking-tight text-neutral-950">APGIIIT</span></div><p class="text-sm leading-relaxed text-neutral-700"> Personal portfolio showcasing creative design, full-stack projects, and technical writings. </p></div><div><h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Navigation</h3><ul class="mt-4 space-y-2.5 text-sm"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: item.name },
          class: "font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) _push2(`${ssrInterpolate(item.path)}`);
            else return [createTextVNode(toDisplayString(item.path), 1)];
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div><h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Contact</h3><ul class="mt-4 space-y-2.5 text-sm"><li class="flex items-start gap-2"><span class="font-medium text-neutral-700">Prayagraj, Uttar Pradesh, India</span></li><li><a href="mailto:aspper20@gmail.com" class="font-medium text-neutral-700 transition-colors duration-200 hover:text-neutral-950"> aspper20@gmail.com </a></li></ul></div><div><h3 class="text-xs font-bold uppercase tracking-wider text-neutral-950">Connect</h3><div class="mt-4 flex items-center gap-3"><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950" aria-label="GitHub"><svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950" aria-label="LinkedIn"><svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.021-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"></path></svg></a><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950" aria-label="YouTube"><svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.2-.8-4.2-1.184-7.615-1.184s-6.415.384-7.615 1.184c-1.2.8-2.385 2.8-2.385 5.816v5.984c0 3.016 1.185 5.016 2.385 5.816 1.2.8 4.2 1.184 7.615 1.184s6.415-.384 7.615-1.184c1.2-.8 2.385-2.8 2.385-5.816v-5.984c0-3.016-1.185-5.016-2.385-5.816zm-9.615 12.816v-8l6 4-6 4z"></path></svg></a><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 bg-black/5 text-neutral-800 transition-all duration-200 hover:bg-black/15 hover:text-neutral-950" aria-label="Twitter"><svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a></div></div></div><div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row text-xs text-neutral-600"><p>\xA9 ${ssrInterpolate(unref(CURRENT_YEAR))} APGIIIT.com. All rights reserved.</p><div class="flex space-x-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "transition-colors duration-200 hover:text-neutral-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`Home`);
          else return [createTextVNode("Home")];
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "about" },
        class: "transition-colors duration-200 hover:text-neutral-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`About`);
          else return [createTextVNode("About")];
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { name: "project" },
        class: "transition-colors duration-200 hover:text-neutral-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) _push2(`Projects`);
          else return [createTextVNode("Projects")];
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></footer>`);
    };
  }
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
//# sourceMappingURL=Footer-C30fEeBG.mjs.map
