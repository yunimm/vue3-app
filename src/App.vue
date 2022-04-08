<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ counter }}
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <h3>{{ pinia.name }}</h3>
    <!--使用-->
    <h3>{{ pinia.age }}</h3>
    <button @click="pinia.age++">修改pinia數據</button>
    <!--修改-->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PiniaStore } from '../src/stores/pinia'
const pinia = PiniaStore()
let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>
