<template>
  <h1 class="title">Lv.1 葉っぱ</h1>
  <v-ace-editor
    class="edit-area"
    v-model:value="content"
    lang="html"
    theme="monokai"
  />
  <div>
    <div class="back" v-html="content"></div>
    <div
      class="sample__back sample__opacity"
      v-html="sample"
      style="opacity: 0.5"
    ></div>
  </div>
  <div>
    <div class="sample__back" v-html="sample"></div>
  </div>
  <label><input type="range" value="0" list="opacityList" />透過度</label>
  <datalist id="opacityList">
    <option value="0"></option>
    <option value="20"></option>
    <option value="40"></option>
    <option value="60"></option>
    <option value="80"></option>
    <option value="100"></option>
  </datalist>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
export default {
  components: {
    VAceEditor,
  },
  data() {
    return {
      sample: `<div class="sample__object"></div>

<style>
  .sample__object{
    width: 150px;
    height: 150px;
    background-color: #008000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px 0;
  }
    .sample__back{
    background-color: #fafad7;
    }
</style>`,
      content: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #008000;
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
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.title {
  text-align: left;
  padding-left: 2rem;
}
.edit-area {
  height: 80vh;
  width: 70vh;
  outline: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.back {
  position: absolute;
  top: 20vh;
  left: 85vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__back {
  position: absolute;
  top: 20vh;
  left: 135vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__opacity {
  top: 20vh;
  left: 85vh;
}
</style>
