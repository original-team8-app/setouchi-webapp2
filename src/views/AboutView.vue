<template>
  <v-app>
    <div id="about">
      <h1>CSSの使い方を覚えよう！</h1>
    </div>

    <div class="ruleIntroduction">
      <h2>ルール説明</h2>
      <p>CSSでレイアウトを変更し、建物を配置して街を完成させましょう！</p>
    </div>
    <div class="iconArea"></div>

    <div>
      <button @click="jumpToQ1" class="startbutton">ゲームを始める</button>
    </div>

    <ul id="menueArea">
      <!-- <div class="content__wrapper"> -->
      <!-- <router-link
          class="content__container"
          v-for="menue in menueData"
          v-bind:key="menue.index"
          v-bind:to="menue.path"
        >
          <img
            class="content__img"
            v-bind:src="content.imagePath"
            v-bind:alt="content.imageAlt"
          />
          <p class="content__text">{{ content.text }}</p>
          <p class="content__record">{{ content.record }}</p>
        </router-link> -->
      <li v-for="menue in menueData" v-bind:key="menue.title">
        {{ menue.title }}, {{ menue.text }}
      </li>
    </ul>
  </v-app>
</template>
<script>
export default {
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
      ],
    }
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
#menueArea {
  height: 300px;
}
.card {
  margin-bottom: 5px;
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
