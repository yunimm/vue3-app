import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia' //導入pinia
// 導入sweetaler2
// import VueSweetalert2 from 'vue-sweetalert2'
// import 'sweetalert2/dist/sweetalert2.min.css'
// .use(VueSweetalert2)

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const pinia = createPinia() //調用pinia

app.use(router).use(pinia).mount('#app')
