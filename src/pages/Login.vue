<template>
  <div class="login">
    <headbar title="登录" wjbol = true />
    <div class="main">
      <div class="banner"><img :src="'/static/'+name+'.png'" alt=""></div>
      <div class="forms">
        <form action="">
          <div class="user"><span class="iconfont icon-yonghu"></span><input type="text" placeholder="你的手机号/邮箱"></div>
          <div class="psd"><span class="iconfont icon-mima"></span><input type="password" placeholder="请输入密码"></div>
          <div class="btns">
            <button @click="toreg">注册账号</button>
            <button>登录</button>
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
      name: 'denglu'
    }
  },
  methods: {
    toreg () {
      this.$router.push('/register')
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
</style>


