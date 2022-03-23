import { ref } from "vue"

export default {
  setup() {
    const contentCode = ref(
      `  width: 100%;
               height: 100%;
               /*ここにコードを追加*/`
    )
    return {
      contentCode,
    }
  },
}
