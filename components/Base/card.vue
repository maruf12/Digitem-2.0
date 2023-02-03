<template>
  <div class="flex flex-col bg-white rounded-lg py-5 px-5 mx-3">
    <slot />
  </div>
</template>

<script setup>
defineComponent({
  name: "BaseCard",
});
</script>
