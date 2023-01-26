<template>
  <div>
    <div class="flex w-2/3 lg:w-1/2 mx-auto mt-10">
      <button
        class="text-white bg-[#2196F3] hover:bg-[#478dc7] focus:ring focus:outline-none font-medium rounded-lg text-sm px-3 py-3 lg:w-2/5 mx-auto"
        @click="getData"
      >
        Fetch Data
      </button>
      <button
        class="text-white bg-red-500 hover:bg-red-400 focus:ring focus:outline-none font-medium rounded-lg text-sm px-3 py-3 lg:w-2/5 mx-auto"
        @click="clearData"
      >
        Clear Data
      </button>
    </div>
    <div v-for="item in logistic" :key="item" class="flex flex-col-reverse">
      <div class="flex-1 self-center">
        <div
          class="bg-gray-900 text-white px-8 py-6 rounded-xl w-[20rem] md:w-[29rem] mt-8 shadow"
        >
          <p class="font-extralight tracking-wide text-sm lg:text-base">
            {{ item.agency_address }}
          </p>
          <p class="font-semibold mt-2 text-white">
            {{ item.applicant_fullname }}
          </p>
          <p class="font-extralight text-sm leading-none text-white">
            {{ item.applicant_position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig();
const baseAPI = runtimeConfig.public.logisticAPI;
const email = "testing.digiteam2@jds.com";
const logistic = ref(null);

async function getData() {
  const data = await $fetch(
    `${baseAPI}/vaccine-tracking?search=${email}&page=1&limit=10`
  );
  logistic.value = data.data;
}
function clearData() {
  logistic.value = null;
}
</script>
