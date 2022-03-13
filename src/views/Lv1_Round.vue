<template>
  <h1 class="title">Lv.1 まる</h1>
  <v-ace-editor
    class="edit-area"
    v-model:value="content"
    lang="html"
    theme="monokai"
  />
  <div>
    <div class="reflect-area" v-html="content"></div>
  </div>
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
      content: `<div class="object"></div>
      
<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: pink;
    /*ここにコードを追加*/
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
.reflect-area {
  position: absolute;
  top: 20vh;
  left: 85vh;
  height: 40vh;
  width: 40vh;
  outline: auto;
  padding: 10px;
}
</style>
