import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Watched from "../views/Watched.vue";
import Wishlist from "../views/Wishlist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/watched",
    name: "Watched",
    component: Watched,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;