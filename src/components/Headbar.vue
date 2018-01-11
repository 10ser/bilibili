<template>
  <header>
    <div class="back" @click="back"><span class="iconfont icon-fanhui"></span></div>
    <div class="title">{{title}}</div>
    <div class="psd" v-if="wjbol">忘记密码？</div>
    <div class="gn-lis">
      <a href="###"><span class="iconfont icon-paixing"></span></a>
      <a href="###"><span class="iconfont icon-xiazai"></span></a>
    </div>
  </header>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      wjbol: false
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
header{
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fb7299;
  color: #fff;
  line-height: 5rem;
  overflow: auto;
  .back{
    height: 100%;
    float: left;
    width: 15%;
    text-align: center;
    span{font-size: 2rem;font-weight: bold;}
  }
  .title{
    width: 20%;
    float: left;
    font-size: 1.6rem;
    line-height: 5rem;
    height: 100%;
    font-weight: bold;
  }
  .psd{
    float: right;
    width: 20%;
    text-align: center;
  }
  .gn-lis{
    float: right;
    width: 30%;
    height: 100%;
    display: none;
    a{
      float: right;
      height: 100%;
      display: inline-block;
      color: #fff;
      padding: 0% 8%;
      span{font-size: 1.8rem;}
    }
  }
}
</style>


