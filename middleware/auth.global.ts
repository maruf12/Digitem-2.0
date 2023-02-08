export default defineNuxtRouteMiddleware(async (to) => {
  const publicPages = ["/login", "/"];
  const authRequired = !publicPages.includes(to.path);
  if (authRequired && !localStorage.getItem("token")) {
    return navigateTo("/login", { replace: true });
  } else if (localStorage.getItem("token") && to.path === "/login") {
    return navigateTo("/tenant", { replace: true });
  }
});
