<template>
  <div v-for="tenant in listTenant" :key="tenant.id">
    <BaseButton @click="goToTenant(tenant)">{{ tenant.name }}</BaseButton>
  </div>
</template>

<script setup>
defineComponent({
  name: "TenantList",
});

const listTenant = [
  { id: 1, name: "Jabar-Digital Service", path: "/jabardigitalservice" },
  { id: 2, name: "Diskominfo Jabar", path: "/diskominfojabar" },
];
const router = useRouter();
function goToTenant(tenant) {
  router.push({ path: tenant.path });
}
</script>
