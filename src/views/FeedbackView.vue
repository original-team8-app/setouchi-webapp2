<template>
  <div>
    <div class="back" v-html="deliveryData"></div>
  </div>
</template>

<script>
export default {
  props: ["deliveryData"],
  data() {
    return {}
  },
}
</script>

<style scoped>
.back {
  position: absolute;
  top: 25vh;
  left: 80vh;
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
</style>
