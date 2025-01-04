export default function ({ store, redirect }) {
    const authStore = store.$pinia.useAuthStore();
    
    if (!authStore.token) {
      return redirect('/login');
    }
  }