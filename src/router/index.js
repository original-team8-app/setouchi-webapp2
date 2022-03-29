import { createRouter, createWebHistory } from "vue-router"
import TopView from "../views/TopView.vue"
import RelayLoginData from "../views/RelayLoginData.vue"
import HomeView from "../views/HomeView.vue"
import CSSPark from "../views/CSSPark.vue"
import GameView from "../views/GameView.vue"
import firstQuestion from "../views/css_questions/first_question.vue"
import FeedbackView from "../views/FeedbackView.vue"
import RecordView from "../views/RecordView.vue"

const routes = [
  {
    path: "/top",
    name: "top",
    component: TopView,
    props: true,
  },
  {
    path: "/login-logout",
    name: "login-logout",
    component: RelayLoginData,
    props: true,
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
    path: "/css_questions/first_question",
    name: "firstQuestion",
    component: firstQuestion,
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
