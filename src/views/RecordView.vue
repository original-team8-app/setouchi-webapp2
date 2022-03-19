<template>
  <div class="title">{{ title }}</div>
  <div>
    <div class="back" v-html="recordData.contentCode"></div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

export default {
  props: ["deliveryDocName"],
  data() {
    return {
      title: "前回の記録",
      recordData: {},
    }
  },
  created() {
    getDoc(doc(db, "contents", this.deliveryDocName)).then((snapshot) => {
      this.recordData = snapshot.data()
    })
  },
}
</script>

<style scoped>
.title {
  font-size: 2rem;
}
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
