<template>
  <div class="background">
    <header class="header">
      <div class="title">{{ title }}</div>
      <button class="login-button">{{ loginText }}</button>
    </header>
    <main>
      <div class="contents" v-for="content in contents" :key="content.index">
        <img
          class="contents__img"
          :src="content.imgPath"
          :alt="content.altText"
        />
        <div class="contents__text">
          <p class="contents__mainTx">{{ content.mainTx }}</p>
          <p class="contents__subTx">{{ content.subTx }}</p>
        </div>
      </div>
    </main>
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
          imgPath: require("@/assets/Img1.jpeg"),
          altText: "",
          mainTx: "Quiz",
          subTx:
            "初級のクイズ。便利なショートカットキーがたくさん覚えられるよ。",
        },
        {
          imgPath: require("@/assets/Img1.jpeg"),
          altText: "",
          mainTx: "Game",
          subTx: "中級のゲーム。flexboxの使い方について楽しく学ぼう！。",
        },
        {
          imgPath: require("@/assets/CSSParkImg.jpg"),
          altText: " CSS Park",
          mainTx: "CSS Park",
          subTx: "上級「CSS Park」。イラストを作ってCSSの腕試しをしよう！",
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
  background-color: #fcf5ed;
}
@keyframes titleAnimation {
  0% {
    letter-spacing: 0.3em;
    opacity: 0;
  }
}
.title {
  font-size: 5rem;
  font-weight: bold;
  display: inline-block;
  margin: 30px auto 80px auto;
  animation: titleAnimation 1.5s;
}
.login-button {
  font-size: 1rem;
}
main {
  width: 100%;
  margin: 0 auto;
}
.contents {
  position: relative;
  margin: 100px auto;
}
.contents:nth-of-type(odd) .contents__img {
  transform: translate(-300px, 0);
}
.contents:nth-of-type(even) .contents__img {
  transform: translate(300px, 0);
}
.contents:nth-of-type(odd) .contents__text {
  right: 0;
}
.contents__img {
  width: 600px;
}
.contents__text {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
}
</style>
