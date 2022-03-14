<template>
  <game-template
    :passTitle="title"
    :passColorCodes="colorCodes"
    :passSampleCode="sampleCode"
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
      title: "Lv.1 葉っぱ",
      colorCodes: ["#008000", "#fafad7"],
      sampleCode: `<div class="sample__object"></div>

<style>
  .sample__object{
    width: 150px;
    height: 150px;
    background-color: #008000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100px 0;
  }
    .sample__back{
    background-color: #fafad7;
    }
</style>`,
    }
  },
}
</script>
