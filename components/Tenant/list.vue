<template>
  <div v-for="tenant in tenants" :key="tenant.id">
    <BaseButton @click="goToTenant(tenant)">{{ tenant.name }}</BaseButton>
  </div>
</template>

<script setup>
const router = useRouter();
const props = defineProps(['tenants']);

defineComponent({
  name: "TenantList",
});

function goToTenant(tenant) {
  router.push({ path: tenant.slug });
}
</script>
