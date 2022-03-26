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
      title: "Ex. Guitar",
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
    }
  },
}
</script>

<style scoped>
.edit-area {
  height: 90vh;
  width: 75vh;
  font-size: 1rem;
  outline: auto;
}
</style>
