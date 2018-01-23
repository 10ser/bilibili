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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    flex: 1.8;
    background-color: #000;
    color: #fff;
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
  }
}
</style>


