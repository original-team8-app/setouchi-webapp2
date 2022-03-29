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
  props: [
    "deliveryTitle",
    "deliveryColorCodes",
    "deliverySampleCode",
    "deliveryContentCode",
  ],
  data() {
    return {
      title: this.deliveryTitle,
      colorCodes: this.deliveryColorCodes,
      sampleCode: this.deliverySampleCode,
      contentCode: this.deliveryContentCode,
    }
  },
  methods: {
    updateContent(value) {
      this.contentCode = value
    },
  },
}
</script>
