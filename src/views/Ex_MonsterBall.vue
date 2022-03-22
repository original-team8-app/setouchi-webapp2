<template>
  <game-template
    :passTitle="title"
    :passColorCodes="colorCodes"
    :passSampleCode="sampleCode"
    :passContentCode="contentCode"
  />
  <v-ace-editor
    class="edit-area"
    v-model:value="contentCode"
    lang="html"
    theme="monokai"
  />
</template>

<script>
import GameTemplate from "@/components/GameTemplate.vue"
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
export default {
  components: {
    GameTemplate,
    VAceEditor,
  },
  data() {
    return {
      title: "Ex. Monster Ball",
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
    }
  },
}
</script>

<style scoped>
.edit-area {
  height: 90vh;
  width: 70vh;
  font-size: 1rem;
  outline: auto;
}
</style>
