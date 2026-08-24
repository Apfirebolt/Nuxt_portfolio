function auth_default({ store, redirect }) {
  if (!store.$pinia.useAuthStore().token) return redirect("/login");
}

export { auth_default as default };
//# sourceMappingURL=auth-CYrKNCm4.mjs.map
