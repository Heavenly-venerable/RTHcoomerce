import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Cart from "../view/Cart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
