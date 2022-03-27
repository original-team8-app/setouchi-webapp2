<template>
  <v-app>
    <section>
      <img
        class="carIcon"
        v-bind:src="require('@/assets/Image_town-illust_10-1024x206.png')"
      />
    </section>
    <div id="about">
      <h1>CSSの使い方を覚えよう！</h1>
    </div>

    <div class="ruleIntroduction">
      <h2>遊び方</h2>
      <p>
        あなたはめでたくこの街の市長に就任しました！<br />CSSを記述し街の施設をレイアウトすることで街を発展できるように頑張りましょう！<br />
        ゲーム画面を開くと完成予想図が出てきます。それを参考にレイアウトしていきましょう
      </p>
    </div>
    <div class="iconArea"></div>

    <div id="card__list">
      <router-link
        v-for="menue in menueData"
        v-bind:to="menue.path"
        v-bind:key="menue.index"
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
  data: function () {
    return {
      menueData: [
        {
          title: "Lesson1",
          path: "/first_question",
          text: "CSSを記述してみましょう！",
        },

        {
          title: "Lesson2",
          path: "/second_question",
          text: "flex-boxを使ってみよう！",
        },

        {
          title: "Lesson3",
          path: "/third_question",
          text: "flex-boxを応用してみよう！(2)",
        },

        {
          title: "Lesson4",
          path: "/forth_question",
          text: "flex-boxを応用してみよう！(3)",
        },

        {
          title: "Lesson5",
          path: "/fifith_question",
          text: "flex-boxを応用してみよう！(3)",
        },

        {
          title: "Lesson6",
          path: "/6th_question",
          text: "gridを使ってみよう！",
        },

        {
          title: "Lesson7",
          path: "/7th_question",
          text: "gridを使ってみよう！(2)",
        },

        {
          title: "Lesson8",
          path: "/8th_question",
          text: "gridを使ってみよう！(3)",
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
  padding: 0.4em 0.5em;
  color: #494949;
  background: #f4f4f4;
  border-left: solid 5px #7db4e6;
  border-bottom: solid 3px #d7d7d7;
  transition-duration: 0.5s;
}

.menue__card:hover {
  transform: scale(0.95, 0.95); /*画像の拡大*/
  cursor: pointer; /*カーソルをポインターにする*/
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
