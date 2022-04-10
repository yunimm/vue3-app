import NotFound from './views/NotFound.vue'
import LogIn from './views/LogIn.vue'
// import { createRouter, createWebHashHistory } from 'vue-router';

/** @type {import('vue-router').RouterOptions['routes']} */
// export const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     { path: '/', redirect: { name: 'Login' }  },
//   {
//     path: '/login',
//     meta: { title: 'Login' },
//     name: 'Login',
//     component: LogIn,
//   },
//   {
//     path: '/signup',
//     meta: { title: 'Signup' },
//     name: 'Signup',
//     component: () => import('./views/SignUp.vue')
//   },
//   {
//     path: '/todolist',
//     meta: { title: 'Todolist' },
//     name: 'Todolist',
//     component: () => import('./views/TodoList.vue')
//   },
//   { path: '/:path(.*)', component: NotFound },
//   ],
// })
export const routes = [
  { path: '/', redirect: { name: 'Login' }  },
  {
    path: '/login/',
    meta: { title: 'Login' },
    name: 'Login',
    component: LogIn,
  },
  {
    path: '/signup',
    meta: { title: 'Signup' },
    name: 'Signup',
    component: () => import('./views/SignUp.vue')
  },
  {
    path: '/todolist',
    meta: { title: 'Todolist' },
    name: 'Todolist',
    component: () => import('./views/TodoList.vue')
  },
  { path: '/:path(.*)', component: NotFound },
] 