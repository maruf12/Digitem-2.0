<template>
  <header class="bg-gray-900 py-5">
    <BaseContainer>
      <div class="flex items-center">
        <img src="/icon.png" class="h-9 mr-3 sm:h-12" alt="DigiTeam Logo" />
        <div class="text-left flex-grow">
          <h1
            class="text-sm md:text-base leading-normal font-medium text-white"
          >
            DigiTeam
          </h1>
          <h2 class="text-xs md:text-sm text-white">
            Digital Together Everyone Achieve More
          </h2>
          <h2 class="text-xs md:text-sm text-white">Jabar Digital Service</h2>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<script setup>
defineComponent({
  name: "TheHeader",
});
</script>
