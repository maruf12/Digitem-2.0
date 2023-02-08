<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <BaseContainer class="mb-10">
    <UserProfile />
    <h3 class="text-md text-white font-semibold mt-3">Pengumuman Penting</h3>
    <Pengumuman />
    <h3 class="text-md text-white font-semibold mt-3">Artikel</h3>
    <Artikel />
    <h3 class="text-md text-white font-semibold mt-5">Data Logistik</h3>
    <!-- <card-item /> -->
    <BaseButton @click="getMe">Get me</BaseButton>
    <p>{{ user.name }}</p>
  </BaseContainer>
</template>
<script setup lang="ts">
const user = ref("");
const getMe = async () => {
  await useMyFetch("/me", {
    method: "GET",
  }).then((response) => {
    user.value = response.data;
  });
};
</script>
