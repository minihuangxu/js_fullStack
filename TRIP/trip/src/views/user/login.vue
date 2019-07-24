<template>
  <div class="login">
    <div class="login-bg">
      <h1 class="login-title">
        <img src="../../assets/img/logo.png" alt />
      </h1>
      <md-field class="login-input">
        <md-input-item ref="name" title="手机号" placeholder="请输入手机号" v-model="user.name" type="phone"></md-input-item>
        <md-input-item ref="id" title="密码" placeholder="请输入密码" v-model="user.password" type="password"></md-input-item>
      </md-field>
      <div class="login-btn">
        <span @click="loginOnClick">
          <!-- <svg-icon class="svg-btn" icon-class="login-btn"></svg-icon> -->
          <md-button type="primary" round>登录</md-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '15330734121',
        password: '12345'
      }
    }
  },
  methods: {
    loginOnClick () {}
  },
};
</script>

<style lang="stylus" scoped>
.login
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  height 100vh
  overflow hidden
  background url('../../assets/img/login-bg.jpg')
  background-size 100% 100%
  padding 20px
  &-input 
    margin-top 60px
  &-title
    margin-top 70px
    text-align center
    img 
      width 402px
      height 101px
      margin 0 auto
  &-btn
    width 100%
    margin 0 auto
    font-size 130px
    color #ffffff
    text-align center
.login-bg
  position absolute
  top 0
  left 0
  z-index 200
  width 100vw
  height 100vh
</style>
<style lang="stylus">
.login
  .md-field
    background transparent
  .md-field-item-content:before
    background #000
  .md-field-item-title
    font-size 20px
  .md-input-item-input
    font-size 20px
  .md-button.block
    width 50%
    margin 0 auto 
    height 50px
    font-size 22px
</style>
