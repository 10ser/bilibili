<template>
  <div class="videopage">
    <div class="main">
      <div class="video-page">
        <div class="video">
          <div class="video-title">
            <div class="back" @click="back"><span class="iconfont icon-fanhui"></span></div>
            <div class="video-number">av123456</div>
            <div class="video-more"><span class="iconfont icon-gengduo1"></span></div>
          </div>
        </div>
        <div class="nav-lis">
          <nav>
            <a href="###" @click.prevent="changeactive(1)" :class="{'pink': active === 'conts1'}" >简介</a>
            <a href="###" @click.prevent="changeactive(2)" :class="{'pink': active === 'conts2'}" >评论(666)</a>
            <span class="span" :class="{'span1': active === 'conts1', 'span2': active === 'conts2'}"></span>
            <div class="play"><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span></div>
          </nav>
        </div>
        <div class="content">
          <mt-tab-container v-model="active" swipeable class="">
            <mt-tab-container-item id="conts1" class="jianjie">
              <div class="video-js" :class="{'video-height': !xlbol}">
                <div class="video-name omitted">视频名字内容描述</div>
                <div class="video-msg">
                  <div><span class="iconfont icon-bofangqi-bofangxiaodianshi"></span>3.4万</div>
                  <div><span class="iconfont icon-xiangbu"></span>333</div>
                  <div>3.4小时前</div>
                  <div><span class="iconfont icon-jinggao"></span>未经作者授权禁止转载</div>
                </div>
                <div class="video-con" >主要是视屏的主要内容描述，阿速达hi爱是滴啊上大号是打死都还U盾是啊圣诞节上大号山东矿机按时打卡奥斯卡你的卡就是你的空间撒不带短板大时代不是</div>
                <div class="xl-btn" @click="xl" :class="{'rotate': xlbol}"><span class="iconfont icon-moreinfo-copy"></span></div>
              </div>
              <div class="gn-lis">
                <div><span class="iconfont icon-praise pink"><b>66</b></span></div>
                <div><span class="iconfont icon-praise orange"><b>66</b></span></div>
                <div><span class="iconfont icon-xing1 pink"><b>66</b></span></div>
                <div><span class="iconfont icon-xiazai skyblue"><b>缓存</b></span></div>
                <div><span class="iconfont icon-icon1 green"><b>66</b></span></div>
              </div>
              <div class="user">
                <div class="head"><img src="/static/images/timg.1.jpg" alt=""></div>
                <div class="user-msg">
                  <div class="user-name">用户名称</div>
                  <div class="focus">xxxx人关注</div>
                </div>
                <div class="gn-btn">
                  <div class="follow">关注</div>
                  <div class="charge">充电</div>
                </div>
              </div>
              <div class="label">
                <ul>
                  <li>吃鸡</li>
                  <li>绝地求生</li>
                </ul>
              </div>
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
            </mt-tab-container-item>
            <mt-tab-container-item id="conts2" class="pinglun">
              <div class="pl-model">
                <div class="pl-title">评论(666)<span class="iconfont icon-gengduo1"></span></div>
                <div class="pl-lis">
                  <ul>
                    <li>
                      <div class="user-head"><img src="/static/images/timg.1.jpg" alt=""></div>
                      <div class="pl-cont">
                        <div class="cont-top">用户名称<span class="time">xx小时前</span><span class="lc">#5</span></div>
                        <div class="cont-con">用户评论内容</div>
                        <div class="cont-bot">
                          <span class="iconfont icon-gengduo1"></span>
                          <div><span class="iconfont icon-pinglun"></span>0</div>
                          <div><span class="iconfont icon-praise"></span>0</div>
                          <div><span class="iconfont icon-praise"></span>0</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 'conts1',
      xlbol: false
    }
  },
  methods: {
    changeactive (index) {
      this.active = 'conts' + index
    },
    back () {
      this.$router.go(-1)
    },
    xl () {
      this.xlbol = !this.xlbol
      console.log(this.xlbol)
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
.video-page{
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
  .nav-lis{
    height: 3rem;
    margin-bottom: .5rem;
    background-color: #fff;
    padding: 0 2%;
    position: relative;
    a{
      display: inline-block;
      padding: 2% 2%;
      font-weight: bold;
    }
    .span{
      border: 1.5px solid;
      display: block;
      position: absolute;
      color: #fb7299;
      border-radius: 10%;
      bottom: 0;
      width: 8%;
      transition: all 0.3s;
      left: 3%;
    }
    .span1{
      width: 8%;
      transform: translateX(0);
    }
    .span2{
      width: 16%;
      transform: translateX(72%);
    }
    .pink{color: #fb7299;}
    .play{
      position: absolute;
      right: 4%;
      top: -50%;
      width: 4rem;
      height: 4rem;
      z-index: 5;
      background-color: #fb7299;
      border-radius: 50%;
      transform: translateY(-15%);
      box-shadow: 0px 5px 10px #ddd;
      >span{
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2.5rem;
        transform: translate(-50%, -50%);
      }
    }
  }
  .content{
    flex: 3;
    background-color: #fff;
    width: 100%;
    overflow: scroll;
    .jianjie{
      width: 100%;
      .video-js{
        width: 100%;
        padding:2%;
        height: 28%;
        position: relative;
        overflow: hidden;
        transition: all 0.3s;
        .video-name{
          font-size: 1.4rem;
          font-weight: bold;
          width: 80%;
          padding: 1%;
        }
        .video-msg{
          width: 100%;
          color: #999;
          div{
            padding: 1.5%;
            display: inline-block;
          }
          div:last-child{
            float: right;
          }
        }
        .video-con{color: #999;padding: 1% 0;}
        .xl-btn{
          position: absolute;
          right: 3%;
          top: 5%;
          transform: rotate(90deg);
          transition: all 0.3s ease;
          span{
            color: #999;
            font-size: 2.5rem;
          }
        }
        .rotate{transform: rotate(270deg);}
      }
      .video-height{height: 6.7rem;}
      .gn-lis{
        width: 100%;
        display: flex;
        padding: 1% 4%;
        height: 4.5rem;
        justify-content: space-around;
        border-bottom: solid 1px #ddd;
        div{
          width: 10%;
          text-align: center;
          span{
            display: block;
            font-size: 2.1rem;
          }
          b{
            display: block;
            font-size: 1.2rem;
            color: #999;
            margin-top: 3%;
          }
        }
      }
      .user{
        width: 100%;
        height: 4.5rem;
        padding: 2% 3%;
        position: relative;
        .head{
          height: 100%;
          float: left;
          width: 3rem;
          height: 3rem;
          margin-right: 3%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: solid 1px #999;
          }
        }
        .user-msg{
          height: 100%;
          float: left;
          display: flex;
          flex-direction: column;
          align-content: space-between;
          div{
            flex: 1;
            height: 2.2rem;
          }
          .user-name{font-weight: bold;font-size: 1.2rem;}
          .focus{color: #999;}
        }
        .gn-btn{
          float: right;
          position: absolute;
          right: 4%;
          top: 50%;
          width: 30%;
          transform: translateY(-50%);
          div{
            float: right;
            display: inline;
            padding: 5% 10%;
            border:solid 1px;
            text-align: center;
            border-radius: 5%;
          }
          .charge{
            border:solid 1px #fb7299;
            color: #fb7299;
          }
          .follow{
            background-color: #fb7299;
            border:solid 1px #fb7299;
            color: #fff;
            margin-left: 5%;
          }
        }
      }
      .label{
        height: 3rem;
        width: 100%;
        padding: 1% 2%;
        ul{
          width: 100%;
          height: 3rem;
          >li{
            border:solid 1px #999;
            border-radius: 25px;
            margin: 0% 1%;
            font-weight: bold;
            padding:  1.5% 2%;
            float: left;
          }
        }
      }
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
            width: 30%;
            height: 6rem;
            margin-right: 3%;
            img{width: 100%;height: 100%;border-radius: 5%;}
          }
          .sp-cont{
            float: left;
            width: 66%;
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
    .pinglun{
      width: 100%;
      .pl-model{
        width: 100%;
        .pl-title{
          width: 100%;
          height: 2.5rem;
          line-height: 2.5rem;
          font-weight: bold;
          padding: 0 2%;
          span{
            float: right;
            color: #999;
          }
        }
        .pl-lis{
          width: 100%;
          overflow: auto;
          ul{
            li{
              padding: 2%;
              width: 100%;
              border-bottom: solid 1px #ddd;
              overflow: auto;
              .user-head{
                width: 15%;
                float: left;
                text-align: center;
                img{width: 3rem;height: 3rem;border-radius: 50%;}
              }
              .pl-cont{
                float: left;
                width: 85%;
                font-weight: bold;
                .cont-top{
                  width: 100%;
                  color: #999;
                  span{
                    float: right;
                    color: #ddd;
                  }
                  .time{margin-left: 3%;}
                }
                .cont-bot{
                  width: 100%;
                  div{
                    display: inline;
                    margin-right: 5%;
                    color: #999;
                    span{margin-right: 2%;}
                  }
                  div:last-child{
                    >span{transform: rotate(45deg);}
                  }
                  >span{float: right;color: #999;}
                }
                .cont-con{padding: 3% 0;}
              }
            }
          }
        }
      }
    }
  }
}
</style>


