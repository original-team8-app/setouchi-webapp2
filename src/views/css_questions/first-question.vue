<template>
  <head>
    <meta charset="UTF-8" />
  </head>
  <div class="first-question">
    <h1>第1問</h1>
    <div class="questionArea">
      <div
        :style="{
          backgroundImage: `url(${require('@/assets/img/rpg_field_map_grass.png')})`,
        }"
        class="cssArea"
      >
        <div class="rightSide">
          <img
            class="carIcon"
            v-bind:src="require('@/assets/img/carIcon9.png')"
          />
        </div>
        <img
          class="goalIcon"
          v-bind:src="require('@/assets/img/goalflag.png')"
        />
        <img class="roadIcon" v-bind:src="require('@/assets/img/road.png')" />
      </div>
      <div id="CssEditor">
        <div>
          <h2>CSSで記述しよう！</h2>
          <p>CSSの表現を使い道路を配置して車を目的地へ導きましょう！</p>
        </div>
        <textarea class="writtenCode"></textarea>
        <button>ヒント💡</button>
        <button>完成！</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionArea {
  display: flex;
  justify-content: space-around;
}

.writtenCode {
  width: 400px;
  height: 300px;
}

.cssArea {
  width: 700px;
  height: 600px;
  display: flex;
  justify-content: space-between;
}

.carIcon {
  display: flex;
  align-items: flex-end;
  width: 85%;
  height: 30%;
}

.goalIcon {
  width: 15%;
  height: 20%;
}

.rightSide {
  display: flex;
  align-items: end;
}

.roadIcon {
  height: 100%;
  width: 10%;
}
</style>

<!-- @/assets/img/rpg_field_map_grass.png -->
