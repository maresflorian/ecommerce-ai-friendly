import { createRouter, createWebHistory } from 'vue-router'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import NotFound from './views/NotFound.vue' // ✅ adăugat pentru pagina 404

const routes = [
  { path: '/', component: ProductList },
  { path: '/product/:id', component: ProductDetail, props: true },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // ✅ ruta 404
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
