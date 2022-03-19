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
      title: "Lv.3 Cancel Button",
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
    }
  },
}
</script>

<style scoped>
.edit-area {
  height: 95vh;
  width: 70vh;
  font-size: 1rem;
  outline: auto;
}
</style>
