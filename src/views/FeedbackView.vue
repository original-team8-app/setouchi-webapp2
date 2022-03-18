<template>
  <div v-for="content in contents" :key="content.id">
    <div>
      <div class="feedback__canvas" v-html="content.contentCode"></div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

export default {
  data() {
    return {
      contents: [],
    }
  },
  created() {
    getDocs(collection(db, "contents")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.contents.push({
          id: doc.id,
          ...doc.data(),
        })
      })
    })
  },
}
</script>

<style scoped>
.feedback__canvas {
  /* position: absolute;
  top: 25vh;
  left: 80vh; */
  height: 300px;
  width: 300px;
  outline: auto;
  padding: 10px;
}
</style>
