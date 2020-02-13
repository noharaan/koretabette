import Index from "./pages/index.vue";
import Category from "./pages/category.vue";
import ShopInfo from "./pages/shop.vue"

export const routes = [
  { path: '/', component: Index },
  { path: '/category', component: Category },
  { path: '/shop-info', component: ShopInfo },
  { path: '/shop-info/:id', component: ShopInfo }
]