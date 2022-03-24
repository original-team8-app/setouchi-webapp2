import { ref } from "vue"

export default {
  methods: {
    editorInit: function () {},
  },
  setup() {
    const contentCode = ref(`
    position: absolute;
    right: 50px;
    top: 100px;
    
`)
    return contentCode
  },
  // data() {
  //   return {
  //     // eslint-disable-next-line
  //     contentCode,
  //   }
  // },
}
