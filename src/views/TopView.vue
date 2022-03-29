<template>
  <div class="background">
    <header class="header">
      <div class="title">{{ title }}</div>
    </header>
    <main>
      <div
        class="contents"
        v-for="content in contents"
        :key="content.index"
        @click="toGames(content.name)"
      >
        <img
          class="contents__img"
          :src="content.imgPath"
          :alt="content.altText"
        />
        <div class="contents__text">
          <p
            class="contents__mainTx"
            :style="{ backgroundColor: content.bgColor }"
          >
            {{ content.mainTx }}
          </p>
          <p class="contents__subTx">{{ content.subTx }}</p>
        </div>
      </div>
    </main>
  </div>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
import swal from "sweetalert"

export default {
  props: ["relayLoginData"],
  data() {
    return {
      title: "Codable",
      isLogin: this.relayLoginData,
      copyright: "(c) 2022 Setouchi Ganguro Revengers",
      contents: [
        {
          name: "home",
          imgPath: require("@/assets/Img1.jpeg"),
          altText: "",
          mainTx: "Quiz",
          bgColor: "rgba(255, 210, 120, 0.6)",
          subTx:
            "初級のクイズ。便利なショートカットキーがたくさん覚えられるよ。",
        },
        {
          name: "about",
          imgPath: require("@/assets/Image_town-illust_10-1024x206.png"),
          altText: "",
          mainTx: "Mayor CSS",
          bgColor: "rgba(165, 220, 220, 0.6)",
          subTx: "中級のゲーム。flexboxの使い方について楽しく学ぼう！。",
        },
        {
          name: "css-park",
          imgPath: require("@/assets/CSSParkImg.jpg"),
          altText: " CSS Park",
          bgColor: "rgba(190, 235, 195, 0.6)",
          mainTx: "CSS Park",
          subTx: "上級「CSS Park」。イラストを作ってCSSの腕試しをしよう！",
        },
      ],
    }
  },
  methods: {
    toGames(game) {
      if (this.isLogin) {
        this.$router.push({ name: game })
      } else {
        swal("まずはログインしてください！")
      }
    },
    created() {
      console.log(this.isLogin)
    },
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
  /* font-weight: bold; */
  display: inline-block;
  margin: 100px auto 120px auto;
  letter-spacing: 0.15em;
  text-decoration: underline 4px;
  animation: titleAnimation 1.5s;
}
@keyframes mainAnimation {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  50% {
    transform: translateY(20px);
    opacity: 0;
  }
}
main {
  max-width: 950px;
  height: 1850px;
  width: 100%;
  margin: 0 auto;
  transform: 0;
  opacity: 1;
  animation: mainAnimation 2s;
}
.contents {
  position: relative;
  opacity: 0.8;
  transition: all 0.3s;
}
.contents:hover {
  opacity: 1;
  transform: scale(1.02);
  transition: all 0.6s;
}
.contents:not(:last-of-type) {
  margin-bottom: 200px;
}
.contents:nth-of-type(odd) .contents__img {
  transform: translate(-180px, 0);
}
.contents:nth-of-type(even) .contents__img {
  transform: translate(180px, 0);
}
.contents:nth-of-type(odd) .contents__text {
  right: 0;
}
.contents:nth-of-type(even) .contents__text {
  align-items: flex-start;
}
.contents__img {
  width: 600px;
  border-radius: 10px;
}
.contents__text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 40px;
}
.contents__mainTx {
  font-size: 3rem;
  padding: 10px 0;
  margin: 0 auto;
  width: 400px;
  border-radius: 5px;
}
.contents__subTx {
  font-size: 1.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px 20px;
  width: 300px;
  border-radius: 5px;
}
footer {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #415a77;
}
footer p {
  font-size: 1.3rem;
}
</style>
