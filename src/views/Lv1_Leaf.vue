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
      v-bind:style="{ opacity: opacityValue }"
    ></div>
  </div>
  <div>
    <div class="sample__back" v-html="sample"></div>
  </div>
  <label class="opacity-bar"
    ><input
      type="range"
      min="0"
      max="1"
      step="0.01"
      list="opacityList"
      v-model="opacityValue"
    />透過度</label
  >
  <datalist id="opacityList">
    <option value="0"></option>
    <option value="0.2"></option>
    <option value="0.4"></option>
    <option value="0.6"></option>
    <option value="0.8"></option>
    <option value="1"></option>
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
      opacityValue: 0,
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
  font-size: 1rem;
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
.opacity-bar {
  position: absolute;
  top: 65vh;
  left: 95vh;
  transform: scale(1.7, 1.5);
}
</style>
