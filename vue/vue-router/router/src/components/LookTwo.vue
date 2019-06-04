<template>
  <div class="hello">
    <h1>{{ msg }}
      <p>接受的参数: {{$route.params.id}}</p>
    </h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '瞅你咋地'
    }
  }
}
</script>