<template>
  <div class="topBox">
    <div class="title">
      <h2>ShortCutQuiz(仮)</h2>
      <div class="marker"></div>
    </div>
    <img src="" alt="無人島で遭難中" />
    <p>木を集めて脱出を目指せ！</p>
  </div>
  <div v-if="startFlag != true" class="middleBox">
    <button class="startButton" @click="gameStart">START</button>
    <ul>
      <a href="">説明</a>
    </ul>
    <p>これまでの最高スコア</p>
  </div>
  <div class="result" v-if="current_question_counts > 2">
    <h2>結果</h2>
    <p>〇問正解</p>
    <img src="" alt="脱出成功！" />
    <p>脱出成功！！</p>
    <div class="jumpBox">
      <button>リトライ</button>
      <button>解説</button>
      <button>タイトルへ</button>
    </div>
  </div>
  <div v-if="startFlag">
    <div class="question mb-20">
      {{ current_question }}
    </div>
    <div class="choice mb-20">
      <button
        v-for="select in selects"
        v-bind:key="select.id"
        v-on:click="clickButton(select)"
      >
        {{ select.text }}
      </button>
    </div>
    <div class="gaugeWrapper mb-20">
      <div v-bind:style="styleObject" class="gauge"></div>
    </div>
    <div class="question-count">
      {{ current_question_counts }} / {{ question_counts }}
    </div>
  </div>
  <div class="routerBox">
    <ul>
      <a href="">ホームへ</a>
      <a href="">ゲーム2へ</a>
      <a href="">ゲーム3へ</a>
      <a href="">ゲーム4へ</a>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "HomeView",
  data() {
    return {
      startFlag: "",
      current_question: "",
      current_question_counts: 0,
      question_counts: 0,
      questions: ["コピー", "ペースト", "全選択"],
      selects: [
        {
          id: 0,
          text: "Ctrl+K",
          isCollect: false,
        },
        {
          id: 1,
          text: "Ctrl+C",
          isCollect: true,
        },
        {
          id: 2,
          text: "Alt+C",
          isCollect: false,
        },
      ],
    }
  },
  // computed: {
  //   styleObject: function () {
  //     width = 10 * this.current_question_counts + "%"
  //     if (this.current_question_counts == 3) {
  //       color = "#03a9f4"
  //     } else {
  //       color = "orange"
  //     }
  //     return {
  //       width: "width",
  //       color: "background-color",
  //     }
  //   },
  // },
  methods: {
    gameStart: function () {
      this.startFlag = true
    },
    clickButton: function (select) {
      this.questions.splice(0, 1)
      this.current_question = this.questions[0]
      if (select.isCollect == true) {
        this.current_question_counts = this.current_question_counts + 1
      }
    },
  },
  mounted: function () {
    this.current_question = this.questions[0]
    this.question_counts = this.questions.length
  },
}
</script>

<style scoped>
.title {
  position: relative;
  font-size: 50px;
}
.mb-20 {
  margin-bottom: 20px;
}

.marker {
  width: 100%;
  height: 35%;
  background-color: #4e598c;
  position: absolute;
  bottom: 5%;
  z-index: -1;
}
.startButton {
  background-color: #afcbff;
  color: #fff;
  padding: 4px 60px;
  border: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
}
.startButton:hover {
  opacity: 0.7;
}
.gauge {
  height: 12px;
}
.gaugeWrapper {
  border: 1px solid;
  height: 12px;
}
</style>
