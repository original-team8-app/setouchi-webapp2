<template>
  <head>
    <meta charset="UTF-8" />
  </head>
  <div class="first-question">
    <h1>第1問</h1>
    <div class="questionArea">
      <div
        :style="{
          backgroundImage: `url(${require('@/assets/img/rpg_field_map_grass.png')})`,
        }"
        class="cssArea"
      >
        <div class="rightSide">
          <img
            class="carIcon"
            v-bind:src="require('@/assets/img/carIcon9.png')"
          />
        </div>
        <img
          class="goalIcon"
          v-bind:src="require('@/assets/img/goalflag.png')"
        />
        <img class="roadIcon" v-bind:src="require('@/assets/img/road.png')" />
        <img class="roadIcon" v-bind:src="require('@/assets/img/road.png')" />
      </div>
      <div id="CssEditor">
        <div>
          <h2>CSSで記述しよう！</h2>
          <p>CSSの表現を使い道路を配置して車を目的地へ導きましょう！</p>
        </div>
        <v-ace-editor
          v-model:value="content"
          @init="editorInit"
          lang="html"
          theme="chrome"
          style="height: 300px"
        />
        <button>ヒント💡</button>
        <button>完成！</button>
      </div>
    </div>
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
      title: "Lv.2 Cylinder",
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
.questionArea {
  display: flex;
  justify-content: space-around;
}

.writtenCode {
  width: 400px;
  height: 300px;
}

.cssArea {
  width: 700px;
  height: 600px;
  display: flex;
  justify-content: space-between;
}

.carIcon {
  display: flex;
  align-items: flex-end;
  width: 85%;
  height: 30%;
}

.goalIcon {
  width: 15%;
  height: 20%;
}

.rightSide {
  display: flex;
  align-items: end;
}

.roadIcon {
  height: 50%;
  width: 10%;
}
</style>

<!-- @/assets/img/rpg_field_map_grass.png -->
