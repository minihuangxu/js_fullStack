<template>
  <div id="app">
    <button @click="decrement">-</button>
    {{$store.state.count}} times, count is {{evenOrOdd}}
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">IncrementAsync</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: mapGetters(
    ['evenOrOdd']
  ),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  components: {

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
