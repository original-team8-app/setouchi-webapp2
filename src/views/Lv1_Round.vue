<template>
  <v-ace-editor
    class="edit__area"
    v-model:value="content"
    lang="html"
    theme="monokai"
  />
  <div class="display__area"></div>
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
      content: "",
    }
  },
  // computed: {
  //   inputCode: function () {
  //     return this.content
  //   },
  // },
}
</script>

<style scoped>
.edit__area {
  height: 80vh;
  width: 80vh;
}
.display__area {
  position: absolute;
  top: 20vh;
  left: 90vh;
  height: 40vh;
  width: 40vh;
  outline: 1px solid black;
}
</style>
