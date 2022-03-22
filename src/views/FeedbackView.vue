<template>
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
  <router-link to="/three">
    <button class="finish-button">ステージ選択画面へ</button>
  </router-link>
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
        logo: "お疲れさまでした！",
        text: "他のステージにも挑戦してみてね！",
      },
      contentTitle: "今回の記録",
    }
  },
}
</script>

<style scoped>
.title__container {
  background-color: pink;
}
.title__logo {
  font-size: 2rem;
  text-align: justify;
  padding-left: 4rem;
}
.title__text {
  font-size: 1.5rem;
  text-align: justify;
  padding-left: 6rem;
}
.content__container {
  margin: 50px auto;
  height: 420px;
  width: 1150px;
  border: 1px solid black;
  position: relative;
}
.content__title {
  position: absolute;
  top: -4%;
  left: 5%;
  font-size: 1.3rem;
  background-color: white;
  padding: 0 10px;
}
.edit-area {
  position: absolute;
  top: 7vh;
  left: 12vh;
  height: 320px;
  width: 70vh;
  font-size: 1rem;
  outline: auto;
}
.back {
  position: absolute;
  top: 7vh;
  left: 93vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.finish-button {
  height: 70px;
  width: 230px;
  font-size: 1.3rem;
  position: absolute;
  top: 90vh;
  left: 130vh;
}
</style>
