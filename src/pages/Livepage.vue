<template>
  <div class="Livepage">
    <div class="main">
      <div class="page">
        <div class="window" @click="hide">
          <div class="gn-lis" :class="{'dh-lis': !hidebol}">
            <div class="back" @click.prevent="back"><span class="iconfont icon-fanhui"></span></div>
            <span class="jg"><var class="iconfont icon-jinggao "></var></span>
            <span class="fx"><var class="iconfont icon-icon1 "></var></span>
          </div>
          <div class="ds" :class="{'none': !hidebol}"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span></div>
          <div class="gn-lix" :class="{'dh-lix': !hidebol}">
            <div class="switch"><span class="iconfont icon-bofang"></span><b>00:00</b></div>
            <div class="full"><span class="iconfont icon-quanping"></span></div>
          </div>
        </div>
        <div class="anchor">
          <div class="head"><img src="/static/images/timg.1.jpg" alt="" srcset=""></div>
          <div class="anchor-msg">
            <div class="room">主播间名称<span class="iconfont icon-moreinfo-copy"></span></div>
            <div class="name"><span>UPxx</span>主播名称</div>
            <div class="num"><span class="iconfont icon-renshu"></span>6666</div>
          </div>
          <div class="follow">
            <div class="fol-btn">+关注</div>
            <div class="fol-num">6666</div>
          </div>
        </div>
         <nav>
          <a href="###" @click.prevent="changeactive(0)" :class="{'pink': active === 0}" >互动</a>
          <a href="###" @click.prevent="changeactive(1)" :class="{'pink': active === 1}" >排行榜</a>
          <a href="###" @click.prevent="changeactive(2)" :class="{'pink': active === 2}" >舰队</a>
          <a href="###" @click.prevent="changeactive(3)" :class="{'pink': active === 3}" >友爱社</a>
          <span :class="{'span1': active === 0, 'span2': active === 1, 'span3': active === 2, 'span4': active === 3}"></span>
          </nav>
        <div class="live-lis">
          <!-- <mt-tab-container v-model="active" swipeable class="wan">
            <mt-tab-container-item id="lis1" class="hudong">
               <div class="bar-show">
                 <ul>
                   <li>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                   </li>
                 </ul>
               </div>
               <div class="pl-input">
                <div class="pl-lw"><span class="iconfont icon-bilibili_"></span></div>
                <div class="pl-int"><input type="text" placeholder="输入想发送的弹幕"></div>
                <div class="pl-more"><span class="iconfont icon-moreinfo-copy"></span></div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="lis2" class="paihang">
              <div class="ph-title">粉丝榜</div>
              <div class="fs-lis">
                <ul>
                  <li><span>1</span>名字<var>66666</var></li>
                </ul>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="lis3" class="jiandui">
             <div class="top3">
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
             </div>
             <div class="top-lis">
               <ul>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
               </ul>
             </div>
             <div class="into-btn"><span class="iconfont icon-bilibili_"></span>主播的小船 一点就上<b class="iconfont icon-moreinfo-copy"></b></div>
            </mt-tab-container-item>
            <mt-tab-container-item id="lis4" class="youai">
              <div class="support">
                <div class="sup-title">No.1 名称</div>
                <div class="user">社长 <img src="/static/images/timg.1.jpg" alt="" srcset=""><span>mingz</span></div>
                <div class="sup-num">本周应援值：666<span><b class="iconfont icon-xing1"></b>应援999天</span></div>
              </div>
            </mt-tab-container-item>
          </mt-tab-container> -->
          <swiper ref="mySwiper" @slideChange="callback" class="wan">
            <swiper-slide class="hudong">
               <div class="bar-show">
                 <ul>
                   <li>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                     <div class="user-pl"><span>username:</span> <b>评论内容</b></div>
                   </li>
                 </ul>
               </div>
               <div class="pl-input">
                <div class="pl-lw"><span class="iconfont icon-bilibili_"></span></div>
                <div class="pl-int"><input type="text" placeholder="输入想发送的弹幕"></div>
                <div class="pl-more"><span class="iconfont icon-moreinfo-copy"></span></div>
              </div>
            </swiper-slide>
            <swiper-slide class="paihang">
              <div class="ph-title">粉丝榜</div>
              <div class="fs-lis">
                <ul>
                  <li><span>1</span>名字<var>66666</var></li>
                </ul>
              </div>
            </swiper-slide>
            <swiper-slide class="jiandui">
               <div class="top3">
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
               <div><img src="/static/images/timg.1.jpg" alt=""><span>mingzi</span></div>
             </div>
             <div class="top-lis">
               <ul>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
                 <li><span class="iconfont icon-xing1"></span>mingzi</li>
               </ul>
             </div>
             <div class="into-btn"><span class="iconfont icon-bilibili_"></span>主播的小船 一点就上<b class="iconfont icon-moreinfo-copy"></b></div>
            </swiper-slide>
            <swiper-slide class="youai">
              <div class="support">
                <div class="sup-title">No.1 名称</div>
                <div class="user">社长 <img src="/static/images/timg.1.jpg" alt="" srcset=""><span>mingz</span></div>
                <div class="sup-num">本周应援值：666<span><b class="iconfont icon-xing1"></b>应援999天</span></div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      hidebol: true
    }
  },
  methods: {
    changeactive (index) {
      this.active = index
      this.swiper.slideTo(index, 400, false)
    },
    hide () {
      this.hidebol = !this.hidebol
      setTimeout(() => {
        this.hidebol = false
      }, 3000)
    },
    back () {
      this.$router.go(-1)
    },
    callback () {
      this.active = this.swiper.activeIndex
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    setTimeout(() => {
      this.hidebol = false
    }, 3000)
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
.page{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .window{
    flex: 2;
    width: 100%;
    background: #ddd;
    color:#fff;
    position: relative;
    overflow: hidden;
    .gn-lis{
      width: 100%;
      height: 20%;
      overflow: hidden;
      background-color: #fb7299;
      position: relative;
      z-index: 5;
      transition: all 0.3s ease;
      background: -webkit-linear-gradient(top,rgba(0,0,0,.5), transparent);
      .back{
        height: 100%;
        float: left;
        width: 15%;
        text-align: center;
        position: relative;
        span{
          font-size: 2rem;
          position: absolute;
          font-weight: bold;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      >span{
        float: right;
        width: 12%;
        text-align: center;
        position: absolute;
        font-weight: bold;
        height: 100%;
        var{
          position: absolute;
          top:50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .jg{right: 0%;}
      .fx{right: 10%;}
    }
    .gn-lix{
      width: 100%;
      height: 20%;
      overflow: hidden;
      background-color: #fb7299;
      position: absolute;
      bottom: 0;
      z-index: 5;
      transition: all 0.3s ease;
      background: -webkit-linear-gradient(bottom,rgba(0,0,0,.5), transparent);
      .switch{
        height: 100%;
        width: 25%;
        float: left;
        text-align: center;
        span{
          margin-right: 10%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 3%;
        }
        b{
          position: absolute;
          left: 10%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .full{
        font-size: 2rem;
        position: absolute;
        right: 0;
        top:50%;
        padding: 2% 4%;
        transform: translateY(-50%);
      }
    }
    .ds{
      position: absolute;
      color: #fff;
      right: 5%;
      bottom: 20%;
      transition: all 0.3s ease;
      span{
        font-size: 3rem;
      }
    }
    .dh-lis{
      transform: translateY(-100%);
      opacity: 0;
    }
    .dh-lix{
      transform: translateY(100%);
      opacity: 0;
    }
    .none{
      transform: translateX(100%);
      opacity: 0;
    }
  }
  .anchor{
    width: 100%;
    height: 6rem;
    background-color: #fff;
    padding: 1% 2%;
    overflow: hidden;
    border-bottom: solid 1px #ddd;
    position: relative;
    .head{
      float: left;
      width: 4rem;
      height: 4rem;
      position: relative;
      top:50%;
      transform: translateY(-50%);
      margin-right: 2.5%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .anchor-msg{
      float: left;
      width: 70%;
      div{margin-bottom: 3%;width:100%;}
      .room{
        font-weight: bold;
        span{color:#fb7299;}
      }
      .name{
        color: #fb7299;
        span{
          border: solid 2px #fb7299;
          border-radius: 25px;
          padding: 0 3%;
          margin-right: 3%;
        }
      }
      .num{
        color: #999;
        span{font-size: 1.5rem;margin-right: 3%;}
      }
    }
    .follow{
      float: right;
      position: absolute;
      right: 2%;
      bottom: 50%;
      width: 10rem;
      transform: translateY(50%);
      div{
        float: right;
        text-align: center;
      }
      .fol-btn{
        border:solid 1px #fb7299;
        border-radius: 10%;
        padding: 3% 5%;
        color: #fb7299;
        font-weight: bold;
        margin-left: 4%;
      }
      .fol-num{
        border:solid 1px #999;
        border-radius: 10%;
        padding: 3% 5%;
        color: #999;
        font-weight: bold;
      }
    }
  }
  nav{
    width: 100%;
    height: 3rem;
    background-color: #fff;
    border-bottom: solid 1px #ddd;
    padding: 0 2.5%;
    display: flex;
    justify-content: space-around;
    position: relative;
    overflow: hidden;
    a{
      height: 3rem;
      line-height: 3rem;
      font-weight: bold;
      width: 24%;
      text-align: center;
    }
    span{
      border: 1.5px solid;
      display: block;
      position: absolute;
      color: #fb7299;
      width: 20%;
      border-radius: 10%;
      bottom: 0;
      transition: all 0.3s;
      left: 3%;
    }
    .span1{transform: translateX(7%);}
    .span2{transform: translateX(123%);}
    .span3{transform: translateX(242%);}
    .span4{transform: translateX(362%);}
  }
  .live-lis{
    width: 100%;
    flex: 3;
    overflow: hidden;
    position: relative;
    .wan{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // display: flex;
      // flex-direction: column;
      >div{height: 100% !important;}
      .mint-tab-container-wrap{height: 100% !important;}
      .hudong{
        width: 100%;
        height: 100%;
        .pl-input{
          position: absolute;
          bottom: 0;
          background-color: #fff;
          height: 3rem;
          width: 100%;
          .pl-lw{
            width: 10%;
            float: left;
            height: 100%;
            position: relative;
            span{
              font-size: 2.5rem;
              position: absolute;
              top:50%;
              left: 20%;
              color: #fb7299;
              transform: translateY(-50%);
            }
          }
          .pl-int{
            float: left;
            width: 82%;
            border-bottom: solid 1px #000;
            input{
              border:none;
              padding: 2% 2%;
              outline: none;
              width: 100%;
            }
          }
          .pl-more{
            width: 8%;
            float: right;
            height: 100%;
            position: relative;
            span{
              font-size: 2.5rem;
              position: absolute;
              top: 50%;
              left: 50%;
              color: #fb7299;
              transform: translate(-50%,-50%);
            }
          }
        }
        .bar-show{
          width: 100%;
          overflow: hidden;
          height: 28rem;
          overflow: scroll;
          padding: 0 3%;
          li{
            width: 100%;
            padding: 1% 0;
            span{
              color: #fb7299;
              margin-right: 2%;
            }
          }
        }
      }
      .paihang{
        width: 100%;
        .ph-title{
          width: 100%;
          color: #fb7299;
          text-align: center;
          background-color: #ddd;
          height: 2.5rem;
          line-height: 2.5rem;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .fs-lis{
          width: 100%;
          ul{
            width: 100%;
            overflow: auto;
            li{
              width: 100%;
              height: 2.5rem;
              line-height: 2.5rem;
              span{
                width: 10%;
                font-weight: bold;
                text-align: center;
                display: inline-block;
              }
              var{
                padding: 0 2%;
                float: right;
              }
            }
          }
        }
      }
      .jiandui{
        width: 100%;
        .top3{
          padding: 3% 10%;
          display: flex;
          justify-content: space-between;
          div{
            flex: 1;
            text-align: center;
            img{
              width: 3.5rem;
              height: 3.5rem;
              border-radius: 50%;
              border: solid 2px #fb7299;
            }
            span{
              display: block;
              color: #fb7299;
            }
          }
        }
        .top-lis{
          width: 100%;
          overflow: hidden;
          height: 28rem;
          overflow: scroll;
          ul{
            padding: 0 3%;
            li{
              width: 100%;
              padding: 1% 5%;
              position: relative;
              padding-left:10%; 
              span{
                position: absolute;
                top:50%;
                left: 1%;
                color: #fb7299;
                transform: translateY(-50%);
              }
            }
          }
        }
        .into-btn{
          width: 100%;
          background-color: #fff;
          height: 3rem;
          position: absolute;
          padding: 2% 10%;
          bottom: 0;
          left: 0;
          right: 0;
          span{
            font-size: 2rem;
            color:#fb7299;
            position: absolute;
            left: 2%;
            top: 50%;
            transform: translateY(-50%);
          }
          b{
            font-size: 2rem;
            color:#fb7299;
            position: absolute;
            right: 2%;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .youai{
        width: 100%;
        .support{
          width: 100%;
          padding-left: 2%;
          display: flex;
          flex-direction: column;
          align-content: space-between;
          div{padding: 1% 0;font-weight: bold;}
          .sup-title{
            font-size: 1.5rem;
            color: orangered;
            font-weight: bold;
            padding: 2% 3%;
          }
          .user{
            width: 100%;
            align-self: center;
            position: relative;
            img{
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              position: absolute;
              margin-left: 2%;
              top: 50%;
              transform: translateY(-50%);
            }
            span{margin-left: 10%;}
          }
          .sup-num{
            width: 100%;
            span{
              float: right;
              margin-right: 3%;
            }
          }
        }
      }
    }

  }
}
</style>

