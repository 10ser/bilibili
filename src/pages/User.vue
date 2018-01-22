<template>
  <div class="user">
    <div class="main">
      <div class="head-bg">
        <div class="head-tar">
          <div class="back"><span class="iconfont icon-fanhui"></span></div>
          <div class="more"><span class="iconfont icon-gengduo1"></span></div>
        </div>
      </div>
      <div class="user-message">
        <div class="user-top">
          <div class="user-img"><img src="/static/images/timg.1.jpg" alt=""></div>
          <span class="focus">关注</span>
          <span class="msg">发消息</span>
        </div>
        <div class="user-cont">
          <div class="cont-top">用户名称
            <span class="iconfont icon-icon1"></span>
            <span class="red">Lv6</span>
            <span class="gary">UID: xxxxxxx</span>
          </div>
          <div class="cont-mid">
            <div><span>6</span>关注</div>
            <div><span>6666</span>粉丝</div>
            <div><span>0</span>应援团</div>
          </div>
          <div class="cont-bot">用户简介内容按时打卡打卡机安徽省看到哈空间是个大嘎达抗旱啊啊擦擦嘎查噶US干撒大家</div>
        </div>
        <div class="user-bot">
          更多电量，更多灵感~~!<span>充电</span>
        </div>
      </div>
      <nav>
        <div :class="{'pink': active === 0}" @click="change(0)">主页</div>
        <div :class="{'pink': active === 1}" @click="change(1)">动态</div>
        <div :class="{'pink': active === 2}" @click="change(2)">投稿</div>
        <div :class="{'pink': active === 3}" @click="change(3)">收藏</div>
        <div :class="{'pink': active === 4}" @click="change(4)">追番</div>
        <span :class="{'span1': active===0, 'span2': active===1, 'span3': active===2, 'span4': active===3, 'span5': active===4}"></span>
      </nav>
      <div class="zp-lis">
        <swiper ref="mySwiper" @slideChange="callback">
          <swiper-slide class="zhuye">
            <div class="zb-btn"><span class="iconfont icon-zhibo"></span>Ta现在并没有直播，去<span class="pink">订阅</span>的直播</div>
            <div class="assembly">
              <div class="ass-title">视频<b>123</b><span class="iconfont icon-moreinfo-copy"></span><span>查看更多</span></div>
              <div class="ass-lis">
                <ul>
                  <li>
                    <div class="imgs">
                      <img src="/static/images/banner1.jpeg" alt="" >
                      <div class="imgjs">
                        <span><i class="iconfont icon-dianshi"></i>1.7万</span>
                        <span><i class="iconfont icon-xiangbu"></i>666</span>
                        <span>20:18</span>
                      </div>
                    </div>
                    <div class="content">
                      <p>直播内容啥空间上的好看教案汇顶科技按时打卡上洒水大所多叙述</p>
                    </div>
                  </li>
                  <li>
                    <div class="imgs">
                      <img src="/static/images/banner1.jpeg" alt="" >
                      <div class="imgjs">
                        <span><i class="iconfont icon-dianshi"></i>1.7万</span>
                        <span><i class="iconfont icon-xiangbu"></i>666</span>
                        <span>20:18</span>
                      </div>
                    </div>
                    <div class="content">
                      <p>直播内容啥空间上的好看教案汇顶科技按时打卡上洒水大所多叙述</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="dongtai">
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
          <swiper-slide class="tougao">
            <div class="sp-lis">
                <ul>
                  <li>
                    <div class="sp-img"><img src="/static/images/banner1.jpeg" alt=""></div>
                    <div class="sp-cont">
                      <div class="sp-name">视频名称是</div>
                      <div class="sp-con">
                        <div class="sp-play"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span>xxxx</div>
                        <div class="sp-dm"><span class="iconfont icon-xiangbu"></span>xxxx</div>
                        <div class="sp-user"><span class="iconfont icon-xiangbu"></span>用户名</div>
                      </div>
                      <div class="sp-more"><span class="iconfont icon-gengduo1"></span></div>
                    </div>
                  </li>
                  <li>
                    <div class="sp-img"><img src="/static/images/banner1.jpeg" alt=""></div>
                    <div class="sp-cont">
                      <div class="sp-name">视频名称是</div>
                      <div class="sp-con">
                        <div class="sp-play"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span>xxxx</div>
                        <div class="sp-dm"><span class="iconfont icon-xiangbu"></span>xxxx</div>
                        <div class="sp-user"><span class="iconfont icon-xiangbu"></span>用户名</div>
                      </div>
                      <div class="sp-more"><span class="iconfont icon-gengduo1"></span></div>
                    </div>
                  </li>
                </ul>
              </div>
          </swiper-slide>
          <swiper-slide class="shoucang">

          </swiper-slide>
          <swiper-slide class="zhuifan">
            <div class="zf-lis">
              <ul>
                <li>
                  <div class="img-show">
                    <img src="/static/images/fm.jpg" alt="">
                    <div class="img-msgs">
                      <div class="msgs-name">番剧名</div>
                      <div class="msgs-num">更新至第2话</div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="img-show">
                    <img src="/static/images/fm.jpg" alt="">
                    <div class="img-msgs">
                      <div class="msgs-name">番剧名</div>
                      <div class="msgs-num">更新至第2话</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    change (index) {
      this.active = index
      this.swiper.slideTo(index, 400, false)
    },
    callback () {
      this.active = this.swiper.activeIndex
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
  display: flex;
  flex-direction: column;
}
.head-bg{
  width: 100%;
  height: 12rem;
  background-color: #fff;
  background-image: url('/static/images/11.png');
  background-size: 100% 100%;
  position: relative;
  .head-tar{
    width: 100%;
    color: #fff;
    .back{
      position: absolute;
      left: 2%;
      top: 3%;
      font-weight: bold;
      padding: 2%;
      span{font-size: 1.6rem;}
    }
    .more{
      position: absolute;
      right: 2%;
      top: 4%;
      font-weight: bold;
      padding: 2%;
      span{font-size: 1.6rem;}
    }
  }
}
.user-message{
  width: 100%;
  background-color: #fff;
  padding-top: 2%;
  position: relative;
  .user-top{
    width: 100%;
    height: 3rem;
    padding: 0% 2%;
    .user-img{
      position: absolute;
      left: 4%;
      width: 5.5rem;
      height: 5.5rem;
      top: 0%;
      transform: translateY(-50%);
      img{width: 100%;height: 100%;border-radius: 50%;}
    }
    span{
      float: right;
      border-radius: 5%;
      padding: 0 3%;
      height: 2.5rem;
      line-height: 2.5rem;
    }
    .focus{
      border:solid 1px #fb7299;
      color: #fff;
      background-color: #fb7299;
      margin-left: 3%;
    }
    .msg{
      border:solid 1px #fb7299;
      color: #fb7299;
    }
  }
  .user-cont{
    width: 100%;
    padding: 0% 2% 3% 2%;
    border-bottom: solid 1px #ddd; 
    .cont-top{
      width: 100%;
      font-size: 1.6rem;
      font-weight: bold;
      color: #fb7299;
      span{
        font-size: 1.2rem;
        margin-left: 2%;
      }
    }
    .cont-mid{
      width: 100%;
      padding: 2% 0%;
      font-weight: bold;
      div{
        display: inline;
        margin-right: 4%;
        color: #999;
        span{
          color:#090909;
          margin-right: 2%;
        }
      }
    }
    .cont-bot{
      color: #999;
      width: 100%;
      padding: 1% 0;
    }
  }
  .user-bot{
    height: 4rem;
    line-height: 4rem;
    color: #999;
    padding: 0% 2%;
    border-bottom: solid 1px #dddddd;
    position: relative;
    width: 100%;
    span{
      border: solid 1px #fb7299;
      color: #fff;
      height: 2.5rem;
      line-height: 2.5rem;
      padding: 0% 3%;
      border-radius: 5%;
      position: absolute;
      font-size: 1.2rem;
      right: 2%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fb7299;
    }
  }
}
nav{
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  display: flex;
  background-color: #fff;
  justify-content: space-around;
  position: relative;
  div{
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
  span{
    position: absolute;
    border:solid 1px #fb7299;
    height: 1px;
    display: block;
    bottom: 0;
    width: 8%;
    left: 0%;
    transform: translateX(75%);
    transition: all 0.3s ease;
  }
  .span1{transform: translateX(75%);}
  .span2{transform: translateX(323%);}
  .span3{transform: translateX(573%);}
  .span4{transform: translateX(828%);}
  .span5{transform: translateX(1075%);}
}
.zp-lis{
  flex: 1;
  width: 100%;
  padding-top: .5rem;
  .zhuye{
    width: 100%;
    .zb-btn{
      text-align: center;
      height: 3rem;
      background-color: #ddd;
      line-height: 3rem;
      margin: 0 2%;
    }
    .assembly{
      width: 100%;
      .ass-title{
        width: 100%;
        padding: 2%;
        font-weight: bold;
        span{
          float: right;
          color:#999;
        }
        b{
          margin-left: 2%;
          color: #999;
        }
      }
      .ass-lis{
        width: 100%;
        padding: 2% 2.8%;
        ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: auto;
          flex-wrap: wrap;
          li{
            width: 49%;
            margin-bottom: 3%;
            background-color: #fff;
            border-radius: 5%;
            height: 12.5rem;
            .imgs{
              width: 100%;
              height: 70%;
              overflow: auto;
              border-radius: 5%;
              position: relative;
              overflow-y: hidden;
              img{
                width: 100%;
                height: 100%;
              }
              .imgjs{
                color: #fff;
                span:first-child{
                  position: absolute;
                  left: 2%;
                  bottom: 3.5%;
                }
                span:nth-of-type(2){
                  position: absolute;
                  left: 32%;
                  bottom: 3%;
                }
                span:nth-of-type(3){
                  position: absolute;
                  right: 2%;
                  bottom: 2%;
                }
              }
            }
            .content{
              width: 100%;
              height: 30%;
              p{
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 2% 4%;
              }
            }
          }
        }
      }
    }
  }
  .dongtai{
    width: 100%;
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
  }
  .tougao{
    width: 100%;
    background-color: #fff;
    .sp-lis{
      width: 100%;
      padding: 0 3%;
      li{
        width: 100%;
        padding: 2% 0;
        overflow: auto;
        border-bottom: solid 1px #999;
        .sp-img{
          float: left;
          width: 35%;
          height: 6rem;
          margin-right: 3%;
          img{width: 100%;height: 100%;border-radius: 5%;}
        }
        .sp-cont{
          float: left;
          width: 61%;
          height: 6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          .sp-name{font-weight: bold;}
          .sp-con{
            color: #999;
            width: 100%;
            div{
              display: inline;
              margin-right: 4%;
              position: relative;
              padding-left: 9%;
              span{
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
              }
            }
          }
          .sp-more{
            position: absolute;
            right: 0;
            bottom: 2%;
            color: #999;
          }
        }
      }
    }
  }
  .shoucang{
    width: 100%;
  }
  .zhuifan{
    width: 100%;
    .zf-lis{
      width: 100%;
      padding: 2%;
      ul{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        li{
          color: #fff;
          width: 33%;
          position: relative;
          margin: 1%;
          .img-show{
            img{width: 100%;height: 100%;border-radius: 5%;}
            .img-msgs{
              padding-bottom: 2%;
              width: 100%;
              position: absolute;
              bottom: 0;
              background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.4), transparent);
              div{padding:3% 4%;}
              div:first-child{font-size: 1.3rem;}
            }
          }
        }
      }
    }
  }
}
</style>


