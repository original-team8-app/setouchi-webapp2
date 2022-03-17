<template>
  <h1 class="title">{{ passTitle }}</h1>
  <div>
    <div class="back" v-html="passContentCode"></div>
    <div
      class="sample__back sample__opacity"
      v-html="passSampleCode"
      v-bind:style="{ opacity: opacityValue }"
    ></div>
  </div>
  <div>
    <div class="sample__back" v-html="passSampleCode"></div>
  </div>
  <div class="opacity-bar">
    透過度:
    <input type="range" min="0" max="1" step="0.01" v-model="opacityValue" />
  </div>
  <div class="color-palette">
    <div
      class="color-list"
      v-for="passColorCode in passColorCodes"
      v-bind:key="passColorCode.index"
    >
      <div
        class="color-checker"
        v-bind:style="{
          backgroundColor: passColorCode,
        }"
      ></div>
      <div class="color-code">{{ passColorCode }}</div>
    </div>
  </div>
  <router-link to="/feedback">
    <button class="finish-button">完成！</button>
  </router-link>
</template>

<script>
export default {
  props: {
    passTitle: String,
    passColorCodes: Array,
    passSampleCode: String,
    passContentCode: String,
  },
  data() {
    return {
      opacityValue: 0,
    }
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
  padding-left: 2rem;
}
.back {
  position: absolute;
  top: 20vh;
  left: 85vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__back {
  position: absolute;
  top: 20vh;
  left: 135vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
.sample__opacity {
  top: 20vh;
  left: 85vh;
}
.opacity-bar {
  position: absolute;
  top: 65vh;
  left: 95vh;
  transform: scale(1.5, 1.5);
  font-size: 14px;
}
.color-palette {
  background-color: rgb(230, 227, 227);
  width: 300px;
  padding: 10px 10px;
  position: absolute;
  top: 65vh;
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
  top: 85vh;
  left: 150vh;
  height: 60px;
  width: 130px;
  font-size: 1.5rem;
}
</style>
