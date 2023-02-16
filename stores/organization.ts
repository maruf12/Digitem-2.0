export const useOrganizationStore = defineStore("organization", {
  state: () => ({
    organization: JSON.parse(localStorage.getItem("organization") || "{}"),
  }),
  actions: {
    toOrganization(tenant: any) {
      this.organization = tenant;
      localStorage.setItem("organization", JSON.stringify(this.organization));
    },
  },
});
