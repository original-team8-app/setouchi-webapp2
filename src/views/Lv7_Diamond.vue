<template>
  <game-template
    :passTitle="title"
    :passColorCodes="colorCodes"
    :passSampleCode="sampleCode"
    :passContentCode="contentCode"
    @update:contentCode="updateContent"
  />
</template>

<script>
import GameTemplate from "@/components/GameTemplate.vue"

export default {
  components: {
    GameTemplate,
  },
  data() {
    return {
      title: "Lv.7 Diamond",
      colorCodes: ["#00bfff", "#fffff0"],
      sampleCode: `<div class="sample__diamond-top"></div>
      <div class="sample__diamond-bottom"></div>

<style>
  .sample__diamond-top {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    border-style: solid;
    border-color: transparent transparent #00bfff transparent;
    border-width: 0 45px 60px 45px;
  }
  .sample__diamond-bottom {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    border-style: solid;
    border-color: #00bfff transparent transparent transparent;
    border-width: 100px 95px 0 95px;
  }
  .sample__back {
    background-color: #fffff0;
    }`,
      contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #00bfff;
    /*ここにコードを追加*/
  }
  .back{

  }
</style>
`,
    }
  },
  methods: {
    updateContent(value) {
      this.contentCode = value
    },
  },
}
</script>
