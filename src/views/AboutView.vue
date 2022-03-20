<template>
  <v-app>
    <section>
      <img
        class="carIcon"
        v-bind:src="require('@/assets/img/Image_town-illust_10-1024x206.png')"
      />
    </section>
    <div id="about">
      <h1>CSSの使い方を覚えよう！</h1>
    </div>

    <div class="ruleIntroduction">
      <h2>ルール説明</h2>
      <p>CSSでレイアウトを変更し、建物を配置して街を完成させましょう！</p>
    </div>
    <div class="iconArea"></div>

    <div>
      <button @click="jumpToQ1" class="startbutton">最初から始める！</button>
    </div>

    <div id="card__list">
      <router-link
        to="/first-question.vue"
        v-for="menue in menueData"
        v-bind:key="menue.title"
        class="menue__card"
      >
        <div></div>
        <h2>{{ menue.title }}</h2>
        <p class="lessonIntro">{{ menue.text }}</p>
      </router-link>
    </div>
    <!-- <li >
        {{ menue.title }}, {{ menue.text }}
      </li> -->
  </v-app>
</template>
<script>
export default {
  methods: {
    jumpToQ1: function () {
      this.$router.push("/css_questions/first-question")
    },
  },
  data: function () {
    return {
      menueData: [
        {
          title: "Lesson1",
          path: "/css_questions/first-question.vue",
          text: "CSSを記述してみましょう！",
        },

        {
          title: "Lesson2",
          text: "flex-boxを使ってみよう！",
        },

        {
          title: "Lesson3",
          path: "/css_questions/first-question.vue",
          text: "flex-boxを応用してみよう！(2)",
        },

        {
          title: "Lesson4",
          path: "/css_questions/first-question.vue",
          text: "flex-boxを応用してみよう！(3)",
        },

        {
          title: "Lesson5",
          path: "/css_questions/first-question.vue",
          text: "CSSを記述してみましょう！",
        },
      ],
    }
  },
}
</script>

<style scoped>
.about {
  background-color: green;
}

#card__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 80px;
}
.menue__card {
  width: 80%;
  border: 1px solid black;
  margin: 0 40px 30px 0;
  padding: 5px;
  text-decoration: none;
  padding: 0.4em 0.5em; /*文字の上下 左右の余白*/
  color: #494949; /*文字色*/
  background: #f4f4f4; /*背景色*/
  border-left: solid 5px #7db4e6; /*左線*/
  border-bottom: solid 3px #d7d7d7; /*下線*/
}

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

.menueArea {
  height: 300px;
}
</style>
