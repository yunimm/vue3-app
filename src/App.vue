<template>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import { PiniaStore } from '../src/stores/pinia'
const pinia = PiniaStore()
let counter = ref(0)

// setInterval(() => {
//   counter.value++
// }, 1000)
</script>
