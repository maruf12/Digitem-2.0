export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: JSON.parse(localStorage.getItem("user") || "{}"),
    token: JSON.parse(localStorage.getItem("token") || "{}"),
  }),
  actions: {
    async login(loginForm: any) {
      await useMyFetch("/login", {
        method: "POST",
        body: loginForm,
      })
        .then((response: any) => {
          const { user, token } = response.data;
          this.user = user;
          this.token = token;
          localStorage.setItem("user", JSON.stringify(this.user));
          localStorage.setItem("token", JSON.stringify(this.token));
        })
        .catch((error) => {
          throw error;
        });
    },
    logout() {
      this.user = "";
      this.token = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});
