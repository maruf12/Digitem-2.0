<template>
  <header class="bg-white py-5">
    <div class="max-w-5xl mx-auto">
      <BaseContainer class="flex justify-center">
        <div class="flex items-center">
          <img src="/icon.png" class="h-8 mr-1" alt="DigiTeam Logo" />
          <div class="text-left">
            <h1
              class="text-sm md:text-base leading-normal font-medium text-gray-900"
            >
              DigiTeam
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
