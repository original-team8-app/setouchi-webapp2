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
      title: "Lv.2 円柱",
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
    width: 100px;
    height: 150px;
    background-color: #40e0d0;
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
