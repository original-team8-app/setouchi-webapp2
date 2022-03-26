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
      title: "Ex. Gift",
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
