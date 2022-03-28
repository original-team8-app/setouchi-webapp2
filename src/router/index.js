import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import firstQuestion from "../views/css_questions/first_question.vue"
import secondQuestion from "../views/css_questions/second_question.vue"
import thirdQuestion from "../views/css_questions/third_question.vue"
import forthQuestion from "../views/css_questions/forth_question.vue"
import fifithquestion from "../views/css_questions/fifth_question.vue"
import sixthquestion from "../views/css_questions/6th_question.vue"
import seventhquestion from "../views/css_questions/7th_question.vue"
import eigthquestion from "../views/css_questions/8th_question.vue"
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
    path: "/first_question",
    name: "firstQuestion",
    component: firstQuestion,
  },

  {
    path: "/second_question",
    name: "secondQuestion ",
    component: secondQuestion,
  },

  {
    path: "/third_question",
    name: "thirdQuestion ",
    component: thirdQuestion,
  },

  {
    path: "/forth_question",
    name: "forthQuestion ",
    component: forthQuestion,
  },

  {
    path: "/fifith_question",
    name: "fifthQuestion",
    component: fifithquestion,
  },

  {
    path: "/6th_question",
    name: "sixthquestion",
    component: sixthquestion,
  },

  {
    path: "/7th_question",
    name: "seventhquestion",
    component: seventhquestion,
  },

  {
    path: "/8th_question",
    name: "eigthquestion",
    component: eigthquestion,
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
