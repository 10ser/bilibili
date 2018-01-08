<template>
    <div class="tabbar">
        <header>
            <div class="head" @click="openSide"><img src="./images/timg.jpg" alt=""></div>
            <div class="title">{{msg}}</div>
            <div class="TP">
                <a href="###" class="iconfont icon-sousuo" v-if="msg!=='动态' && msg!=='消息'"></a>
                <a href="###" class="iconfont icon-xiazai" v-if="msg!=='动态' && msg!=='消息'"></a>
                <a href="###" class="iconfont icon-huodong" v-if="msg!=='动态' && msg!=='消息' && msg!=='分区'"></a>
                <a href="###" class="iconfont icon-gouwudai" v-if="msg!=='动态' && msg!=='消息' && msg!=='分区'"></a>
                <a href="###" class="iconfont icon-jia" v-if="msg==='消息'" ></a>
                <a href="###" class="iconfont icon-tongxunlu1" v-if="msg==='消息'" ></a>
                <a href="###" class="iconfont icon-fabu" v-if="msg==='动态'" ></a>
                <a href="###" class="iconfont icon-paixing" v-if="msg==='动态'" ></a>
            </div>
        </header>
        <div class="sidebar" :class="{'active': listAnimate}" v-show="listbol">
            <div class="con" :class="{'active': listAnimate}">
                <div class="via">
                    <div class="via-head"><img src="./images/timg.jpg" alt=""></div>
                    <div class="usermessage">
                        <b>罗狮鼠</b>
                        <span>LV 2</span>
                        <var>正式会员</var>
                    </div>
                    <div class="user-yb">硬币：100</div>
                    <div class="userTP">
                        <span class="iconfont icon-qianbao"></span>
                        <span class="iconfont icon-erweima"></span>
                    </div>
                </div>
                <div class="sidelist">
                    <a href="###"><span class="iconfont icon-shouye"></span>首页</a>
                    <a href="###"><span class="iconfont icon-lishi"></span>历史记录</a>
                    <a href="###"><span class="iconfont icon-huancun"></span>离线缓存</a>
                    <a href="###"><span class="iconfont icon-dianping"></span>我的收藏</a>
                    <a href="###"><span class="iconfont icon-focuson"></span>我的关注</a>
                    <a href="###"><span class="iconfont icon-keji-"></span>稍后再看</a>
                    <a href="###"><span class="iconfont icon-dianshi"></span>直播中心</a>
                    <a href="###"><span class="iconfont icon-a536"></span>会员中心</a>
                    <a href="###"><span class="iconfont icon-liuliang"></span>免流量服务</a>
                </div>
                <div class="footbar">
                    <a href="###"><span class="iconfont icon-settings"></span>设置</a>
                    <a href="###"><span class="iconfont icon-zhuti"></span>主题</a>
                    <a href="###"><span class="iconfont icon-yejian01"></span>夜间</a>
                </div>
            </div>         
            <div class="hide" @click="listFalse"  >
            </div>
        </div>
        <nav class="navbar">
            <router-link to="/"><span class="iconfont icon-shouye"></span>首页</router-link>
            <router-link to="/zone"><span class="iconfont icon-fenquxuanzhong"></span>分区</router-link>
            <router-link to="/dynamic"><span class="iconfont icon-xing1"></span>动态</router-link>
            <router-link to="/news"><span class="iconfont icon-xiaoxi"></span>消息</router-link>
        </nav>
    </div>
