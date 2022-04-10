<template>
  <div
    class="flex h-screen min-h-full items-center justify-center bg-yellow py-12 px-8 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-xs space-y-8">
      <img
        class="h-12 h-auto max-w-full"
        src="../assets/logo_lg.png"
        alt="Workflow"
      />
      <h2 class="mt-6 text-center text-2xl font-extrabold text-zinc-900">
        最實用的線上代辦事項服務
      </h2>
      <div>
        <form class="flex flex-col" action="#" method="POST">
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
          <label class="text-sm" for="password">密碼</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="mb-3 h-10 rounded-lg border-none text-sm hover:border-solid"
            placeholder="請輸入密碼"
            required
          />
          <div class="btn-group flex flex-col items-center justify-center">
            <button
              @click.prevent.stop="handleSubmit"
              type="submit"
              class="text-md mt-3 rounded-lg bg-zinc-900 px-12 py-3 font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg"
            >
              登入
            </button>
            <router-link
              to="/signup"
              class="mt-6 inline-block h-10 w-40 cursor-pointer text-center"
              >註冊帳號</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import authorizationAPI from '../apis/authorization'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// 要再研究一下套件載入方式
// import Swal from 'vue-sweetalert2'
// import { Toast } from '../utils/helpers'

const email = ref('')
const password = ref('')
const router = useRouter()

async function handleSubmit() {
  try {
    const res = await authorizationAPI.signIn({
      email: email.value,
      password: password.value,
    })

    alert(res.data.message)
    const token = res.headers.authorization.replace('Bearer ', '')

    localStorage.setItem('token', token)
    // 轉址到todolist
    router.push('/todolist')
  } catch (err) {
    alert('登入失敗')
  }
}
</script>
<!-- vue2寫法 -->
<!-- <script>
import authorizationAPI from '../apis/authorization'
export default {
  data() {
    return {
      email: '',
      password: '',
      // isProssing: false,
    }
  },
  methods: {
    handleSubmit(e) {
      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // TODO: 取得 API 請求後的資料
          console.log('response', response)
        })
    },
  },
}
</script> -->
