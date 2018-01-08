<template>
  <div class="news">
    <div class="main">
       <nav class="xxnav">
        <a href="###"><span class="iconfont icon-pinglun"></span>回复我的</a>         
        <a href="###"><span class="iconfont icon-at"></span>@我</a>         
        <a href="###"><span class="iconfont icon-praise"></span>收到的赞</a>         
        <a href="###"><span class="iconfont icon-tongzhi"></span>系统通知</a>         
       </nav>
    </div>
    <TabBar msg='消息'/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
export default {
  components: {
    TabBar
  }
}
</script>
<style lang="less" scoped>
.xxnav{
  width: 100%;
  height: 11%;
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
</style>

