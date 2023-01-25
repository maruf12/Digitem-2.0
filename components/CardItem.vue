<template>
  <div v-for="item in count.data" :key="item" class="flex flex-col-reverse">
    <div class="flex-1 self-center">
      <div
        class="bg-white px-8 py-6 rounded-xl w-[20rem] md:w-[29rem] mt-8 shadow"
      >
        <p class="font-extralight tracking-wide text-sm lg:text-base">
          {{ item.agency_address }}
        </p>
        <p class="font-semibold mt-2 text-[#2D3134]">
          {{ item.applicant_fullname }}
        </p>
        <p class="font-extralight text-sm leading-none text-[#2D3134]">
          {{ item.applicant_position }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const baseAPI = runtimeConfig.public.apiBase;
const email = "testing.digiteam2@jds.com";
const { data: count } = await useFetch(
  `${baseAPI}/vaccine-tracking?search=${email}&page=1&limit=10`
);
</script>
