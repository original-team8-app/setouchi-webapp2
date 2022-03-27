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
      title: "Lv.3 Cancel Button",
      colorCodes: ["#ff0000", "#ffffff", "#5a96c7"],
      sampleCode: `<div class="sample__object"></div>
      <div class="sample__bar1">
      <div class="sample__bar2">

<style>
  .sample__object{
    background-color: #ff0000;
    width: 180px;
    height: 130px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .sample__bar1{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 10px;
  }
  .sample__bar2{
    background-color: #ffffff;
    width: 20px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    border-radius: 10px;
  }
  .sample__back{
    background-color: #5a96c7;
  }
</style>`,
      contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #ff0000;
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
