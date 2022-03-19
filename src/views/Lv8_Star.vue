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
      title: "Lv.8 Star",
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
