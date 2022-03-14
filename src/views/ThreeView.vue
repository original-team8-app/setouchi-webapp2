<template>
  <div class="title__container">
    <h2 class="title__logo">CSS battle</h2>
    <p class="title__text">-コードを書いて例題のイメージに近づけよう！</p>
  </div>
  <div class="content__wrapper">
    <router-link
      class="content__container"
      v-for="content in contents"
      v-bind:key="content.id"
      v-bind:to="content.path"
    >
      <img
        class="content__img"
        v-bind:src="content.imagePath"
        v-bind:alt="content.imageAlt"
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
          id: 0,
          path: "/Lv1_Leaf",
          imagePath: require("@/assets/MaruLv1.jpg"),
          imageAlt: "図形の丸です。",
          text: "まる",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          id: 1,
          path: "/Lv1_Leaf",
          imagePath: require("@/assets/SankakuLv1.jpg"),
          imageAlt: "図形の三角です。",
          text: "さんかく",
          record: "前回の記録:〇分〇〇秒",
        },
        {
          id: 2,
          path: "/Lv1_Leaf",
          imagePath: require("@/assets/DaikeiLv1.jpg"),
          imageAlt: "図形の台形です。",
          text: "だいけい",
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
  background-color: #008000;
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
  border: 1px solid black;
  padding: 80px;
}
.content__container {
  border: 1px solid black;
  margin: 0 40px;
  padding: 5px;
  text-decoration: none;
  opacity: 0.8;
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
}
.content__text {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
