<template>
  <div v-for="article in articles" :key="article.id">
    <NuxtLink to="/">
      <BaseCard class="mb-2">
        <div class="flex items-center">
          <img :src="article.image" alt="image" class="h-10 w-10 mr-3" />
          <div class="text-left flex-grow">
            <p class="text-sm md:text-base leading-normal font-medium">
              {{ article.title }}
            </p>
            <p class="text-xs md:text-sm">
              {{ article.description.substring(0, 130) }}...
            </p>
          </div>
        </div>
      </BaseCard>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(['articles']);

defineComponent({
  name: "ArtikelIndex",
});
</script>
