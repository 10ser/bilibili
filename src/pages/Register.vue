<template>
  <div class="register">
    <headbar title="注册账号"/>
    <div class="main">
      <div class="ts">请确认你的国家或地区并输入手机号</div>
      <div class="forms">
        <form action="">
          <select name="" id="">
            <option value="0">中国大陆</option>
          </select>
          <div class="number">+86<input type="text" placeholder="请输入常用手机号" v-model="user" ></div>
          <div class="psd"><span class="iconfont icon-mima"></span><input type="password" placeholder="请输入密码" v-model="psd" ></div>
          <button @click="register">注册</button>
          <div class="tx">点击“注册”按钮，即表示同意 <span>注册协议</span></div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar'
export default {
  components: {
    Headbar
  },
  data () {
    return {
      user: '',
      psd: ''
    }
  },
  methods: {
    register () {
      let user = this.user
      let psd = this.psd
      if (user === '' || psd === '') {
        this.$msg('提示', '账号或密码不得为空')
      } else {
        if (/^1[3578]\d{9}$/.test(user)) {
          if (/^[a-zA-Z]\w{5}$/.test(psd)) {
            this.$store.dispatch('register', user, psd)
             .then(res => {
               if (res === '注册成功') {
                 this.$msg('提示', res)
                  .then(res => {
                    this.$router.push('/')
                  })
               } else {
                 this.$msg('提示', res)
               }
             })
          } else {
            this.$msg('提示', '密码格式错误，字母开头与数字组合的六位数')
            this.user = ''
            this.psd = ''
          }
        } else {
          this.$msg('提示', '账号格式错误，请输入正确手机号')
          this.user = ''
          this.psd = ''
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.ts{
  width: 100%;
  padding: 3% 2.5%;
  font-weight: bold;
}
.forms{
  width: 100%;
  padding: 0% 2.5% 2% 2.5%;
  select{
    width: 100%;
    border: none;
    border-bottom: solid 1px #999;
    background-color: #efefef;
    color: #fb7299;
    font-weight: bold;
    padding: 3% 0%;
    outline: none;
    // option{
    //   width: 80%;
    //   border: none;
    // }
  }
  .number{
    margin: 2% 0;
    font-weight: bold;
    padding: 2%;
    border-bottom: solid 1px #fb7299;
    input{
      background-color: #efefef;
      border: none;
      padding: 2% 5%;
      font-size: 1rem;
      font-weight: bold;
      outline: none;
    }
  }
  .psd{
    margin: 2% 0;
    font-weight: bold;
    padding: 2%;
    border-bottom: solid 1px #fb7299;
    position: relative;
    input{
      background-color: #efefef;
      border: none;
      padding: 2% 12%;
      font-size: 1rem;
      font-weight: bold;
      outline: none;
    }
    span{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
    }
  }
  button{
    width: 100%;
    margin-top: 2%;
    border-radius: 5px;
    background-color: #fb7299;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    border: none;
    font-weight: bold;
  }
  .tx{
    width: 100%;
    padding: 2%;
    color: #999;
    span{color: #fb7299;font-weight: bold;}
  }
}
</style>


