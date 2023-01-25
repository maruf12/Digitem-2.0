<template>
  <NuxtLink to="/">
    <BaseContainer
      class="bg-gray-900 rounded-lg text-center items-center mt-4 py-5 px-5"
    >
      <div class="flex items-center">
        <img src="/user.svg" class="h-12 mr-3" alt="User Icon" />
        <div class="text-left flex-grow">
          <p class="text-sm md:text-base leading-normal font-medium text-white">
            Sheila Azhar Almufarida
          </p>
          <p class="text-xs md:text-sm text-white">
            Junior Software Programmer - Frontend Engineer
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
