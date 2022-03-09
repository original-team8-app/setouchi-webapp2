<template>
  <div class="title__container">
    <h2 class="title__logo">CSS battle</h2>
    <p class="title__text">-コードを書いて例題のイメージに近づけよう！</p>
  </div>
  <div class="content__wrapper">
    <div class="content__container">
      <img
        class="content__img"
        src="@/assets/MaruLv1.jpg"
        alt="図形の丸です。"
      />
      <p class="content__text">まる</p>
      <p class="content__record">前回の記録:〇分〇〇秒</p>
    </div>
    <div class="content__container">
      <img
        class="content__img"
        src="@/assets/SankakuLv1.jpg"
        alt="図形の丸です。"
      />
      <p class="content__text">さんかく</p>
      <p class="content__record">前回の記録:〇分〇〇秒</p>
    </div>
    <div class="content__container">
      <img
        class="content__img"
        src="@/assets/DaikeiLv1.jpg"
        alt="図形の丸です。"
      />
      <p class="content__text">だいけい</p>
      <p class="content__record">前回の記録:〇分〇〇秒</p>
    </div>
  </div>
</template>

<style scoped>
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
.title__container {
  background-color: aquamarine;
}
.title__logo {
  font-size: 3.5rem;
  text-align: left;
  margin-left: 30px;
}
.title__text {
  font-size: 1.5rem;
  text-align: left;
  margin-left: 100px;
}
.content__wrapper {
  display: flex;
  justify-content: center;
  border: 1px solid #333;
}
.content__container {
  border: 1px solid #333;
}
.content__img {
  border: 1px solid #333;
}
</style>
