import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ThreeView from "../views/ThreeView.vue"
import Lv1_Leaf from "../views/Lv1_Leaf.vue"
import Lv2_Cylinder from "../views/Lv2_Cylinder.vue"
import Lv3_CancelButton from "../views/Lv3_CancelButton.vue"

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
    path: "/Lv1_Leaf",
    name: "Lv1_Leaf",
    component: Lv1_Leaf,
  },
  {
    path: "/Lv2_Cylinder",
    name: "Lv2_Cylinder",
    component: Lv2_Cylinder,
  },
  {
    path: "/Lv3_CancelButton",
    name: "Lv3_CancelButton",
    component: Lv3_CancelButton,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
