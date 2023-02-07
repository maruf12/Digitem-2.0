<template>
  <NuxtLink to="/">
    <BaseContainer
      class="bg-white rounded-lg text-center items-center py-5 px-5"
    >
      <div class="flex items-center">
        <img src="/user.svg" class="h-12 mr-3" alt="User Icon" />
        <div class="text-left flex-grow">
          <p class="text-sm md:text-base leading-normal font-medium">
            Sheila Azhar Almufarida
          </p>
          <p class="text-xs md:text-sm">
            {{ $route.params.tenant }}
          </p>
        </div>
      </div>
    </BaseContainer>
  </NuxtLink>
</template>

<script setup>
defineComponent({
  name: "UserProfile",
});
</script>
