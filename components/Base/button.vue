<template>
  <button
    class="text-white bg-[#1976D2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-700 rounded-lg text-sm font-semibold px-8 py-2 text-center mt-2"
  >
    <slot />
  </button>
</template>

<script setup>
defineComponent({
  name: "BaseButton",
});
</script>
