<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserProfile />
  <h3 class="text-md font-semibold mt-3 mb-2 mx-3">Artikel</h3>
  <Artikel :articles="articles" />
</template>

<script setup>
const articles = ref("");
const organization = JSON.parse(localStorage.getItem('organization'));

onMounted(() => {
  getArticle();
});

const getArticle = async () => {
  await useMyFetch(`/article?schema=${organization.schema}`, {
    method: "GET",
  }).then((response) => {
    articles.value = response.data;
  });
};
</script>
