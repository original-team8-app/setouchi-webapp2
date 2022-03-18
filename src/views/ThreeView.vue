<template>
  <div class="title__container">
    <h2 class="title__logo">CSS Park</h2>
    <p class="title__text">
      -コードを書いて例題のイメージに近づけよう！( 全12ステージ )
    </p>
  </div>
  <div class="content__wrapper">
    <span class="content__title">Contents Lv.1~8</span>
    <router-link
      class="content__container"
      v-for="content in contents"
      :key="content.index"
      :to="content.path"
    >
      <img
        class="content__img"
        :src="content.imagePath"
        :alt="content.imageAlt"
      />
      <p class="content__text">{{ content.text }}</p>
      <p class="content__record">{{ content.record }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          path: "/Lv1_Leaf",
          imagePath: require("@/assets/LeafImg.jpg"),
          imageAlt: "レベル1「Leaf」です。",
          text: "Leaf",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv2_Cylinder",
          imagePath: require("@/assets/SylinderImg.jpg"),
          imageAlt: "レベル2「Cylinder」です。",
          text: "Cylinder",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv3_CancelButton",
          imagePath: require("@/assets/CancelButtonImg.jpg"),
          imageAlt: "レベル3「Cancel Button」です。",
          text: "Cancel Button",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv4_UnknownIcon",
          imagePath: require("@/assets/UnknownIconImg.jpg"),
          imageAlt: "レベル4「Unknown Icon」です。",
          text: "Unknown Icon",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv5_Triangle",
          imagePath: require("@/assets/TriangleImg.jpg"),
          imageAlt: "レベル5「Triangle」です。",
          text: "Triangle",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv6_Infinity",
          imagePath: require("@/assets/InfinityImg.jpg"),
          imageAlt: "レベル6「Infinity」です。",
          text: "Infinity",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv7_Diamond",
          imagePath: require("@/assets/DiamondImg.jpg"),
          imageAlt: "レベル7「Diamond」です。",
          text: "Diamond",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          path: "/Lv8_Star",
          imagePath: require("@/assets/StarImg.jpg"),
          imageAlt: "レベル8「Star」です。",
          text: "Star",
          record: "前回の記録:〇分〇〇秒",
        },
      ],
    }
  },
}
</script>

<style scoped>
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.title__container {
  background-color: #afcbff;
}
.title__logo {
  font-size: 3.5rem;
  text-align: left;
  margin-left: 30px;
}
.title__text {
  font-size: 1.5rem;
  text-align: left;
  margin-left: 100px;
}
.content__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #faffff;
  border: 1px solid black;
  border-radius: 5px;
  padding: 35px 0;
  margin: 50px 20px;
  position: relative;
}
.content__title {
  font-size: 2rem;
  position: absolute;
  top: -2%;
  left: 3%;
  background-color: #faffff;
  padding: 0 1rem 0 1rem;
}
.content__container {
  border: 1px solid black;
  margin: 30px 30px;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s;
}
a {
  color: black;
}
.content__container:hover {
  opacity: 1;
  transform: scale(1.05, 1.05);
}
.content__img {
  border: 1px solid black;
  border-radius: 5px;
  width: 250px;
}
.content__text {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
