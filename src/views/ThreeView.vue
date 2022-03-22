<template>
  <div class="title__container">
    <h2 class="title__logo">{{ title.logo }}</h2>
    <p class="title__text">{{ title.text }}</p>
  </div>
  <div class="content__wrapper">
    <span class="content__title">{{ contentTitle.normal }}</span>
    <div
      class="content__container"
      v-for="content in contents"
      :key="content.index"
    >
      <router-link :to="content.path">
        <img
          class="content__img"
          :src="content.imagePath"
          :alt="content.imageAlt"
        />
        <p class="content__text">{{ content.text }}</p>
      </router-link>
      <button class="content__record" @click="toRecord(content.docName)">
        {{ recordText }}
      </button>
    </div>
  </div>
  <div class="content__wrapper">
    <span class="content__title">{{ contentTitle.extra }}</span>
    <div
      class="content__container"
      v-for="exContent in exContents"
      :key="exContent.index"
    >
      <router-link :to="exContent.path">
        <img
          class="content__img"
          :src="exContent.imagePath"
          :alt="exContent.imageAlt"
        />
        <p class="content__text">{{ exContent.text }}</p>
      </router-link>
      <button class="content__record" @click="toRecord(exContent.docName)">
        {{ recordText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        logo: "CSS Park",
        text: "-コードを書いて例題のイメージに近づけよう！( 全12ステージ )",
      },
      contentTitle: {
        normal: "Contents Lv.1~8",
        extra: "Contents Extra",
      },
      recordText: "前回の記録",
      contents: [
        {
          path: "/Lv1_Leaf",
          imagePath: require("@/assets/LeafImg.jpg"),
          imageAlt: "レベル1「Leaf」です。",
          text: "Leaf",
          docName: "Lv.1 Leaf",
        },
        {
          path: "/Lv2_Cylinder",
          imagePath: require("@/assets/SylinderImg.jpg"),
          imageAlt: "レベル2「Cylinder」です。",
          text: "Cylinder",
          docName: "Lv.2 Cylinder",
        },
        {
          path: "/Lv3_CancelButton",
          imagePath: require("@/assets/CancelButtonImg.jpg"),
          imageAlt: "レベル3「Cancel Button」です。",
          text: "Cancel Button",
          docName: "Lv.3 Cancel Button",
        },
        {
          path: "/Lv4_UnknownIcon",
          imagePath: require("@/assets/UnknownIconImg.jpg"),
          imageAlt: "レベル4「Unknown Icon」です。",
          text: "Unknown Icon",
          docName: "Lv.4 Unknown Icon",
        },
        {
          path: "/Lv5_Triangle",
          imagePath: require("@/assets/TriangleImg.jpg"),
          imageAlt: "レベル5「Triangle」です。",
          text: "Triangle",
          docName: "Lv.5 Triangle",
        },
        {
          path: "/Lv6_Infinity",
          imagePath: require("@/assets/InfinityImg.jpg"),
          imageAlt: "レベル6「Infinity」です。",
          text: "Infinity",
          docName: "Lv.6 Infinity",
        },
        {
          path: "/Lv7_Diamond",
          imagePath: require("@/assets/DiamondImg.jpg"),
          imageAlt: "レベル7「Diamond」です。",
          text: "Diamond",
          docName: "Lv.7 Diamond",
        },
        {
          path: "/Lv8_Star",
          imagePath: require("@/assets/StarImg.jpg"),
          imageAlt: "レベル8「Star」です。",
          text: "Star",
          docName: "Lv.8 Star",
        },
      ],
      exContents: [
        {
          path: "/Ex_MonsterBall",
          imagePath: require("@/assets/MonsterBallImg.jpg"),
          imageAlt: "エクストラステージ「Monster Ball」です。",
          text: "Monster Ball",
          docName: "Ex. Monster Ball",
        },
        {
          path: "/Ex_Frog",
          imagePath: require("@/assets/FrogImg.jpg"),
          imageAlt: "エクストラステージ「Frog」です。",
          text: "Frog",
          docName: "Ex. Frog",
        },
        {
          path: "/Ex_Guitar",
          imagePath: require("@/assets/GuitarImg.jpg"),
          imageAlt: "エクストラステージ「Guitar」です。",
          text: "Guitar",
          docName: "Ex. Guitar",
        },
      ],
    }
  },
  methods: {
    toRecord(name) {
      this.$router.push({ name: "record", params: { deliveryDocName: name } })
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
  top: -1.3rem;
  left: 3%;
  background-color: #faffff;
  padding: 0 1rem 0 1rem;
}
.content__container {
  border: 1px solid black;
  margin: 30px 30px;
  border-radius: 5px;
  opacity: 0.9;
  transition: all 0.3s;
  position: relative;
}
.content__container:hover {
  opacity: 1;
  transform: scale(1.05, 1.05);
}
.content__container * {
  color: black;
  text-decoration: none;
}
.content__img {
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px 5px 0 5px;
  width: 250px;
}
.content__text {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
  padding: 20px 0 60px 0;
}
.content__record {
  text-decoration: underline;
  position: absolute;
  bottom: 4%;
  transform: translate(-50%, 0);
  border: none;
  background-color: #faffff;
  font-size: 1rem;
  color: #696969;
}
.content__record:hover {
  color: black;
}
</style>
