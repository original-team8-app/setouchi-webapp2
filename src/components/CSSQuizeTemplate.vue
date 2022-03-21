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
      colorCodes: ["#40e0d0", "#20b2aa", "#fffaf0"],
      sampleCode: `<div class="sample__object"></div>

<style>
      .sample__object {
        width: 100px;
        height: 150px;
        background-color: #40e0d0;
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);
      }

      .sample__object::before {
        content: "";
        width: 100px;
        height: 50px;
        background-color: #20b2aa;
        position: absolute;
        top: -30px;
        left: 0;
        border-radius: 45%;
      }

      .sample__object::after {
        content: "";
        width: 100px;
        height: 50px;
        background-color: #40e0d0;
        position: absolute;
        top: 120px;
        left: 0;
        border-radius: 45%;
      }
      .sample__back{
        background-color:#fffaf0;
      }
    </style>`,
      contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #40e0d0;
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

.carIcon {
  padding-top: 70%;
  width: 15%;
  height: 20%;
}

.goalFlag {
  width: 10%;
  height: 10%;
}

.createspace {
  width: 100%;
  height: 100%;
  color: aliceblue;
}

.roadItem {
}
</style>
