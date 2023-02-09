<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserProfile />
  <h3 class="text-md font-semibold mt-3 mb-2 mx-3">Pengumuman Penting</h3>
  <Pengumuman />
  <h3 class="text-md font-semibold mt-3 mb-2 mx-3">Artikel</h3>
  <Artikel />
  <h3 class="text-md font-semibold mt-3 mb-2 mx-3">Data Logistik</h3>
  <!-- <card-item /> -->
  <BaseButton class="ml-3" @click="getUserMe">Get me</BaseButton>
  <p class="ml-3">{{ userInfo.name }}</p>
</template>
<script setup lang="ts">
const userInfo:any = ref("");
const getUserMe = async () => {
  await useMyFetch("/me", {
    method: "GET",
  }).then((response:any) => {
    userInfo.value = response.data;
  });
};
</script>
