<template>
  <div class="container">
    <child :send-msg="message" :send-age="age" :send-date="date"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: "demo1",
  data () {
    return {
      message: 'fine',
      date: '2019-6-11',
      age: '18'
    }
  },
  components: {
    child
  }
}
</script>

<style scoped>

</style>
