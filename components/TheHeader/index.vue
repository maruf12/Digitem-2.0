<template>
  <header class="fixed bg-white top-0 z-100 w-full px-2 py-4">
    <div class="max-w-5xl mx-auto">
      <BaseContainer class="flex justify-center">
        <div class="flex items-center">
          <img src="/icon.png" class="h-8 mr-1" alt="DigiTeam Logo" />
          <div class="text-left">
            <h1
              class="text-sm md:text-base leading-normal font-bold text-gray-900"
            >
              Digiteam
            </h1>
          </div>
        </div>
      </BaseContainer>
    </div>
  </header>
</template>

<script setup>
defineComponent({
  name: "TheHeader",
});
</script>
