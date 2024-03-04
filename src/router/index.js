import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import Product from '../views/Products.vue'
import LogIn from '../views/LogIn.vue'
import Command from '../views/Command.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/products',
        name: 'product_list',
        component: Products
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/login',
        name: 'log_in',
        component: LogIn
    },
    {
        path: '/command',
        name: 'command',
        component: Command
    },
  ]
})

export default router
