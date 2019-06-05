<template>
  <div class="login">
    <i-form ref="formInline" :model="formLogin" :rules="formLoginRules" class="card-box">
      <FormItem class="formLogin-title">
        <h3>系统登录</h3>
      </FormItem>
      <FormItem prop="username">
        <i-input type="text" v-model="formLogin.username" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="password">
        <i-input type="password" v-model="formLogin.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </i-input>
      </FormItem>
      <FormItem>
        <Checkbox v-model="single">记住密码</Checkbox>
      </FormItem>
      <Form-item>
        <Row>
          <Col :xs="{ span: 4, offset: 6}">
            <Button type="primary" @click="handleSubmit('formLogin')">登录</Button>
          </Col>
          <Col :xs="{ span: 4, offset: 6}">
            <Button type="primary" @click="handleSubmit('formLogin')">注册</Button>
          </Col>
        </Row>
      </Form-item>
    </i-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      formLogin: {
        username: "",
        password: "",
        remember: false
      },
      formLoginRules: {
    username: [
      {
        required: true,
        message: "Please fill in the user name",
        trigger: "blur"
      }
    ],
    password: [
      {
        required: true,
        message: "Please fill in the password.",
        trigger: "blur"
      },
      {
        type: "string",
        min: 6,
        message: "The password length cannot be less than 6 bits",
        trigger: "blur"
      }
    ]
  }
    };
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        sessionStorage.setItem('user', JSON.stringify(this.formLogin.username))
      })
      if (valid) {
        this.$Message.success('success!!!')
        this.$router.push({ path: '/table'})
      } else {
        this.$Message.success('failed!!!')
      }

      if (this.formLogin.remember) {
        sessionStorage.setItem('username', JSON.stringify(this.formLogin.username))
        sessionStorage.setItem('password', JSON.stringify(this.formLogin.password))
      } else {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('password')
      }
    }
  }
  
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/1.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.card-box {
  padding: 20px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.formLogin-title {
  text-align: center;
  font-size: 28px;
}
.formLogin-title h3 {
  font-size: 18px;
}
.login-no-bottom {
  margin-bottom: 10px;
}
</style>
