import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import AboutUs from '@/components/AboutUs.vue'
import GraphiQLPage from '@/components/GraphiQLPage.vue'
import Info from '@/components/Info.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
    },
    {
      path: '/graphql',
      name: 'graphql',
      component: GraphiQLPage,
    },
  ],
  linkActiveClass: 'nav-link--active',
  linkExactActiveClass: 'nav-link--active'
})
export default router
