<template>
  <div class="dynamic">
    <div class="main">
       <nav v-if="loginbol">
         <a href="###" @click="changeactive(0)" :class="{'white': active === 0}">视频</a>
         <a href="###" @click="changeactive(1)" :class="{'white': active === 1}">综合</a>
         <a href="###" @click="changeactive(2)" :class="{'white': active === 2}">热门</a>
         <span :class="{'span1': active === 0, 'span3': active === 2, 'span2': active === 1}"></span>
       </nav>
       <div class="dt-content" v-if="loginbol">
        <swiper ref="mySwiper" @slideChange="callback">
          <swiper-slide class="shipin">
            <div class="history">
               <div class="hi-title">我的追番<span>查看全部&gt;</span></div>
               <div class="hi-lis">
                 <ul>
                   <li>
                     <div class="img"><img src="/static/images/banner1.jpeg" alt=""></div>
                     <div class="img-name omitted">番剧名称</div>
                     <div class="watch omitted">观影到第几集</div>
                   </li>
                   <li>
                     <div class="img"><img src="/static/images/banner1.jpeg" alt=""></div>
                     <div class="img-name">番剧名称</div>
                     <div class="watch">观影到第几集</div>
                   </li>
                   <li>
                     <div class="img"><img src="/static/images/banner1.jpeg" alt=""></div>
                     <div class="img-name">番剧名称</div>
                     <div class="watch">观影到第几集</div>
                   </li>
                   <li>
                     <div class="img"><img src="/static/images/banner1.jpeg" alt=""></div>
                     <div class="img-name">番剧名称</div>
                     <div class="watch">观影到第几集</div>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="dt-list">
               <ul>
                 <li>
                   <div class="dt-title">
                     <div class="dt-head"><img src="/static/images/timg.1.jpg" alt=""></div>
                     <div class="dt-user">
                       <div class="user-name">显示用户名</div>
                       <div class="release-time">x小时前</div>
                     </div>
                     <div class="more"><span class="iconfont icon-gengduo1"></span></div>
                   </div>
                   <div class="img-show">
                       <div class="img-exp">是否保持简单就说明材料费ID高速飞行程序公司开发领导不出特夫人是富士康就爱看，考虑时间哈深V阿深V附近AV发是附近AV聚聚啊积分撒</div>
                       <div class="dt-img">
                         <img src="/static/images/banner1.jpeg" alt="">
                         <div class="duration">00:00</div>
                         <div class="play"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span></div>
                       </div>
                        <div class="img-con">
                          <div class="img-cont">显示主要内容，对图片的简单描述</div>
                          <div class="plays">xxx播放</div>
                          <div class="darrage">xxx弹幕</div>
                        </div>
                   </div>
                   <div class="btns">
                    <a href="###" class="iconfont icon-zhuanfa">5</a>
                    <a href="###" class="iconfont icon-xiaoxi">5</a>
                    <a href="###" class="iconfont icon-praise">3</a>
                   </div>
                 </li>
               </ul>
             </div>
          </swiper-slide>
          <swiper-slide class="zonghe">
            综合页面
          </swiper-slide>
          <swiper-slide class="remen">
            热门页面
          </swiper-slide>
        </swiper>
       </div>
       <div class="wdl" v-if="!loginbol">
         <img src="/static/images/weidenglu.png" alt="">
         <button @click="tologin">登录</button>
       </div>
    </div>
    <TabBar msg='动态'/>
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    changeactive (index) {
      this.active = index
      this.swiper.slideTo(index, 400, false)
    },
    tologin () {
      this.$router.push('/login')
    },
    callback () {
      this.active = this.swiper.activeIndex
    }
  },
  components: {
    TabBar
  },
  computed: {
    loginbol () {
      return this.$store.state.loginbol
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style lang="less" scoped>
nav{
  width: 100%;
  padding: 0% 3%;
  display: flex;
  height: 3rem;
  background-color: #fb7299;
  position: relative;
  a{
    color: #eaeaea;
    flex: 1;
    text-align: center;
    height: 3rem;
    padding: 0% 2.5%;
    line-height: 3rem;
    font-size: 1.2rem;
  }
  span{
    border: 1.5px solid;
    display: block;
    position: absolute;
    color: #fff;
    width: 20%;
    border-radius: 10%;
    bottom: 0;
    transition: all 0.3s;
  }
  .span1{transform: translateX(28%);}
  .span2{transform: translateX(184%);}
  .span3{transform: translateX(342%);}
  .white{
    color: #fff;
  }
}
.history{
  width: 100%;
  padding: 2% 2.5%;
  background-color: #fff;
  margin-bottom: 0.8rem;
  .hi-title{
    font-size: 1.2rem;
    width: 100%;
    font-weight: bold;
    margin-bottom:2%; 
    span{
      float: right;
      font-size: 1rem;
      color: #999;
    }
  }
  .hi-lis{
    width: 100%;
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      li{
        width: 24%;
        .img{
          width: 100%;
          height: 4.5rem;
          img{width: 100%;height: 100%;}
        }
        .img-name{font-weight: bold;margin-bottom: 3%;}
        .watch{color: #999;margin-bottom: 3%;}
      }
    }
  }
}
.dt-content{
  width: 100%;
  height: 94%;
  overflow: scroll;
  padding-bottom: 16%;
}
.dt-list{
  width: 100%;
  background-color: #fff;
  ul{
    width: 100%;
    overflow: auto;
    li{
      width: 100%;
      padding: 2% 2.5% 0 2.5%;
      .dt-title{
        width: 100%;
        height: 3.1rem;
        overflow: hidden;
        margin-bottom: 2%;
        .dt-head{
          border: solid 2px #ddd;
          border-radius: 50%;
          width: 3.1rem;
          height: 3.1rem;
          float: left;
          margin-right: 3%;
          img{width: 100%;height: 100%;border-radius: 50%;}
        }
        .dt-user{
          height: 3.1rem;
          float: left;
          line-height: 1.5rem;
          .user-name{font-weight: bold;font-size: 1.1rem;}
          .release-time{color: #999;}
        }
        .more{float: right;color: #999;}
      }
      .img-show{
        width: 100%;
        height: 9rem;
        .img-exp{padding-bottom: 2%;}
        .dt-img{
          float: left;
          width: 45%;
          height: 100%;
          position: relative;
          img{width: 100%;height: 100%;}
          .duration{
            background-color: rgba(0, 0, 0, 0.6);
            position: absolute;
            left: 5%;
            bottom: 8%;
            color: #fff;
            font-size: 1.2rem;
          }
          .play{
            position: absolute;
            right: 3%;
            bottom: 2%;
            color: #fff;
            span{font-size: 2.5rem;}
          }
        }
        .img-con{
          padding: 2%;
          border: solid 1px #999;
          float:left;
          width: 54%;
          height: 100%;
          .img-cont{margin: 2%;}
          .darrage{color: #999;display: inline-block;}
          .plays{color: #999;display: inline-block;margin-right: 5%;}
        }
      }
      .btns{
        width: 100%;
        height: 3.5rem;
        display: flex;
        justify-content: space-around;
        a{
          color: #999;
          height: 3.5rem;
          line-height: 3.5rem;
        }
      }
    }
  }
}
.wdl{
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  position: relative;
  img{margin: 15% 0 10% 0;width:16rem;position: absolute;left: 50%;transform: translateX(-50%);}
  button{
    border: none;
    border-radius: 5%;
    width: 25%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fb7299;
    color: #fff;
    margin-top: 90%;
    height: 3rem;
  }
}
</style>
