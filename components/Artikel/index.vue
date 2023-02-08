<template>
  <div v-for="product in products" :key="product.id">
    <NuxtLink to="/">
      <BaseCard class="mb-2">
        <div class="flex items-center">
          <img :src="product.image" alt="image" class="h-10 w-10 mr-3" />
          <div class="text-left flex-grow">
            <p class="text-sm md:text-base leading-normal font-medium">
              {{ product.title }}
            </p>
            <p class="text-xs md:text-sm">
              {{ product.description.substring(0, 130) }}...
            </p>
          </div>
        </div>
      </BaseCard>
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
