<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <BaseCard class="items-center h-screen">
    <h2 class="text-lg text-center font-semibold mb-2">Hi {{ user.name }},</h2>
    <h3
      v-if="tenants.length===0"
      class="text-md text-center font-semibold mb-2"
    >
      You haven't joined any organization yet
    </h3>
    <h3 v-else class="text-md text-center font-semibold mb-2">
      Select Your Organization
    </h3>
    <TenantList :tenants="tenants" />
  </BaseCard>
</template>

<script setup>
const user = JSON.parse(localStorage.getItem('user'));
const tenants = ref("");

onMounted(() => {
  getTenant();
});

const getTenant = async () => {
  await useMyFetch("/me", {
    method: "GET",
  }).then((response) => {
    tenants.value = response.data.user.organizations;
  });
};
</script>
