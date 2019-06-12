<template>
  <section class="hello">
    <div class="scroll-box">
      <text-scroll :dataLists="data" scrolltype="scroll-up"></text-scroll>
    </div>
    <div class="scroll-box">
      <text-scroll :dataLists="data" scrolltype="scroll-left"></text-scroll>
    </div>
  </section>
</template>

<script>
import textscroll from './textscroll'
export default {
  data() {
    return {
      data: [
        {text: 'first'},
        {text: 'second'},
        {text: 'third'}
      ]
    }
  },
  components: {
    "text-scroll": textscroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-box{
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  border-radius: 5px;
}
.hello{
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid #e7e7e8;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}
</style>
