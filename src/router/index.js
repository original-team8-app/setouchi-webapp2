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


import Lv1_Leaf from "../views/Lv1_Leaf.vue"
import Lv2_Cylinder from "../views/Lv2_Cylinder.vue"
import Lv3_CancelButton from "../views/Lv3_CancelButton.vue"
import Lv4_UnknownIcon from "../views/Lv4_UnknownIcon.vue"
import Lv5_Triangle from "../views/Lv5_Triangle.vue"
import Lv6_Infinity from "../views/Lv6_Infinity.vue"
import Lv7_Diamond from "../views/Lv7_Diamond.vue"
import Lv8_Star from "../views/Lv8_Star.vue"
import Ex_MonsterBall from "../views/Ex_MonsterBall.vue"
import Ex_Frog from "../views/Ex_Frog.vue"
import Ex_Guitar from "../views/Ex_Guitar.vue"
import Ex_Gift from "../views/Ex_Gift.vue"
import FeedbackView from "../views/FeedbackView.vue"
import RecordView from "../views/RecordView.vue"

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
   path: "/css-park",
    name: "css-park",
    component: CSSPark,
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
    path: "/Lv7_Diamond",
    name: "Lv7_Diamond",
    component: Lv7_Diamond,
  },
  {
    path: "/Lv8_Star",
    name: "Lv8_Star",
    component: Lv8_Star,
  },
  {
    path: "/Ex_MonsterBall",
    name: "Ex_MonsterBall",
    component: Ex_MonsterBall,
  },
  {
    path: "/Ex_Frog",
    name: "Ex_Frog",
    component: Ex_Frog,
  },
  {
    path: "/Ex_Guitar",
    name: "Ex_Guitar",
    component: Ex_Guitar,
  },
  {
    path: "/Ex_Gift",
    name: "Ex_Gift",
    component: Ex_Gift,
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
