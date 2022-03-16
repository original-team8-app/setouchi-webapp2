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
  <div class="iconArea">
    <div>
      <img src="../assets/img/carIcon9.png" alt="Logo" class="carIcon" />
    </div>
    <div>
      <img src="../assets/img/arrow.png" alt="Logo" class="arrowIcon" />
    </div>
    <div>
      <img src="../assets/img/goalflag.png" alt="Logo" class="goalIcon" />
    </div>
  </div>

  <div>
    <button @click="jumpToQ1" class="startbutton">ゲームを始める</button>
  </div>
</template>
<script>
export default {
  methods: {
    jumpToQ1: function () {
      this.$router.push("/css_questions/first-question")
    },
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
</style>
