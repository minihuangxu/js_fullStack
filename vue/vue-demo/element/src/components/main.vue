<template>
  <div class="main-content">
    <Header></Header>
  </div>
</template>

<script>
import Header from './common/header'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    Header
  }
}
</script>
