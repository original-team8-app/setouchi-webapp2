<template>
  <v-ace-editor
    v-model:value="contentCode"
    @init="editorInit"
    lang="css"
    theme="chrome"
    style="height: 300px"
  />
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
export default {
  methods: {
    editorInit: function () {},
  },
  components: {
    VAceEditor,
  },
  data() {
    return {
      title: "Lesson1",
      colorCodes: ["#40e0d0", "#20b2aa", "#fffaf0"],
      contentCode: `
    width: 100%;
    height: 100%;
    /*ここにコードを追加*/
  `,
    }
  },
}
</script>
