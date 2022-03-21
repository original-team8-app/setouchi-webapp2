<template>P</template>
<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
export default {
  props: {
    passContentCode: String,
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VAceEditor,
  },
  data() {
    return {
      title: "Lesson1",
    }
  },
}
</script>

<style scoped></style>
