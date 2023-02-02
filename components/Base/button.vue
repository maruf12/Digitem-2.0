<template>
  <button
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-700 rounded-lg text-sm font-semibold px-8 py-2 text-center mt-5"
  >
    <slot />
  </button>
</template>

<script setup>
defineComponent({
  name: "BaseButton",
});
</script>