</template>
<script>
export default {
  props: ['msg'],
  data () {
    return {
      listbol: false,
      listAnimate: false
    }
  },
  methods: {
    openSide () {
      this.listbol = true
      setTimeout(() => {
        this.listAnimate = true
      }, 100)
    },
    listFalse () {
      this.listAnimate = false
      setTimeout(() => {
        this.listbol = false
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.tabbar {
  width: 100%;
  // position: absolute;
  // left: 0;
  // right: 0;
  // top: 0;
  // bottom: 0;
  // z-index: 1;
}
header {
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fb7299;
  .head {
    width: 12%;
    float: left;
    border-radius: 50%;
    border: solid 2px #fff;
    height: 78%;
    z-index: 2;
    position: relative;
    top: 10%;
    left: 2%;
    // background-color: #000;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .title {
    width: 100%;
    // float: left;
    height: 100%;
    text-align: center;
    font-size: 1.3rem;
    color: #fff;
    position: absolute;
    z-index: 1;
    // top:35%;
    // padding-top: 5%;
    display: flex;
    justify-content:center;
    align-items:center;
    font-weight: bold;
  }
  .TP {
    height: 100%;
    float: right;
    width: 40%;
    z-index: 2;
    position: relative;
    display: flex;
    right: 0;
    align-items:center;
    flex-direction: row-reverse;
    a {
      float: left;
      padding: 5%;
      text-align: center;
      color: #fff;
      font-size: 1.8rem;
    }
  }
}
nav {
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  border-top: solid 1px #ddd;
  a {
    flex: 1;
    text-align: center;
    height: 100%;
    padding: 2% 4% 4% 4%;
    color: gray;
    span {
      display: block;
      margin-bottom: 2.5%;
      font-size: 1.5rem;
    }
  }
}
.sidebar {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all .5s;
  background-color: rgba(0, 0, 0, 0);
  .con {
    width: 75%;
    height: 100%;
    float: left;
    transition: all .5s;
    transform: translateX(-100%);
    background-color: #fff;
    .via {
      width: 100%;
      height: 22%;
      background-color: #fb7299;
      padding-top: 8%;
      padding-left: 6%;
      position: relative;
      .via-head {
        width: 25%;
        border-radius: 50%;
        border: solid 2px #fff;
        height: 52%;
        z-index: 2;
        margin-bottom: 2%;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .usermessage {
        width: 100%;
        height: 19%;
        margin-bottom: 1%;
        b {
          color: #fff;
          margin-right: 1%;
        }
        span {
          border: solid 2px #fff;
          border-radius: 10%;
          color: #fff;
          margin-right: 1%;
          font-size: .5rem;
        }
        var {
          border: solid 1px #fff;
          border-radius: 10%;
          font-style: normal;
          background-color: pink;
          color: #fb7299;
          font-size: 1rem;
          padding: .5% 1%;
        }
      }
      .user-yb {
        color: pink;
      }
      .userTP {
        position: absolute;
        top: 8%;
        right: 3%;
        display: flex;
        width: 29%;
        justify-content:space-around;
        align-items:Center;
        span {
          border: solid 1.5px #fff;
          border-radius: 50%;
          // margin-right: 15%;
          color:#fff;
          padding: 6%;
          text-align: center;
        }
      }
    }
    .sidelist {
      padding: 2% 0;
      width: 100%;
      height: 69%;
      a {
        width: 100%;
        height: 10.7%;
        padding-left: 25%;
        position: relative;
        display: flex;
        justify-content:left;
        align-items:Center;
        span {
          display: flex;
          align-items:center;
          position: absolute;
          left: 9%;
        }
      }
      a:hover {
        background-color: #ddd;
        color: #fb7299;
        span{
          color: #fb7299;
        }
      }
    }
    .footbar {
      width: 100%;
      height: 9%;
      border-top: solid 1px #efefef;
      display: flex;
      a {
        flex: 1;
        align-self: center;
        // height: 100%;
        text-align: center;
        span{
          border:solid 1px;
          padding: 5% 6%;
          margin-right: 5%;
          border-radius: 50%;
        }
      }
    }
  }
  .hide {
    width: 25%;
    height: 100%;
    float: right;
  }
}
.sidebar.active{
  background-color: rgba(0, 0, 0, 0.5);
}
.con.active{
  transform: translateX(0);
}
</style>


