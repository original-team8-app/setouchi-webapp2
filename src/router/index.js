import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CSSPark from "../views/CSSPark.vue"
import GameView from "../views/GameView.vue"
import FeedbackView from "../views/FeedbackView.vue"
import RecordView from "../views/RecordView.vue"
import TopView from "../views/TopView.vue"

const routes = [
  {
    path: "/top",
    name: "top",
    component: TopView,
  },
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
    path: "/css-park",
    name: "css-park",
    component: CSSPark,
  },
  {
    path: "/game",
    name: "game",
    component: GameView,
    props: true,
  },
  {
    path: "/feedback",
    name: "feedback",
    component: FeedbackView,
    props: true,
  },
  {
    path: "/record",
    name: "record",
    component: RecordView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
