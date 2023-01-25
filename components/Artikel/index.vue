<template>
  <div v-for="product in products" :key="product.id">
    <NuxtLink to="/">
      <BaseContainer
        class="bg-gray-900 rounded-lg text-center items-center mt-2 py-5 px-5"
      >
        <div class="flex items-center">
          <img :src="product.image" alt="image" class="h-10 w-10 mr-3" />
          <div class="text-left flex-grow">
            <p
              class="text-sm md:text-base leading-normal font-medium text-white"
            >
              {{ product.title }}
            </p>
            <p class="text-xs md:text-sm text-white">
              {{ product.description.substring(0, 130) }}...
            </p>
          </div>
        </div>
      </BaseContainer>
    </NuxtLink>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public.apiBase;

defineComponent({
  name: "ArtikelIndex",
});

// fetch product
const { data: products } = await useFetch(`${apiBase}/products?limit=7`);
</script>
