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
      title: "Lv.6 Infinity",
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
}
</style>
