<template>
  <div class="container">
    <button @click="sendMsg">ok</button>
  </div>
</template>

<script>

export default {
  name: "demoChild2",
  data () {
    return {
      message: 'I am fine'
    }
  },
  methods: {
    sendMsg(){
      this.$emit('xmm',this.message)
    }
  }
}
</script>

<style scoped>

</style>
