import { createRouter, createWebHistory } from 'vue-router'
import Products  from '@/Instruments.vue'
import Home from '@/Home.vue'
import Music from '@/Music.vue'
import Research from '@/Research.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: "Home",
      component: Home,
    },
    {
      path: '/products',
      name: "Products",
      component: Products,
    },
      {
      path: '/music',
      name: "Music",
      component: Music,
    },
     {
      path: '/research',
      name: "Research",
      component: Research,
    }
  ],
})

export default router
