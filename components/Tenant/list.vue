<template>
  <div v-for="tenant in listTenant" :key="tenant.id">
    <NuxtLink :to="tenant.name">
      <BaseButton>{{ tenant.name }}</BaseButton>
    </NuxtLink>
  </div>
</template>

<script setup>
defineComponent({
  name: "TenantList",
});

const listTenant = [
  { id: 1, name: "Jabar Digital Service" },
  { id: 2, name: "Diskominfo Jabar" },
];
</script>
