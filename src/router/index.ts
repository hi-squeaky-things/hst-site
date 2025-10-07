import { createRouter, createWebHistory } from 'vue-router'
import Products  from '@/Instruments.vue'
import Home from '@/Home.vue'
import Music from '@/Music.vue'
import Research from '@/Research.vue'
import Instruments from '@/Instruments.vue'

import {useDrumPatternStore} from '@/stores/drumpattern'

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
    },
    {
      path: '/instruments',
      name: "Instruments",
      component: Instruments,
    }
  ],
})

export default router
