<template>
  <div class="about">
    <h1>CSSの使い方を覚えよう！</h1>
  </div>

  <div class="ruleIntroduction">
    <h2>ルール説明</h2>
    <p>
      CSSでレイアウトを変更し、道路を作って左画面にある車を目的地に到着させましょう！
    </p>
  </div>
  <div class="iconArea"></div>

  <div>
    <button @click="jumpToQ1" class="startbutton">最初から始める</button>
  </div>

  <div class="cardList">
    <v-col v-for="menue in menueList" v-bind:key="menue.id">
      <v-card>
        <!-- {{ menue.title }}
        {{ menue.text }}
        <router-link
          v-bind:key="menue.index"
          v-bind:to="menue.path"
        ></router-link> -->
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  methods: {
    jumpToQ1: function () {
      this.$router.push("/css_questions/first-question")
    },
  },
  menueList: {
    title: "Lesson1",
    path: "/css_questions/first_question.vue",
    text: "CSSを使い道路を配置しよう！",
  },
}
</script>

<style scoped>
.about {
  background-color: green;
}
/* 
.carIcon {
  width: 50%;
  height: 90%;
}

.goalIcon {
  width: 40%;
  height: 60%;
} */

.iconArea {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.arrowIcon {
  width: 50%;
  height: 50%;
}

.startbutton {
  background-color: white;
  padding: 12px 24px;
  color: black;
  border-radius: 6px;
  border-bottom: 4px solid hsl(241, 3%, 73%);
  border-top: 0px;
  transition: all 0.1s ease-in-out;
}

.cardList {
  width: 100%;
  height: 70%;
}
</style>
