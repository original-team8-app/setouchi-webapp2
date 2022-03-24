<template>
  <div class="leftHand">
    <!-- <div>
      <h1 class="title">{{ passTitle }}</h1>
    </div> -->
    <div
      :style="{
        backgroundImage: `url(${require('@/assets/img/rpg_field_map_grass.png')})`,
      }"
      class="screen"
    >
      <div class="createspace" v-html="passContentCode"></div>
    </div>

    <!-- <img class="roadItem" v-bind:src="require('@/assets/img/road.png')" />
        <img class="roadItem" v-bind:src="require('@/assets/img/road.png')" /> -->
    <div class="button">
      <button>ヒント💡</button>
      <button>完成！</button>
    </div>
  </div>
</template>
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
