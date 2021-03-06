<template>
  <div class="background">
    <h1 class="title">{{ passTitle }}</h1>
    <v-ace-editor
      class="edit-area"
      v-model:value="updateContentCode"
      @init="editorInit"
      lang="html"
      theme="monokai"
    />
    <div class="label__canvas">{{ labels.canvasLabel }}</div>
    <div class="label__sample">{{ labels.sampleLabel }}</div>
    <div>
      <div class="back" v-html="passContentCode"></div>
      <div
        class="sample__back sample__opacity"
        v-html="passSampleCode"
        :style="{ opacity: opacityValue }"
      ></div>
    </div>
    <div>
      <div class="sample__back" v-html="passSampleCode"></div>
    </div>
    <div class="opacity-bar">
      {{ labels.opacityLabel }}
      <input type="range" min="0" max="1" step="0.01" v-model="opacityValue" />
    </div>
    <div class="how-to__wrapper">
      <p class="how-to__title">{{ howToTitle }}</p>
      <ol class="how-to__text">
        <li v-for="howToText in howToTexts" :key="howToText.index">
          {{ howToText }}
        </li>
      </ol>
      <p class="how-to__hint">{{ howToHint }}</p>
    </div>
    <div class="color-palette">
      <div
        class="color-list"
        v-for="passColorCode in passColorCodes"
        :key="passColorCode.index"
      >
        <div
          class="color-checker"
          :style="{
            backgroundColor: passColorCode,
          }"
        ></div>
        <div class="color-code">{{ passColorCode }}</div>
      </div>
    </div>
    <button class="finish-button" @click="updateSavedContentCode">
      {{ finishButtonText }}
    </button>
  </div>
</template>

<script>
import { VAceEditor } from "vue3-ace-editor"
import "ace-builds/src-noconflict/mode-html"
import "ace-builds/src-noconflict/theme-monokai"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  components: {
    VAceEditor,
  },
  props: {
    passTitle: String,
    passColorCodes: Array,
    passSampleCode: String,
    passContentCode: String,
  },
  emits: ["update:contentCode"],
  data() {
    return {
      opacityValue: 0,
      labels: {
        canvasLabel: "- キャンバス",
        sampleLabel: "- 完成例",
        opacityLabel: "透過度: ",
      },
      howToTitle: "遊び方",
      howToTexts: [
        "html,cssを記述して「完成例」イメージを作成しよう!",
        "エディタに記述したコードは「キャンバス」に反映されるよ!",
        "正解のコードは1つとは限らないよ! 色々な方法を模索してみよう!",
        "「完成!」ボタンを押して終了！ その時点のコードとキャンバスが保存されるよ!",
      ],
      howToHint: "Hint. ブラウザの「検証ツール」で例題の答えが見られるかも...",
      finishButtonText: "完成！",
    }
  },
  computed: {
    updateContentCode: {
      get() {
        return this.passContentCode
      },
      set(value) {
        this.$emit("update:contentCode", value)
      },
    },
  },
  methods: {
    editorInit: function () {},
    updateSavedContentCode() {
      setDoc(doc(db, "contents", this.passTitle), {
        contentCode: this.passContentCode,
      })
      this.$router.push({
        name: "feedback",
        params: { deliveryData: this.passContentCode },
      })
    },
  },
}
</script>

<style scoped>
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.title {
  text-align: left;
  padding: 10px 3rem;
  margin: 0;
  background: linear-gradient(to right, #e9f5db, #fff);
}
.edit-area {
  height: 90vh;
  width: 75vh;
  font-size: 1rem;
  outline: auto;
}
.label__canvas {
  position: absolute;
  top: 21vh;
  left: 80vh;
  width: 120px;
  font-size: 1.2rem;
}
.label__sample {
  position: absolute;
  top: 21vh;
  left: 135vh;
  width: 80px;
  font-size: 1.2rem;
}
.back {
  position: absolute;
  top: 25vh;
  left: 80vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__back {
  position: absolute;
  top: 25vh;
  left: 135vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__opacity {
  top: 25vh;
  left: 80vh;
}
.opacity-bar {
  position: absolute;
  top: 69vh;
  left: 88.5vh;
  transform: scale(1.7, 1.5);
  font-size: 14px;
}
.how-to__wrapper {
  background-color: rgb(230, 227, 227);
  width: 450px;
  height: 230px;
  position: absolute;
  top: 80vh;
  left: 75vh;
  overflow-y: scroll;
}
.how-to__title {
  font-size: 1.5rem;
}
.how-to__text li {
  text-align: justify;
  margin-bottom: 15px;
  padding-right: 30px;
}
.how-to__hint {
  font-size: 14px;
  padding: 15px 30px 0 60px;
  text-align: justify;
  text-indent: -35px;
}
.color-palette {
  background-color: rgb(230, 227, 227);
  width: 300px;
  padding: 10px 10px;
  position: absolute;
  top: 70vh;
  left: 135vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.color-list {
  display: flex;
  margin: 10px 10px 10px 10px;
}
.color-checker {
  height: 20px;
  width: 20px;
  outline: auto;
  border-radius: 10px;
}
.color-code {
  line-height: 20px;
  font-size: 1.3rem;
  padding: 0 10px;
}
.finish-button {
  position: absolute;
  top: 97vh;
  left: 138vh;
  height: 70px;
  width: 280px;
  font-size: 1.5rem;
}
</style>
