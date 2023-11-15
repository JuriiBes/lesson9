import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopPage from '../views/ShopPage.vue'
import PayPage from '../views/PayPage.vue'
import ContactsShop from '../views/ContactsShop.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage,
    },
    {
        path: '/pay',
        name: 'pay',
        component: PayPage,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsShop,
    },
    {
        path: '/products/:category',
        name: 'products',
        component: ProductsPage,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
