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
import contentCode from "./ace_edtior.js"
export default {
  setup() {
    return { contentCode }
  },
  methods: {
    editorInit: function () {},
  },
  components: {
    VAceEditor,
  },
}
</script>
