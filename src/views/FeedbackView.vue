<template>
  <div class="background">
    <div class="title__container">
      <div class="title__logo">{{ title.logo }}</div>
      <div class="title__text">{{ title.text }}</div>
    </div>
    <div class="content__container">
      <div class="content__title">{{ contentTitle }}</div>
      <v-ace-editor
        class="edit-area"
        :value="deliveryData"
        lang="html"
        theme="monokai"
      />
      <div class="back" v-html="deliveryData"></div>
    </div>
    <router-link to="/css-park">
      <button class="finish-button">{{ buttonText }}</button>
    </router-link>
  </div>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
export default {
  components: {
    VAceEditor,
  },
  props: ["deliveryData"],
  data() {
    return {
      title: {
        logo: "完成！お疲れさまでした！",
        text: "他のステージにも挑戦してみてね！",
      },
      contentTitle: "今回の記録",
      buttonText: "ステージ選択画面へ",
    }
  },
}
</script>

<style scoped>
.background {
  background: linear-gradient(#eff7e8, #fff);
}

.title__container {
  background-color: #e4f3d2;
}
.title__logo {
  padding-top: 20px;
  font-size: 2rem;
  text-align: center;
}
.title__text {
  font-size: 1.3rem;
  text-align: center;
}
.content__container {
  margin: 50px auto;
  height: 420px;
  width: 1250px;
  border: 1px solid #303030;
  border-radius: 10px;
  background: linear-gradient(#f7faf4, #fff);
  position: relative;
}
.content__title {
  position: absolute;
  top: -4%;
  left: 5%;
  font-size: 1.3rem;
  background: linear-gradient(#eff7e8, #f7faf4);
  padding: 0 10px;
}
.edit-area {
  position: absolute;
  top: 7vh;
  left: 15vh;
  height: 320px;
  width: 75vh;
  font-size: 1rem;
  outline: auto;
}
.back {
  position: absolute;
  top: 7vh;
  left: 105vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.finish-button {
  height: 70px;
  width: 350px;
  font-size: 1.5rem;
  position: absolute;
  top: 89vh;
  left: 125vh;
}
</style>
