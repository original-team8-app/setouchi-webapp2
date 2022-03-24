/* eslint-disable no-unused-vars */
/*global Vue, */
/*eslint no-undef: "error"*/
const js = new Vue({
  el: "#about",
  data() {
    return {

    }
  },
  methods: {
    jumpToQ1: function () {
      this.$router.push("/css_questions/first-question")
    },
  },
}).mount("#about")
