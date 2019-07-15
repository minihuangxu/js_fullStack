<template>
  <div class="hello">
    <i-menu></i-menu>
    <i-button size="small" @click.native="handleClick"> 
      按钮
    </i-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'

export default {
  name: 'HelloWorld',
  provide () {
    return {
      name: this.obj
    }
  },
  components: {
    'i-button': button,
    'i-menu': menu
  },
  methods: {
    handleClick (val) {
      //console.log(val)
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: 'mini'
      }
    }
  },
}
</script>


<style scoped>

</style>
