<template>
  <head>
    <meta charset="UTF-8" />
  </head>
  <div class="onePage">
    <div class="leftHand">
      <div class="screen">
        <div class="buildingField" v-bind:style="contentCode">
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
          <div
            class="houseField"
            :style="{
              backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
            }"
          >
            <img src="/img/house_7.png" class="build" />
          </div>
        </div>
      </div>
    </div>
    <div class="rightHand">
      <h1>Lesson6</h1>
      <section>
        <p>
          situation: この地区は住宅街にする予定です。<br />
          一軒一軒の面積が同じになるように宅地を配置していきましょう<br />
        </p>

        <p>
          mission: css
          gridを使ってみましょう！grid-template-columnsという物を使います！
        </p>

        <!-- <editorSpace /> -->
        <v-ace-editor
          v-model:value="contentCode"
          @init="editorInit"
          lang="css"
          theme="chrome"
          style="height: 300px"
        />
      </section>
      <div class="runningButton">
        <button v-on:click="openModal" class="d_button">予想図</button>
        <button @click="$router.back()" class="d_button">完成！</button>
      </div>
    </div>

    <div id="overlay" v-show="showContent">
      <div id="content">
        <img src="/img/sample_lesson6.png" class="sample-img" />
        <div>
          ※grid-template-columnsは縦列の幅を決める物です。予想図は幅がそれぞれ全体の20%になっています
        </div>
        <p><button v-on:click="closeModal" class="d_button">閉じる</button></p>
      </div>
    </div>
  </div>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
// import editorSpace from "@/components/editorSpace.vue"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"

// import CSSQuizeTemplate from "@/components/CSSQuizeTemplate.vue"
export default {
  methods: {
    editorInit: function () {},
    jumpToQ2: function () {
      this.$router.push("/css_questions/second_question")
    },
    openModal: function () {
      this.showContent = true
    },
    closeModal: function () {
      this.showContent = false
    },
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
      showContent: false,
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

.screen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: row;
  background-color: burlywood;
}

.leftHand {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50vw;
}

.build {
  object-fit: contain;
  width: 100px;
  height: 100px;
}

.build_target {
  object-fit: contain;
  width: 150px;
  height: 150px;
}

.rightHand {
  width: 45%;
}

#overlay {
  /*要素を重ねた時の順番*/
  z-index: 1;

  /*画面全体を覆う設定*/
  position: fixed;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

.sample-img {
  object-fit: contain;
  width: 80%;
  height: 80%;
}

.runningButton {
  display: flex;
  justify-content: space-evenly;
}

.d_button {
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem;
  background: #f7f7f7;
  border-left: solid 6px #58ad5a;
  color: #58ad5a;
  font-weight: bold;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.22);
  width: 25%;
}

.d_button:active {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
  transform: translateY(2px);
}
</style>

<!-- @/assets/img/rpg_field_map_grass.png -->
