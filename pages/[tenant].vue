<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <UserProfile :name="user.name" :organization="dataOrganization.name" v-if="dataOrganization" />
  <h3 class="text-md font-semibold mt-3 mb-2 mx-3">Artikel</h3>
  <Artikel :articles="articles" v-if="articles" />
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const articles = ref("");
const user = JSON.parse(localStorage.getItem('user'));
const organization = JSON.parse(localStorage.getItem('organization'));
const dataOrganization = organization.find(item => item.slug === route.params.tenant);

onMounted(() => {
  getValidate();
});

function getValidate() {
  if(organization.some(item => item.slug === route.params.tenant)){
    getArticle();
  }
  else{
    router.push({ path: "/organization" });
  }
};

const getArticle = async () => {
  await useMyFetch(`/article?schema=${dataOrganization.schema}`, {
    method: "GET",
  }).then((response) => {
    articles.value = response.data;
  });
};
</script>
