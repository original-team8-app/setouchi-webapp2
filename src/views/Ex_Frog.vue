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
    theme="chrome"
  />
</template>

<script>
import GameTemplate from "@/components/GameTemplate.vue"
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-chrome"
export default {
  components: {
    GameTemplate,
    VAceEditor,
  },
  data() {
    return {
      title: "Ex. Frog",
      colorCodes: ["#fa8072", "#cd5c5c", "#fff1c1", "#293462", "#8fcb8f"],
      sampleCode: `<div class="sample__jaw">
  <div class="sample__face"></div>
</div>
<div class="sample__eye sample__left-eye"></div>
<div class="sample__eye sample__right-eye"></div>
<div class="sample__nose sample__left-nose"></div>
<div class="sample__nose sample__right-nose"></div>

<style>
  .sample__jaw {
    width: 150px;
    height: 100px;
    background: #cd5c5c;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    border-radius: 50px;
    overflow: hidden;
  }
  .sample__face {
    width: 350px;
    height: 350px;
    background: #fa8072;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 200px;
  }
  .sample__eye {
    width: 30px;
    height: 30px;
    background-color: #fff1c1;
    position: absolute;
    top: 25%;
    left: 50%;
    border-radius: 50%;
    border: 10px solid #fa8072;
  }
  .sample__eye:after {
    content: "";
    border: solid 5px #293462;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .sample__left-eye {
    transform: translate(-120%, 0);
  }
  .sample__right-eye {
    transform: translate(20%, 0);
  }
  .sample__nose {
    width: 10px;
    height: 10px;
    background-color: #293462;
    position: absolute;
    top: 55%;
    left: 50%;
    border-radius: 50%;
  }
  .sample__left-nose {
    transform: translate(-150%, 0);
  }
  .sample__right-nose {
    transform: translate(50%, 0);
  }
  .sample__back {
    background-color: #8fbc8f;
  }`,
      contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #fa8072;
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
