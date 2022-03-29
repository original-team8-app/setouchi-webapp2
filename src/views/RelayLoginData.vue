<template>
  <div></div>
</template>

<script>
export default {
  props: ["deliveryLoginData"],
  mounted() {
    console.log(this.deliveryLoginData)
    this.$router.push({
      name: "top",
      params: { relayLoginData: this.deliveryLoginData },
    })
  },
}
</script>
