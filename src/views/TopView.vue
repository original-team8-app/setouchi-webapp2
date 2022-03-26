<template>
  <div class="background">
    <div class="title">{{ title }}</div>
    <button class="login-button">{{ loginText }}</button>
    <div class="contents" v-for="content in contents" :key="content.index">
      <img
        class="contents__img"
        :src="content.imgPath"
        :alt="content.altText"
      />
      <div class="contents__title">{{ content.title }}</div>
      <div class="contents__text">{{ content.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Setouchi Web App仮",
      loginText: "ログイン",
      contents: [
        {
          imgPath: require("@/assets/LeafImg.jpg"),
          altText: "",
          title: "Quiz",
          text: "初級のクイズ。便利なショートカットキーがたくさん覚えられるよ。",
        },
        {
          imgPath: require("@/assets/SylinderImg.jpg"),
          altText: "",
          title: "Game",
          text: "中級のゲーム。flexboxの使い方について楽しく学ぼう！。",
        },
        {
          imgPath: require("@/assets/CSSParkImg.jpg"),
          altText: " CSS Park",
          title: "CSS Park",
          text: "上級「CSS Park」。イラストを作ってCSSの腕試しをしよう！",
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
.background {
  background-color: #fcf0e3;
}
.title {
  font-size: 5rem;
  font-weight: bold;
  display: inline-block;
}
.login-button {
  font-size: 1rem;
}
.contents__img {
  width: 500px;
}
</style>
