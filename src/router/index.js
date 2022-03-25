import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ThreeView from "../views/ThreeView.vue"

import firstQuestion from "../views/css_questions/first_question.vue"
import secondQuestion from "../views/css_questions/second_question.vue"
import thirdQuestion from "../views/css_questions/third_question.vue"
import forthQuestion from "../views/css_questions/forth_question.vue"
import fifithquestion from "../views/css_questions/fifth_question.vue"

import Lv1_Leaf from "../views/Lv1_Leaf.vue"
import Lv2_Cylinder from "../views/Lv2_Cylinder.vue"
import Lv3_CancelButton from "../views/Lv3_CancelButton.vue"
import Lv4_UnknownIcon from "../views/Lv4_UnknownIcon.vue"
import Lv5_Triangle from "../views/Lv5_Triangle.vue"
import Lv6_Infinity from "../views/Lv6_Infinity.vue"

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
    path: "/fifth_question",
    name: "forthQuestion ",
    component: forthQuestion,
  },
  /* eslint-disable */
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
  {
    path: "/Lv4_UnknownIcon",
    name: "Lv4_UnknownIcon",
    component: Lv4_UnknownIcon,
  },
  {
    path: "/Lv5_Triangle",
    name: "Lv5_Triangle",
    component: Lv5_Triangle,
  },
  {
    path: "/Lv6_Infinity",
    name: "Lv6_Infinity",
    component: Lv6_Infinity,
  },
  {
    path: "/three",
    name: "three",
    component: ThreeView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
