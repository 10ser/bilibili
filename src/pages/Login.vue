<template>
  <div class="login">
    <headbar title="登录" wjbol = true />
    <div class="main">
      <div class="banner"><img :src="'/static/images/'+name+'.png'" alt=""></div>
      <div class="forms">
        <form action="">
          <div class="user" :class="{'color':activeO}"><span class="iconfont icon-yonghu"></span><input type="text" placeholder="你的手机号/邮箱" v-model="user"  v-focus @focus="focusone"></div>
          <div class="psd" :class="{'color':!activeO}"><span class="iconfont icon-mima"></span><input type="password" placeholder="请输入密码" v-model="psd" @focus="focustwo"></div>
          <div class="btns">
            <button @click="toreg">注册账号</button>
            <button @click="login">登录</button>
          </div>
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
      name: 'denglu',
      user: '',
      psd: '',
      activeO: true
    }
  },
  methods: {
    focusone () {
      this.name = 'denglu'
      this.activeO = true
      console.log('focus1')
    },
    focustwo () {
      this.name = 'denglu2'
      this.activeO = false
      console.log('focus2')
    },
    toreg () {
      this.$router.push('/register')
    },
    login () {
      let user = this.user
      let psd = this.psd
      if (user === '' || psd === '') {
        this.$msg('提示', '账号或密码不得为空')
      } else {
        if (/^1[3578]\d{9}$/.test(user)) {
          if (/^[a-zA-Z]\w{5}$/.test(psd)) {
            this.$store.dispatch('login', user, psd)
             .then(res => {
               if (res === '该用户不存在') {
                 this.$msg.confirm('提示', '该用户不存在，是否跳转注册页面')
                  .then(res => {
                    this.$router.push('/register')
                  })
               } else if (res === '该用户存在') {
                 this.$msg('提示', '登陆成功')
                  .then(res => {
                    this.$router.push('/')
                  })
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
.banner{
  width: 100%;
  img{width: 100%;height: 100%;}
}
.forms{
  width: 100%;
  padding: 2% 6%;
  input{
      width: 100%;
      border: none;
      background-color: #efefef;
      padding: 3% 3% 3% 12%;
      border-bottom: solid 1px;
      outline: none;
  }
  span{
    position: absolute;
    font-size: 2rem;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
  }
  .user{
    width: 100%;
    margin-bottom: 3%;
    position: relative;
  }
  .psd{
    width: 100%;
    position: relative;
  }
  .btns{
    width: 100%;
    display: flex;
    justify-content: space-between;
    button{
      width: 48%;
      text-align: center;
      height: 3rem;
      margin-top: 3%;
      border-radius: 5%;
      outline: none;  
    }
    button:first-child{
      border:solid 1px #fb7299;
      background-color: #efefef;
      color: #fb7299;
    }
    button:last-child{
      border: none;
      background-color:#fb7299;
      color: #fff;
    }
  }
}
.color{
  input{border-bottom:solid 1px #fb7299;}
  span{color: #fb7299;}
}
</style>


