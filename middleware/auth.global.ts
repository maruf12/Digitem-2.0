export default defineNuxtRouteMiddleware(async (to) => {
  const router = useRouter();
  const authStore = useAuthStore();
  console.log(authStore.token);
  const publicPages = ["/login", "/"];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !authStore.token) {
    // return navigateTo("/login", { replace: true });
    return router.push("/login");
  } else if (authStore.token && to.path === "/login") {
    // return navigateTo("/tenant", { replace: true });
    return router.push("/tenant");
  }
});
