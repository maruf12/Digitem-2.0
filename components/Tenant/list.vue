<template>
  <div v-for="tenant in tenants" :key="tenant.id">
    <BaseButton @click="goToTenant(tenant)">{{ tenant.name }}</BaseButton>
  </div>
</template>

<script setup lang="ts">
const organizationStore = useOrganizationStore();
const router = useRouter();
const props = defineProps(['tenants']);

defineComponent({
  name: "TenantList",
});

function goToTenant(tenant:any) {
  organizationStore.toOrganization(tenant)
  router.push({ path: tenant.slug });
}
</script>
