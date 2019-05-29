<template>
    <div class="login">
        <div class="container">
            <p class="title">后台管理系统</p>
            <div class="msg">
              <el-input v-model="user" placeholder="请输入账号"></el-input>
            </div>
            <div class="msg">
              <el-input v-model="password" placeholder="请输入密码"></el-input>
            </div>
            <div class="btn mt20">
              <el-button type="primary" @click="login">主要按钮</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.user)
      if (this.user && this.password) {
        console.log(this.user)
        localStorage.setItem('userName', this.user)
      }
    }
  }
}
</script>

<style scoped>
.login{
  width: 100%;
}
.container{
  width: 300px;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0 0 20px #cac6c6;
  padding: 50px;
  margin-top: 200px;
}
.title{
  font-size: 26px;
  font-weight: bold;
  color: #505458;
}
.btn button{
  width: 100%;
}
.mt20{
  margin-top: 20px;
}
</style>
