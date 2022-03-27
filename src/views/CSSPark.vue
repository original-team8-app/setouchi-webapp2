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
      <div
        @click="
          toGame(
            content.docName,
            content.colorCodes,
            content.sampleCode,
            content.contentCode
          )
        "
      >
        <img
          class="content__img"
          :src="content.imagePath"
          :alt="content.imageAlt"
        />
        <p class="content__text">{{ content.text }}</p>
      </div>
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
      <div
        @click="
          toGame(
            exContent.docName,
            exContent.colorCodes,
            exContent.sampleCode,
            exContent.contentCode
          )
        "
      >
        <img
          class="content__img"
          :src="exContent.imagePath"
          :alt="exContent.imageAlt"
        />
        <p class="content__text">{{ exContent.text }}</p>
      </div>
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
          imagePath: require("@/assets/LeafImg.jpg"),
          imageAlt: "レベル1「Leaf」です。",
          text: "Leaf",
          docName: "Lv.1 Leaf",
          colorCodes: ["#008000", "#fafad7"],
          sampleCode: `<div class="sample__object"></div>

<style>
  .sample__object{
    width: 150px;
    height: 150px;
    background-color: #008000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px 0;
  }
    .sample__back{
    background-color: #fafad7;
    }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #008000;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/SylinderImg.jpg"),
          imageAlt: "レベル2「Cylinder」です。",
          text: "Cylinder",
          docName: "Lv.2 Cylinder",
          colorCodes: ["#40e0d0", "#20b2aa", "#fffaf0"],
          sampleCode: `<div class="sample__object"></div>

<style>
      .sample__object {
        width: 100px;
        height: 150px;
        background-color: #40e0d0;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
      }

      .sample__object::before {
        content: "";
        width: 100px;
        height: 50px;
        background-color: #20b2aa;
        position: absolute;
        top: -30px;
        left: 0;
        border-radius: 45%;
      }

      .sample__object::after {
        content: "";
        width: 100px;
        height: 50px;
        background-color: #40e0d0;
        position: absolute;
        top: 120px;
        left: 0;
        border-radius: 45%;
      }
      .sample__back{
        background-color:#fffaf0;
      }
    </style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #40e0d0;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/CancelButtonImg.jpg"),
          imageAlt: "レベル3「Cancel Button」です。",
          text: "Cancel Button",
          docName: "Lv.3 Cancel Button",
          colorCodes: ["#ff0000", "#ffffff", "#5a96c7"],
          sampleCode: `<div class="sample__object"></div>
      <div class="sample__bar1">
      <div class="sample__bar2">

<style>
  .sample__object{
    background-color: #ff0000;
    width: 180px;
    height: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .sample__bar1{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 10px;
  }
  .sample__bar2{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    border-radius: 10px;
  }
  .sample__back{
    background-color: #5a96c7;
  }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #ff0000;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/UnknownIconImg.jpg"),
          imageAlt: "レベル4「Unknown Icon」です。",
          text: "Unknown Icon",
          docName: "Lv.4 Unknown Icon",
          colorCodes: ["#808080", "#f0f8ff"],
          sampleCode: `    <div class="sample__body"></div>
    <div class="sample__head"></div>

<style>
      .sample__head {
        background-color: #808080;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -80%);
        border-radius: 50%;
        border: 15px solid #f0f8ff;
      }
      .sample__body {
        background-color: #808080;
        width: 180px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 50% 50% 0 0;
      }
      .sample__back{
        background-color:#f0f8ff;
      }
    </style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #808080;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/TriangleImg.jpg"),
          imageAlt: "レベル5「Triangle」です。",
          text: "Triangle",
          docName: "Lv.5 Triangle",
          colorCodes: ["#1e90ff", "#fff0f5"],
          sampleCode: `<div class="sample__object"></div>

<style>
  .sample__object{
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 150px solid #1e90ff;
  }
    .sample__back{
    background-color: #fff0f5;
    }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #1e90ff;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/InfinityImg.jpg"),
          imageAlt: "レベル6「Infinity」です。",
          text: "Infinity",
          docName: "Lv.6 Infinity",
          colorCodes: ["#8b008b", "#afeeee"],
          sampleCode: `<div class="sample__infinity"></div>
