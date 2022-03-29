<template>
  <div class="container">
    <div class="topBox">
      <div class="title">
        <h2 v-if="startFlag != true">ShortCutQuiz</h2>
        <div class="marker"></div>
      </div>
      <p v-if="startFlag != true">
        無人島に遭難してしまった！<br />島から脱出するには問題を解いて船を完成させよう！<br />
      </p>
      <img
        v-bind:src="require('@/assets/uninhabitedIsland.png')"
        alt="無人島で遭難中"
        class="firstImg mb-20"
        v-if="startFlag != true"
      />
    </div>
    <div v-if="startFlag != true" class="middleBox">
      <button class="startButton mb-20" @click="gameStart">GAME START</button>
      <div class="expla">
        <h4 class="explaTitle">-説明-</h4>
        <p class="explaText">
          Visual Studio
          Codeのショートカットをマスターして開発をスムーズに進めよう！<br />Visual
          Studio
          Code(VSCode)は多くのプログラミング言語に対応しているソースコードエディタだ。<br />このゲームでは覚えておくとプログラミング効率がUPするお役立ちショートカットをクイズで出題！<br />基本のショートカットからマニアックなものまで開発に欠かせないショートカットを厳選。<br />全10問で7問以上正解でクリアだ！
        </p>
      </div>
    </div>
    <!-- <div class="result" v-if="current_question_counts > 2">
      <h2>結果</h2>
      <p>〇問正解</p>
      <img src="" alt="脱出成功！" />
      <p>脱出成功！！</p> -->
    <div class="offset-3 col-6" v-if="completed">
      <div class="card">
        <div v-if="score > 60">
          <h3>{{ fullScore / 10 }} 問中 {{ this.reScore }} 問正解！</h3>
          <h4 class="win">脱出成功！！</h4>
          <img
            :src="require('@/assets/escape.png')"
            alt="脱出成功！"
            class="escapeImg"
            v-if="completed"
          />
        </div>
        <div v-else>
          <h4 class="lose">脱出失敗…</h4>

          <img
            :src="require('@/assets/oboreru.png')"
            alt="脱出失敗"
            class="notescapeImg"
            v-if="completed"
          />
        </div>
        <p class="badge">結果</p>
        <div v-for="(question, index) in this.questions" :key="question">
          <h4 class="card-title">{{ question.question }}</h4>
          <ul>
            <li v-for="answer in question.answers" :key="answer" class="list">
              {{ answer }}
            </li>
          </ul>
          <span v-if="question.answer == answers[index]">正解 ⭕️ </span>
          <span v-else
            >不正解 ❌ <br />正解は「{{
              question.answers[question.answer]
            }}」でした。</span
          >
          <hr />
        </div>
        <div>
          <button @click="retryButton" class="retrybtn">もう一度遊ぶ</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="startFlag">
    <div class="clear" v-if="!completed">
      <!-- <div class="imgBox">
        <div class="seikai" v-if="question.answer == answers[index]">
          <h4>正解！</h4>
          <img src="@/assets/maruta.png" alt="正解" class="seikaiImg" />
        </div>
        <div class="zannen" v-if="question.answer != answers[index]">
          <h4>残念！</h4>
          <img src="@/assets/basyabasya.jpg" alt="残念" class="zannenImg" />
        </div>
      </div> -->
      <div class="badge badge-dark">第 {{ questionIndex + 1 }} 問</div>

      <div class="question mb-20">
        {{ currentQuestion.question }}
      </div>
      <div class="choice mb-20">
        <button
          v-bind:key="answer"
          v-for="(answer, index) in currentQuestion.answers"
          @click="multipulHandler(index)"
          class="btnChoice"
        >
          {{ index + 1 }}. {{ answer }}
        </button>
      </div>
      <div class="keyboad">
        <img
          :src="require('@/assets/keyboad.png')"
          alt="キーボード"
          class="keyboadImg"
        />
      </div>
      <!-- <div class="gaugeWrapper mb-20">
        <div v-bind:style="styleObject" class="gauge"></div>
      </div> -->
      <div class="question-count">
        {{ this.reScore }} / {{ fullScore / 10 }}
      </div>
    </div>
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
      questionIndex: 0,
      answers: [],
      score: 0,
      reScore: 0,
      answerExistList: [],
      questions: [
        {
          question: "選択範囲のコピー",
          answers: ["「Ctrl」+「K」", "「Ctrl」+「C」", "「Alt」+「C」"],
          answer: 1,
        },
        {
          question: "選択範囲の貼り付け",
          answers: ["「Ctrl」+「P」", "「Alt」+「V」", "「Ctrl」+「V」"],
          answer: 2,
        },
        {
          question: "すべて選択",
          answers: ["「Ctrl」+「A」", "「Ctrl」+「Z」", "「Alt」+「A」"],
          answer: 0,
        },
        {
          question: "検索",
          answers: ["「Ctrl」+「F」", "「Ctrl」+「K」", "「Alt」+「S」"],
          answer: 0,
        },
        {
          question: "末尾までの文章を選択",
          answers: ["「Ctrl」+「E」", "「Ctrl」+「E」", "「Shift」+「End」"],
          answer: 2,
        },
        {
          question: "「Ctrl」+「X」",
          answers: ["ズームイン", "選択範囲の切り取り", "選択行を削除"],
          answer: 1,
        },
        {
          question: "「Ctrl」+「Shift」+「P」",
          answers: [
            "ページ単位で上下に移動",
            "カーソル行を下に移動",
            "コマンドパレットを開く",
          ],
          answer: 2,
        },
        {
          question: "「Ctrl」+「/」",
          answers: [
            "行をコメントアウト・コメント解除",
            "単語単位でカーソル移動",
            "選択部分の実装へ移動する",
          ],
          answer: 0,
        },
        {
          question: "「Shift」+「Alt」+「F」",
          answers: [
            "前を検索",
            "コードをきれいに整える",
            "新しいファイルを開く",
          ],
          answer: 1,
        },
        {
          question: "「Ctrl」+「|」",
          answers: [
            "選択部分の定義をプレビュー表示",
            "文章の末尾にカーソル移動",
            "画面の2分割",
          ],
          answer: 2,
        },
      ],
    }
  },
  computed: {
    // styleObject: function () {
    //   width = 10 * this.current_question_counts + "%"
    //   if (this.current_question_counts == 3) {
    //     color = "#03a9f4"
    //   } else {
    //     color = "orange"
    //   }
    //   return {
    //     width: "width",
    //     color: "background-color",
    //   }
    // },
    currentQuestion: function () {
      return this.questions[this.questionIndex]
    },
    completed: function () {
      return this.questions.length == this.answers.length
    },
    // correct: function (index) {
    //   return this.questions[this.questionIndex].answer == index
    // },
    fullScore: function () {
      return this.questions.length * 10
    },
  },
  methods: {
    gameStart: function () {
      this.startFlag = true
    },
    multipulHandler: function (index) {
      this.clickButton()
      this.addAnswer(index)
    },
    clickButton: function () {
      this.current_question = this.questions[0]
      if (this.questions.length == this.answers.length) {
        this.current_question_counts = this.current_question_counts + 1
      }
    },
    addAnswer: function (index) {
      this.answers.push(index)
      if (this.questions[this.questionIndex].answer == index) {
        this.score += 10
        this.reScore += 1
        console.log(this.score)
      }
      this.questionIndex++
    },
    retryButton: function () {
      this.startFlag = false
      this.current_question = ""
      this.current_question_counts = 0
      this.question_counts = 0
      this.questionIndex = 0
      this.answers = []
      this.score = 0
      ;(this.reScore = 0),
        (this.questions = [
          {
            question: "選択範囲のコピー",
            answers: ["「Ctrl」+「K」", "「Ctrl」+「C」", "「Alt」+「C」"],
            answer: 1,
          },
          {
            question: "選択範囲の貼り付け",
            answers: ["「Ctrl」+「P」", "「Alt」+「V」", "「Ctrl」+「V」"],
            answer: 2,
          },
          {
            question: "すべて選択",
            answers: ["「Ctrl」+「A」", "「Ctrl」+「Z」", "「Alt」+「A」"],
            answer: 0,
          },
          {
            question: "検索",
            answers: ["「Ctrl」+「F」", "「Ctrl」+「K」", "「Alt」+「S」"],
            answer: 0,
          },
          {
            question: "末尾までの文章を選択",
            answers: ["「Ctrl」+「E」", "「Ctrl」+「E」", "「Shift」+「End」"],
            answer: 2,
          },
          {
            question: "「Ctrl」+「X」",
            answers: ["ズームイン", "選択範囲の切り取り", "選択行を削除"],
            answer: 1,
          },
          {
            question: "「Ctrl」+「Shift」+「P」",
            answers: [
              "ページ単位で上下に移動",
              "カーソル行を下に移動",
              "コマンドパレットを開く",
            ],
            answer: 2,
          },
          {
            question: "「Ctrl」+「/」",
            answers: [
              "行をコメントアウト・コメント解除",
              "単語単位でカーソル移動",
              "選択部分の実装へ移動する",
            ],
            answer: 0,
          },
          {
            question: "「Shift」+「Alt」+「F」",
            answers: [
              "前を検索",
              "コードをきれいに整える",
              "新しいファイルを開く",
            ],
            answer: 1,
          },
          {
            question: "「Ctrl」+「|」",
            answers: [
              "選択部分の定義をプレビュー表示",
              "文章の末尾にカーソル移動",
              "画面の2分割",
            ],
            answer: 2,
          },
        ])
    },
    mounted: function () {
      this.current_question = this.questions[0]
      this.question_counts = this.questions.length
    },
  },
}
</script>

<style scoped>
.topBox {
  widows: 400px;
  margin: 0 auto;
  text-align: center;
}
.title {
  position: relative;
  font-size: 50px;
}

.expla {
  background-color: aliceblue;
}

.firstImg {
  width: 200px;
}
.escapeImg {
  width: 200px;
}
.notescapeImg {
  width: 200px;
}
.keyboadImg {
  width: 1000px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.seikaiImg {
  width: 200px;
}
.zannenImg {
  width: 200px;
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
  background-color: teal;
  color: #fff;
  padding: 4px 60px;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  height: 50px;
}
.startButton:hover {
  opacity: 0.7;
}
.question {
  font-size: 40px;
}
.badge {
  font-size: 20px;
  margin-bottom: 10px;
}
.btnChoice {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #799dec;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.32), 0px 1px 0px #6182ca,
    0px 2px 0px #4f6aa7, 0px 3px 0px #5470ad;
}
.btnChoice:active {
  top: 4px;
  text-shadow: none;
}
.retrybtn {
  background-color: teal;
  color: #fff;
  padding: 4px 60px;
  border: none;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.lose {
  font-size: 40px;
}
.win {
  font-size: 40px;
}
.question-count {
  font-size: 40px;
}
.list {
  display: initial;
}
</style>
