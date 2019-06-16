<template>
  <div>
    <counter />
    <counter-brother />
  </div>
</template>

<script>
// 两个组件都要用到count 状态，怎么办
import Counter from './components/Counter'
import CounterBrother from './components/CounterBrother'  //根组件
import store from './store'  //统一管理应用状态

export default {
  name: 'App',
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother,
  },
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
