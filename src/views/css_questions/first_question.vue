<template>
  <head>
    <meta charset="UTF-8" />
  </head>
  <div class="onePage">
    <div class="leftHand">
      <div
        :style="{
          backgroundImage: `url(${require('@/assets/rpg_field_map_grass.png')})`,
        }"
        class="screen"
      >
        <div class="buildingField" v-bind:style="contentCode">
          <img src="/img/building-05.png" class="build1" />
          <img src="/img/building-01.png" class="build2" />
          <img src="/img/building-07.png" class="build2" />
        </div>
      </div>
    </div>
    <div class="runningButton">
      <button>ヒント💡</button>
      <button @click="jumpToQ2">完成！</button>
    </div>
    <h2></h2>
    <div class="rightHand">
      <h1>Lesson1</h1>
      <section>
        <p>
          situation: この街にデパート、病院、学校が設置されました。<br />
          更なる街の発展のためこの地区を一面舗装しましょう。
        </p>

        <p>mission: 参考画像のようにbackground-colorをgrayにしましょう</p>
      </section>

      <!-- <editorSpace /> -->
      <v-ace-editor
        v-model:value="contentCode"
        @init="editorInit"
        lang="css"
        theme="chrome"
        style="height: 300px"
      />
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
}

.leftHand {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 50vw;
}

.build1 {
  object-fit: contain;
  width: 100px;
  height: 100px;
}

.build2 {
  object-fit: contain;
  width: 100px;
  height: 100px;
}

.rightHand {
  width: 45%;
}
</style>

<!-- @/assets/img/rpg_field_map_grass.png -->
