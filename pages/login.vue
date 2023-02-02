<template>
  <div class="w-3/4 mx-auto mt-20">
    <h1 class="text-white text-2xl font-bold text-center my-5">
      Masuk ke Akun Anda
    </h1>
    <div class="my-4">
      <input
        type="email"
        class="block w-full p-3 pl-4 py-3 text-base text-gray-900 border-0 rounded-xl bg-[#FDFEFF] focus:ring-orange-600 focus:border-orange-600"
        placeholder="Enter your email"
        required
      />
    </div>
    <div class="my-4">
      <input
        type="password"
        class="block w-full p-3 pl-4 py-3 text-base text-gray-900 border-0 rounded-xl bg-[#FDFEFF] focus:ring-orange-600 focus:border-orange-600"
        placeholder="Password"
        required
      />
    </div>
    <div class="pt-2">
      <button
        class="w-full text-white bg-[#1976D2] hover:bg-[#1976d2cb] focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-xl text-sm px-3 py-3 mx-auto"
        aria-label="Booking Now"
      >
        <NuxtLink to="/login">Masuk</NuxtLink>
      </button>
    </div>
  </div>
</template>
<script setup></script>
