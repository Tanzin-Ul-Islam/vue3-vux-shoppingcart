import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import ProductDetails from '@/pages/product-details/ProductDetails';
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/product/:productName", name: "ProductDetails", component: ProductDetails },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
