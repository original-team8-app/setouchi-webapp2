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
      title: "Lv.4 Unknown Icon",
      colorCodes: ["#808080", "#f0f8ff"],
      sampleCode: `    <div class="sample__body"></div>
    <div class="sample__head"></div>

<style>
      .sample__head {
        background-color: #808080;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -80%);
        border-radius: 50%;
        border: 15px solid #f0f8ff;
      }
      .sample__body {
        background-color: #808080;
        width: 180px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        border-radius: 50% 50% 0 0;
      }
      .sample__back{
        background-color:#f0f8ff;
      }
    </style>`,
      contentCode: `<div class="object"></div>

<style>
  .object{
    width: 150px;
    height: 150px;
    background-color: #808080;
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