<style>
  .sample__infinity {
    width: 200px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
   .sample__infinity::before {
    content: "";
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    left: 0;
    border: 20px solid #8b008b;
    border-radius: 50px 50px 50px 0;
    transform: rotate(-135deg);
  }
   .sample__infinity::after {
    content: "";
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    right: 0;
    border: 20px solid #8b008b;
    border-radius: 50px 50px 50px 0;
    transform: rotate(45deg);
  }
    .sample__back{
    background-color: #afeeee;
    }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #8b008b;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/DiamondImg.jpg"),
          imageAlt: "レベル7「Diamond」です。",
          text: "Diamond",
          docName: "Lv.7 Diamond",
          colorCodes: ["#00bfff", "#fffff0"],
          sampleCode: `<div class="sample__diamond-top"></div>
      <div class="sample__diamond-bottom"></div>

<style>
  .sample__diamond-top {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    border-style: solid;
    border-color: transparent transparent #00bfff transparent;
    border-width: 0 45px 60px 45px;
  }
  .sample__diamond-bottom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    border-style: solid;
    border-color: #00bfff transparent transparent transparent;
    border-width: 100px 95px 0 95px;
  }
  .sample__back {
    background-color: #fffff0;
    }`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #00bfff;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
        {
          imagePath: require("@/assets/StarImg.jpg"),
          imageAlt: "レベル8「Star」です。",
          text: "Star",
          docName: "Lv.8 Star",
          colorCodes: ["#ffd700", "#4682b4"],
          sampleCode: `<div class="sample__star"></div>

<style>
  .sample__star {
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-bottom: 70px solid #ffd700;
      height: 0;
      width: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(35.4deg);
    }
    .sample__star:before,
    .sample__star:after {
      border-left: 100px solid transparent;
      border-right: 100px solid transparent;
      border-bottom: 70px solid #ffd700;
      content: "";
      height: 0;
      left: -100px;
      position: absolute;
      top: 0;
      width: 0;
    }
    .sample__star:before {
      transform: rotate(71deg);
    }
    .sample__star:after {
      transform: rotate(-71deg);
    }
    .sample__back{
    background-color: #4682b4;
    }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #ffd700;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
        },
      ],
      exContents: [
        {
          imagePath: require("@/assets/MonsterBallImg.jpg"),
          imageAlt: "エクストラステージ「Monster Ball」です。",
          text: "Monster Ball",
          docName: "Ex. Monster Ball",
          colorCodes: ["#cd5c5c", "#ffffff", "#781728", "#ffe4c4", "#48d1cc"],
          sampleCode: `<div class="sample__top"></div>
    <div class="sample__bottom"></div>
    <div class="sample__joint"></div>
    <div class="sample__button"></div>

<style>
  .sample__top {
    width: 200px;
    height: 100px;
    background: #cd5c5c;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    border-radius: 100px 100px 0 0;
  }
  .sample__bottom {
    width: 200px;
    height: 100px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 0 0 100px 100px;
  }
  .sample__joint {
    width: 200px;
    height: 20px;
    background: #781728;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sample__button {
    width: 50px;
    height: 50px;
    background-color: #ffe4c4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 15px solid #781728;
  }
  .sample__back {
    background: #48d1cc;
  }`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #cd5c5c;
    /*ここにコードを追加*/
  }
  .back{
    
  }
</style>
`,
        },
        {
          imagePath: require("@/assets/FrogImg.jpg"),
          imageAlt: "エクストラステージ「Frog」です。",
          text: "Frog",
          docName: "Ex. Frog",
          colorCodes: ["#fa8072", "#cd5c5c", "#fff1c1", "#293462", "#8fcb8f"],
          sampleCode: `<div class="sample__jaw">
  <div class="sample__face"></div>
</div>
<div class="sample__eye sample__left-eye"></div>
<div class="sample__eye sample__right-eye"></div>
<div class="sample__nose sample__left-nose"></div>
<div class="sample__nose sample__right-nose"></div>

<style>
  .sample__jaw {
    width: 150px;
    height: 100px;
    background: #cd5c5c;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    border-radius: 50px;
    overflow: hidden;
  }
  .sample__face {
    width: 350px;
    height: 350px;
    background: #fa8072;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 200px;
  }
  .sample__eye {
    width: 30px;
    height: 30px;
    background-color: #fff1c1;
    position: absolute;
    top: 25%;
    left: 50%;
    border-radius: 50%;
    border: 10px solid #fa8072;
  }
  .sample__eye:after {
    content: "";
    border: solid 5px #293462;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .sample__left-eye {
    transform: translate(-120%, 0);
  }
  .sample__right-eye {
    transform: translate(20%, 0);
  }
  .sample__nose {
    width: 10px;
    height: 10px;
    background-color: #293462;
    position: absolute;
    top: 55%;
    left: 50%;
    border-radius: 50%;
  }
  .sample__left-nose {
    transform: translate(-150%, 0);
  }
  .sample__right-nose {
    transform: translate(50%, 0);
  }
  .sample__back {
    background-color: #8fbc8f;
  }`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #fa8072;
    /*ここにコードを追加*/
  }
  .back{
    
  }
</style>
`,
        },
        {
          imagePath: require("@/assets/GuitarImg.jpg"),
          imageAlt: "エクストラステージ「Guitar」です。",
          text: "Guitar",
          docName: "Ex. Guitar",
          colorCodes: ["#998235", "#1a4341", "#f3ac3c"],
          sampleCode: `<div class="sample__head"></div>
<div class="sample__peg sample__left"></div>
<div class="sample__peg sample__right"></div>
<div class="sample__neck"></div>
<div class="sample__body-top"></div>
<div class="sample__body-bottom"></div>
<div class="sample__bridge"></div>
<style>
  .sample__head {
    width: 40px;
    height: 30px;
    background-color: #998235;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(15%, -50%);
    border-radius: 10px;
    z-index: 1;
  }
  .sample__peg {
    width: 20px;
    height: 4px;
    background-color: #1a4341;
    position: absolute;
    top: 50%;
    left: 85%;
    border-radius: 2px;
    z-index: 2;
  }
  .sample__left {
    transform: translate(0, -150%);
  }
  .sample__right {
    transform: translate(0, 100%);
  }
  .sample__neck {
    width: 100px;
    height: 15px;
    background-color: #1a4341;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(20%, -50%);
  }
  .sample__body-top {
    width: 35px;
    height: 35px;
    background: #f3ac3c;
    border-radius: 50%;
    border: 25px solid #998235;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-75%, -50%);
    z-index: 1;
  }
  .sample__body-top:after {
    content: "";
    border: solid 14px #1a4341;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .sample__body-bottom {
    width: 100px;
    height: 100px;
    background-color: #998235;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-130%, -50%);
  }
  .sample__bridge {
    width: 10px;
    height: 40px;
    background: #1a4341;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(0, -50%);
    border-radius: 10px;
  }
  .sample__back {
    background-color: #f3ac3c;
  }
</style>`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #998235;
    /*ここにコードを追加*/
  }
  .back{
    
  }
</style>
`,
        },
        {
          imagePath: require("@/assets/GiftImg.jpg"),
          imageAlt: "エクストラステージ「Gift」です。",
          text: "Gift",
          docName: "Ex. Gift",
          colorCodes: ["#ffffff", "#9370db"],
          sampleCode: `<div class="sample__box sample__left-top"></div>
<div class="sample__box sample__left-bottom"></div>
<div class="sample__box sample__right-top"></div>
<div class="sample__box sample__right-bottom"></div>
<div class="sample__ribbon"></div>

<style>
  .sample__box {
    width: 60px;
    height: 60px;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .sample__left-top {
    transform: translate(-115%, -80%);
  }
  .sample__left-bottom {
    transform: translate(-115%, 50%);
  }
  .sample__right-top {
    transform: translate(15%, -80%);
  }
  .sample__right-bottom {
    transform: translate(15%, 50%);
  }
  .sample__ribbon {
    width: 70px;
    position: relative;
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .sample__ribbon::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    border: 10px solid #ffffff;
    border-radius: 50px 50px 50px 0;
    transform: rotate(270deg);
  }

  .sample__ribbon::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: 0;
    border: 10px solid #ffffff;
    border-radius: 50px 50px 50px 0;
  }
  .sample__back {
    background-color: #9370db;
  }`,
          contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #9370db;
    /*ここにコードを追加*/
  }
  .back{
    
  }
</style>
`,
        },
      ],
    }
  },
  methods: {
    toGame(title, colors, sample, content) {
      this.$router.push({
        name: "game",
        params: {
          deliveryTitle: title,
          deliveryColorCodes: colors,
          deliverySampleCode: sample,
          deliveryContentCode: content,
        },
      })
    },
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
