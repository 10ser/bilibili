<template>
  <div class="usermsg">
    <headbar title="账号资料" />
    <div class="main">
      <div class="msg-show">
        <div class="msg-head">头像<img src="/static/images/timg.1.jpg" alt="" srcset=""></div>
        <div class="msg-name">昵称<span>罗狮鼠</span></div>
        <div class="msg-id">UID<span>xxxxxxx1023</span></div>
        <div class="msg-2wm">二维码名片<span class="iconfont icon-erweima"></span></div>
        <div class="msg-sex">性别<span>保密</span></div>
        <div class="msg-birthday">生日<span>2016-10-23</span></div>
        <div class="msg-autograth">个性签名<span></span></div>
      </div>
      <div class="msg-ts">"空间隐私设置"及"账号安全中心"移至设置·账号与隐私中啦</div>
      <div class="down-btn" @click="exit">退出登录</div>
    </div>
  </div>
</template>
<script>
import Headbar from '@/components/Headbar'
export default {
  components: {
    Headbar
  },
  methods: {
    exit () {
      this.$store.state.phoneInfo = {}
      this.$store.state.loginbol = false
      this.$msg('提示', '已退出登录')
        .then(res => {
          this.$store.dispatch('exit')
          this.$router.push('/')
        })
    }
  }
}
</script>
<style lang="less" scoped>
.msg-show{
  width: 100%;
  background-color: #fff;
  margin-top: 3%;
  .msg-head{
    position: relative;
    img{
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      position: absolute;
      right: 3%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .msg-2wm{
    span{font-size: 2rem;}
  }
  div{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    font-weight: bold;
    padding: 0 3%;    
    border-bottom: solid 1px #ddd;
    span{
      color: #999;
      float: right;
    }
  }
  div:last-child{
    border: none;
  }
}
.msg-ts{
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  color:#999;
}
.down-btn{
  width: 100%;
  height: 4rem;;
  line-height: 4rem;
  text-align: center;
  background-color: #fff;
  color: #999;
}
</style>

