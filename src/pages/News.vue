<template>
  <div class="news">
    <div class="main">
       <nav class="xxnav">
        <a href="###"><span class="iconfont icon-pinglun"></span>回复我的</a>         
        <a href="###"><span class="iconfont icon-at"></span>@我</a>         
        <a href="###"><span class="iconfont icon-praise"></span>收到的赞</a>         
        <a href="###"><span class="iconfont icon-tongzhi"></span>系统通知</a>         
       </nav>
       <div class="kong">
         <img src="/static/images/kong.jpeg" alt="">
       </div>
       <div class="wdl" v-if="!wdlbol">
         <img src="/static/images/weidenglu2.png" alt="">
       </div>
    </div>
    <TabBar msg='消息'/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      wdlbol: true
    }
  }
}
</script>
<style lang="less" scoped>
.main{background-color: #f4f4f4;}
.xxnav{
  width: 100%;
  background-color: #fff;
  display: flex;
  a{
    flex: 1;
    height: 100%;
    padding: 3% 4% 4% 4%;
    text-align: center;
    span{
      display: block;
      font-size: 2rem;
      margin-bottom: 3%;
    }
  }
}
.kong{
  // width: 100%;
  width: 14rem;
  height: 16rem;
  margin: 10% auto;
  img{width: 100%;height: 100%;}
}
.wdl{
  width: 100%;
  height: 100%;;
  background-color: #eaeaea;
  img{margin: 15% 0;position: absolute;left: 50%;transform: translateX(-50%);}
}
</style>

