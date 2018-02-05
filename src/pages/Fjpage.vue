<template>
  <div class="fjpage">
    <div class="main">
      <div class="fj-page">
        <div class="video">
          <div class="video-title">
            <div class="back" @click="back"><span class="iconfont icon-fanhui"></span></div>
            <div class="video-number">av123456</div>
            <div class="video-more"><span class="iconfont icon-gengduo1"></span></div>
          </div>
          <div class="play"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span></div>
        </div>
        <div class="nav">
          <a href="###"><span class="iconfont icon-icon1 green"></span>分享</a>
          <a href="###"><span class="iconfont icon-xing1"></span>追番</a>
          <!-- <a href="###"><span class="iconfont icon-xing1 pink"></span>已追番</a> -->
          <a href="###"><span class="iconfont icon-xiazai skyblue"></span>缓存</a>
        </div>
        <div class="jidu">
          <div>第一季</div>
          <div>第二季</div>
        </div>
        <div class="fj-and">
          <div class="xj-title">选集<span>全xx话<i class="iconfont icon-"></i></span></div>
          <div class="xj-con"></div>
        </div>
        <div class="fj-msg">
          <div class="fj-img"><img src="" alt=""></div>
          <div class="fj-con">
            <div class="fj-name">镇魂街 第一季</div>
            <div class="fj-play">
              <div><span class="iconfont icon-"></span>6666万</div>
              <div><span class="iconfont icon-"></span>333万</div>
            </div>
            <div class="fj-cont">番剧的简单介绍</div>
          </div>
          <div class="pf-lis">
            <div class="fens">9.1分</div>
            <div class="peoples">1210人</div>
          </div>
        </div>
        <div class="tj-list">
          <div class="tj-title">更多推荐<span>换一换<i class="iconfont icon-"></i></span></div>
          <div class="tj-lis">
            <ul>
              <li>
                <div class="lis-img"><img src="" alt=""><span>100万人追番</span></div>
                <div class="img-name">番剧名称</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #efefef;
  overflow-y:scroll;
}
.fj-page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .video{
    flex: .38;
    background-color: #000;
    color: #fff;
    position: relative;
    .video-title{
      width: 100%;
      height: 3rem;
      position: relative;
      div{display: inline-block;font-size: 1.3rem;}
      .back{
        width: 14%;
        height: 100%;
        position: relative;
        text-align: center;
        span{
          font-size: 2rem;
          line-height: 3rem;
          font-weight: bold;
        }
      }
      .video-more{
        width: 14%;
        position: absolute;
        text-align: center;
        right: 0%;
        span{
          font-size: 2rem;
          line-height: 3rem;
          font-weight: bold;
        }
      }
    }
    .play{
      color: #fff;
      position: absolute;
      right: 5%;
      bottom: 5%;
      span{
        font-size: 2.8rem;
      }
    }
  }
  .nav{
    width: 100%;
    display: flex;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
    justify-content: space-around;
    border-bottom: solid 1px #999;
    font-weight: bold;
    a{
      color: #999;
      height: 3rem;
      position: relative;
      padding-left: 5%;
      span{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-48%);
      }
    }
  }
}
</style>


