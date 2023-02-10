<template>
  <NuxtLink to="/">
    <BaseCard>
      <div class="flex items-center">
        <img src="/user.svg" class="h-12 mr-3" alt="User Icon" />
        <div class="text-left flex-grow">
          <p class="text-sm md:text-base leading-normal font-medium">
            {{ user.name }}
          </p>
          <p class="text-xs md:text-sm">
            {{ organization.name }}
          </p>
        </div>
      </div>
    </BaseCard>
  </NuxtLink>
</template>

<script setup>
defineComponent({
  name: "UserProfile",
});
const user = JSON.parse(localStorage.getItem('user'));
const organization = JSON.parse(localStorage.getItem('organization'));
</script>
