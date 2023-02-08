<template>
  <BaseCard>
    <div class="w-3/4 mx-auto my-8">
      <h1 class="text-slate-700 text-2xl font-bold text-center my-8">
        Masuk ke Akun Anda
      </h1>
      <div class="my-4">
        <input
          v-model="loginForm.username"
          type="email"
          class="block w-full p-3 pl-4 py-3 text-base text-gray-900 rounded-lg bg-[#FAFAFA] border border-[#9E9E9E]"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="my-4">
        <input
          v-model="loginForm.password"
          type="password"
          class="block w-full p-3 pl-4 py-3 text-base text-gray-900 rounded-lg bg-[#FAFAFA] border border-[#9E9E9E]"
          placeholder="Password"
          required
        />
      </div>
      <div class="pt-2">
        <button
          class="w-full text-white bg-[#1976D2] hover:bg-[#1976d2cb] focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-3 py-3 mx-auto"
          aria-label="Booking Now"
          @click="login"
        >
          <NuxtLink to="/login">Masuk</NuxtLink>
        </button>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const authStore = useAuthStore();
const router = useRouter();

interface loginForm {
  username: string;
  password: string;
}

let loginForm: loginForm = {
  username: "",
  password: "",
};

function login() {
  authStore
    .login(loginForm)
    .then(() => {
      router.push("/tenant");
    })
    .catch((error) => console.error("login error", error));
}
</script>
