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
      title: "Lv.4 Unknown Icon",
      colorCodes: ["#808080", "#f0f8ff"],
      sampleCode: `    <div class="sample__body"></div>
    <div class="sample__neck"></div>
    <div class="sample__head"></div>


<style>
      .sample__head {
        background-color: #808080;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
        border-radius: 50px;
      }
      .sample__neck {
        background-color: #f0f8ff;
        width: 120px;
        height: 120px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -90%);
        border-radius: 60px;
      }
      .sample__body {
        background-color: #808080;
        width: 180px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -10%);
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
</style>`,
    }
  },
}
</script>

<style scoped>
.edit-area {
  height: 80vh;
  width: 70vh;
  font-size: 1rem;
  outline: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
