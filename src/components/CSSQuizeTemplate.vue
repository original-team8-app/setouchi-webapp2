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
      <div id="buildingField" v-html="passContentCode"></div>
    </div>
  </div>

  <!-- <img class="roadItem" v-bind:src="require('@/assets/img/road.png')" />
        <img class="roadItem" v-bind:src="require('@/assets/img/road.png')" /> -->
  <div class="runningButton">
    <button>ヒント💡</button>
    <button>完成！</button>
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

<style scoped>
.screen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: row;
}

.editingSpace {
  width: 40%;
}

.leftHand {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50vw;
}
</style>
