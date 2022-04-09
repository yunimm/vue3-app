import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import LogIn from './views/LogIn.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', redirect: { name: 'Login' }  },
  {
    path: '/login',
    meta: { title: 'Login' },
    name: 'Login',
    component: LogIn,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
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
