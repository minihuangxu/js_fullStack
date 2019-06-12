<template>
  <div class="container">
    {{msg}}
    <!-- <child :send-msg="message" :send-age="age" :send-date="date"></child> -->
    <child @xmm='getXmm'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: "demo2",
  data () {
    return {
      msg: '',
      message: 'fine',
      date: '2019-6-11',
      age: '18'
    }
  },
  components: {
    child
  },
  methods: {
    getXmm(data){
      this.msg = data
    }
  }
}
</script>

<style scoped>

</style>
