<template>
  <div
    class="flex h-screen min-h-full items-center justify-center bg-yellow py-12 px-8 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-xs space-y-8">
      <div>
        <img
          class="h-12 h-auto max-w-full"
          src="../assets/logo_lg.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-2xl font-extrabold text-zinc-900">
          註冊帳號
        </h2>
        <div>
          <form class="flex flex-col" @submit.stop.prevent="handleSubmit">
            <label class="text-sm" for="email-address">Email</label>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email-address"
              class="mb-3 h-10 rounded-lg border-none text-sm hover:border-solid"
              placeholder="請輸入Email"
              required
            />
            <label class="text-sm" for="nickname">您的暱稱</label>
            <input
              v-model="nickname"
              type="text"
              id="nickname"
              class="mb-3 h-10 rounded-lg border-none text-sm hover:border-solid"
              placeholder="請輸入暱稱"
              required
            />
            <label class="text-sm" for="password">密碼</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="mb-3 h-10 rounded-lg border-none text-sm hover:border-solid"
              placeholder="請輸入密碼"
              required
            />
            <label class="text-sm" for="password-check">再次輸入密碼</label>
            <input
              v-model="passwordCheck"
              type="password"
              id="password-check"
              class="h-10 h-10 rounded-lg border-none text-sm hover:border-solid"
              placeholder="請再次輸入密碼"
              required
            />
            <button
              type="submit"
              class="text-md mt-3 rounded-lg bg-zinc-900 px-12 py-3 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg"
            >
              註冊帳號
            </button>
            <router-link
              to="/"
              class="mt-6 inline-block flex h-10 w-full cursor-pointer items-center justify-center"
              >登入</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import authorizationAPI from '../apis/authorization'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const email = ref('')
const nickname = ref('')
const password = ref('')
const passwordCheck = ref('')
const router = useRouter()

async function handleSubmit() {
  try {
    if (password.value != passwordCheck.value) {
      return alert('兩次輸入的密碼不一致')
    }
    const res = await authorizationAPI.signUp({
      email: email.value,
      nickname: nickname.value,
      password: password.value,
    })
    alert('註冊成功')
    // 轉址到首頁
    router.push('/login')
  } catch (err) {
    alert(err.response.data.message + '\n' + err.response.data.error)
  }
}
</script>
