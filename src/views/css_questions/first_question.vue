<template>
  <head>
    <meta charset="UTF-8" />
  </head>
  <div class="onePage">
    <CSSQuizeTemplate :passTitle="title" :passContentCode="contentCode" />
    <h2></h2>
    <div class="rightHand">
      <h1>Lesson1</h1>
      <div class="editingSpace">
        <h2>CSSで記述しよう！</h2>
        <p>CSSの表現を使い建物を配置して街を作りましょう！</p>
      </div>
      <v-ace-editor
        v-model:value="contentCode"
        @init="editorInit"
        lang="html"
        theme="chrome"
        style="height: 300px"
      />
    </div>
  </div>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
import CSSQuizeTemplate from "@/components/CSSQuizeTemplate.vue"
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VAceEditor,
    CSSQuizeTemplate,
  },
  data() {
    return {
      title: "Lesson1",
      colorCodes: ["#40e0d0", "#20b2aa", "#fffaf0"],
      contentCode: `
<style>
  #buildingField{
    width: 100%;
    height: 100%;
    /*ここにコードを追加*/
  }

</style>`,
    }
  },
}
</script>

<style scoped>
.codeArea {
  width: 50%;
}

.onePage {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50%;
}
</style>

<!-- @/assets/img/rpg_field_map_grass.png -->
