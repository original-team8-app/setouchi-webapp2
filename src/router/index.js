import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ThreeView from "../views/ThreeView.vue"
import Lv1_Round from "../views/Lv1_Round.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: ThreeView,
  },
  {
    path: "/Lv1_Round",
    name: "Lv1_Round",
    component: Lv1_Round,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
