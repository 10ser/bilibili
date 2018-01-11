<template>
  <div class="zone">
    <div class="main">
      <nav>
        <a href="###"><span class="iconfont icon-zhibo"></span>直播</a>
        <a href="###"><span class="iconfont icon-fanju"></span>番剧</a>
        <a href="###"><span class="iconfont icon-keji-"></span>动画</a>
        <a href="###"><span class="iconfont icon-guochuang"></span>国创</a>
        <a href="###"><span class="iconfont icon-yinle"></span>音乐</a>
        <a href="###"><span class="iconfont icon-wudao"></span>舞蹈</a>
        <a href="###"><span class="iconfont icon-youxi"></span>游戏</a>
        <a href="###"><span class="iconfont icon-feidie"></span>科技</a>
        <a href="###"><span class="iconfont icon-shenghuo"></span>生活</a>
        <a href="###"><span class="iconfont icon-guixu"></span>鬼畜</a>
        <a href="###"><span class="iconfont icon-shishang"></span>时尚</a>
        <a href="###"><span class="iconfont icon-guanggao"></span>广告</a>
        <a href="###"><span class="iconfont icon-yule"></span>娱乐</a>
        <a href="###"><span class="iconfont icon-yingshi"></span>影视</a>
        <a href="###"><span class="iconfont icon-fangyingshi"></span>放映厅</a>
        <a href="###"><span class="iconfont icon-xiaoshipin"></span>小视频</a>
        <a href="###"><span class="iconfont icon-zhuanlanwenzhang"></span>专栏</a>
        <a href="###"><span class="iconfont icon-yinpin"></span>音频</a>
        <a href="###"><span class="iconfont icon-xiangbu"></span>相簿</a>
        <a href="###"><span class="iconfont icon-gouwudai"></span>会员购</a>
        <a href="###"><span class="iconfont icon-yuleshi"></span>游戏中心</a>
      </nav>
      <div class="fq-list">
        <div class="fq-title">
          <span><b class="iconfont icon-xing1"></b>番剧区</span>
          <span>进去看看</span>
        </div>
        <div class="fq-lis">
          <ul>
            <li>
              <div class="fq-img"><img src="/static/images/banner1.jpeg" alt="" srcset=""></div>
              <div class="fq-con">
                <p>banner显示的主要展示</p>
                <span><b class="iconfont icon-dianshi"></b>141.2万</span>
                <span><b class="iconfont icon-xing1"></b>21.2万</span>
              </div>
            </li>
            <li>
              <div class="fq-img"><img src="/static/images/banner1.jpeg" alt="" srcset=""></div>
              <div class="fq-con">
                <p>banner显示的主要展示</p>
                <span><b class="iconfont icon-dianshi"></b>141.2万</span>
                <span><b class="iconfont icon-xing1"></b>21.2万</span>
              </div>
            </li>
          </ul>
            <div class="fq-btns">
              <span>更多番剧</span>
              <span>14条新动态，点击刷新<b class="iconfont icon-shuaxin"></b></span>
            </div>
        </div>
      </div>
    </div>
    <TabBar msg='分区'/>
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
.main{
  height: 90%;
  // overflow-y: hidden;
  padding-bottom: 15%;
  nav{
    width: 100%;
    overflow: auto;
    a{
      width: 25%;
      padding: 2%;
      float: left;
      text-align: center;
      span{
        display: block;
        font-size: 2rem;
        margin-bottom: 5%;
      }
    }
  }
  .fq-list{
    width: 100%;
    .fq-title{
      width: 100%;
      overflow: hidden;
      height: 3rem;
      line-height:3rem;
      padding: 0 2.5%; 
      position: relative;
      span:first-child{float: left;width:30%;font-size:1.2rem;b{margin-right: 5%;color: coral;}}
      span:last-child{
        color:#fff;
        background-color: #999;
        padding: 0% 2%;
        height: 2rem;
        display: inline-block;
        line-height: 2rem;
        position: absolute;
        right: 2%;
        top: 50%;
        transform: translateY(-50%);
        }
    }
    .fq-lis{
      width: 100%;
      ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        overflow: auto;
        padding: 0% 2.5%;
        li{
          width: 48.5%;
          height: 12.5rem;
          position: relative;
          font-size: .8rem;
          .fq-img{
            width: 100%;
            height: 65%;
            img{width: 100%;height: 100%;border-radius: 10px;}
          }
          .fq-con{
            width: 100%;
            height: 35%;
            p{
              width: 100%;
              // height: 57%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              padding: 4% 4%;
            }
            span{
              font-size: .9rem;
              color: #999;
              padding: 2%;
              margin-right: 8%;
              b{
                margin-right: 3%;
              }
            }
          }
        }
      }
      .fq-btns{
        width: 100%;
        padding: 2% 2.5%;
        overflow: auto;
        span:first-child{
          float: left;
          width: 25%;
          height: 2rem;
          background-color: #fff;
          line-height: 2rem;
          text-align: center;
        }
        span:last-child{
          float: right;
          width: 40%;
          b{color: #fb7299;margin: 0% 3%;}
        }
      }
    }
  }
}
</style>


