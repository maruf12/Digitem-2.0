<template>
  <div v-for="tenant in listTenant" :key="tenant.id">
    <BaseButton @click="goToTenant(tenant.name)">{{ tenant.name }}</BaseButton>
  </div>
</template>

<script setup>
defineComponent({
  name: "TenantList",
});

const listTenant = [
  { id: 1, name: "Jabar-Digital Service" },
  { id: 2, name: "Diskominfo Jabar" },
];

function goToTenant(tenant) {
  router.push({ name: tenant });
}
</script>
