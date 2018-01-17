<template>
  <div class="home">
      <div class="main">
        <div class="navlist">  
              <a href="###"  @click="changeActive(1)" :class="{'white': active === 'conlistr1'}">直播</a>
              <a href="###"  @click="changeActive(2)" :class="{'white': active === 'conlistr2'}">推荐</a>
              <a href="###"  @click="changeActive(3)" :class="{'white': active === 'conlistr3'}">追番</a>
              <a href="###"  @click="changeActive(4)" :class="{'white': active === 'conlistr4'}">影视</a>
              <a href="###"  @click="changeActive(5)" :class="{'white': active === 'conlistr5'}">专栏</a>
              <span ref="span1" :class="{'span2':active === 'conlistr2','span3':active === 'conlistr3','span4':active === 'conlistr4','span5':active === 'conlistr5'}"></span>
        </div> 
        <div class="conlist" >
          <mt-tab-container v-model="active" swipeable>
            <mt-tab-container-item id="conlistr1" class="contentlist zhibo">
              <div class="lists">
                <div class="search">
                  <input  type="text" placeholder="搜索房间或主播"/>
                  <span class="iconfont icon-sousuo"></span>
                </div>
                <div class="banner">
                  <mt-swipe :auto="2000" :stopPropagation = "true">
                    <mt-swipe-item><img src="/static/images/banner1.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner2.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner3.jpeg" alt=""></mt-swipe-item>
                  </mt-swipe>
                </div>
                <div class="zhibolist">
                  <a href="###"><span class="iconfont icon-focuson"></span>关注</a>
                  <a href="###"><span class="iconfont icon-yule"></span>娱乐</a>
                  <a href="###"><span class="iconfont icon-huodong"></span>游戏</a>
                  <a href="###"><span class="iconfont icon-youxi"></span>手游</a>
                  <a href="###"><span class="iconfont icon-kuaididan"></span>绘画</a>
                </div>
                <div class="Comlist">
                  <div class="comtitle">
                      <div class="title-one"><span class="iconfont icon-zhibo"></span>推荐主播</div>
                      <div class="title-two"><span class="iconfont icon-moreinfo-copy"></span>当前1023个主播，进去看看</div>
                  </div>
                  <div class="comlis">
                      <ul>
                        <li @click.prevent="tolivepage">
                          <div class="imgs"><img src="/static/images/banner2.jpeg" alt="" ><span>主播名称</span></div>
                          <div class="content">
                            <p>直播内容叙述</p>
                            <span class="span1">直播类型</span>
                            <span class="span2"><i class="iconfont icon-renshu"></i>6666</span>
                          </div>
                        </li>
                        <li>
                          <div class="imgs"><img src="/static/images/banner1.jpeg" alt="" ><span>主播名称</span></div>
                          <div class="content">
                            <p>直播内容叙述撒口红的就撒欢的卡号是大家哈大客吉哈德看韩剧</p>
                            <span class="span1">直播类型</span>
                            <span class="span2"><i class="iconfont icon-renshu "></i>6666</span>
                          </div>
                        </li>
                        <li>
                          <div class="imgs"><img src="/static/images/banner1.jpeg" alt="" ><span>主播名称</span></div>
                          <div class="content">
                            <p>直播内容叙述撒口红的就撒欢的卡号是大家哈大客吉哈德看韩剧</p>
                            <span class="span1">直播类型</span>
                            <span class="span2"><i class="iconfont icon-renshu "></i>6666</span>
                          </div>
                        </li>
                      </ul>
                      <div class="change"><button>点击换一批<span class="iconfont icon-shuaxin"></span></button></div>
                    </div>
                  </div>
                  <div class="all">全部直播</div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="conlistr2" class="contentlist tuijian">
              <div class="lists">
                <div class="tjnav">
                  <div class="nav-left">
                    <a href="###">综合</a>
                    <a href="###">一月新番</a>
                  </div>
                  <div class="nav-right">
                    <a><span class="iconfont icon-tubiao1tianjiashuqian"></span>标签</a>
                    <a><span class="iconfont icon-paixing"></span>排行榜</a>
                  </div>
                </div>
                <div class="tjlis">
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
                        <p>直播内容叙述</p>
                        <span class="span1">直播类型~相关</span>
                        <span class="span2 iconfont icon-gengduo1"></span>
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
                        <p>直播内容叙厦大和钓手打的啊啥都爱好都is啊活动啊啥都啊实打实</p>
                        <span class="span1">直播类型~相关</span>
                        <span class="span2 iconfont icon-gengduo1"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="conlistr3" class="contentlist zhuifan">
              <div class="lists">
               <div class="zfbtns">
                 <div class="fjbtn btn">
                   <span class="iconfont icon-fanju"></span>番剧
                 </div>
                 <div class="gcbtn btn">
                   <span class="iconfont icon-guochuang"></span>国创
                 </div>
               </div>
               <div class="zfnav">
                 <a href="###"><span class="iconfont icon-dianping"></span>点 评</a><b></b>
                 <a href="###"><span class="iconfont icon-shijianbiao"></span>时间表</a><b></b>
                 <a href="###"><span class="iconfont icon-suoyin"></span>索 引</a>
               </div>
               <div class="zflists">
                 <div class="lists-title">
                   <span href="###"><b class="iconfont icon-xing1"></b>我的番剧</span>
                   <span>查看全部&gt;</span>
                 </div>
                 <div class="zflis">
                   <ul>
                     <li>
                       <div class="pic"><img src="/static/images/fm.jpg" alt="" srcset=""></div>
                       <div class="fjname">一人之下 第二季</div>
                       <div class="fjnum">更新至第10话</div>
                     </li>
                     <li>
                       <div class="pic"><img src="/static/images/fm.jpg" alt="" srcset=""></div>
                       <div class="fjname">一人之下 第二季</div>
                       <div class="fjnum">更新至第10话</div>
                     </li>
                     <li>
                       <div class="pic"><img src="/static/images/fm.jpg" alt="" srcset=""></div>
                       <div class="fjname">一人之下 第二季</div>
                       <div class="fjnum">更新至第10话</div>
                     </li>
                   </ul>
                 </div>
                 <div class="fjbanner">
                     <div class="fj-banner"><img src="/static/images/timgbanner.jpg" alt="" srcset=""></div>
                     <div class="banner-con">
                       <div class="banner-name">广告的详情描述</div>
                       <div class="banner-jj">广告的简单介噜嘟哩度督噜督噜督拉肚肚都拉肚肚都拉肚肚都拉肚肚的路堵得拉肚肚都拉肚肚都拉肚肚都拉肚</div>
                     </div>
                 </div>
               </div>
               <listcom />               
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="conlistr4" class="contentlist yinshi">
              <div class="lists">
                <div class="ys-banner">
                   <mt-swipe :auto="2000" :stopPropagation = "true" >
                    <mt-swipe-item><img src="/static/images/banner1.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner2.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner3.jpeg" alt=""></mt-swipe-item>
                  </mt-swipe>
                </div>
                <div class="ys-nav">
                  <a href="###"><span class="iconfont icon-jingyu"></span>纪录片</a>
                  <a href="###"><span class="iconfont icon-glasses"></span>电影</a>
                  <a href="###"><span class="iconfont icon-dianshiju"></span>电视剧</a>
                  <a href="###"><span class="iconfont icon-pot"></span>国家宝藏</a>
                </div>
                <div class="ys-lists-one">
                  <div class="yslis-title">
                   <span><b class="iconfont icon-bilibili_"></b>正在热播</span>
                   <span><var class="iconfont icon-paixing"></var>排行榜</span>
                  </div>
                  <div class="ys-lis">
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
                          <p>直播内容叙述</p>
                          <span class="span1">直播类型~相关</span>
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
                          <p>直播内容叙述</p>
                          <span class="span1">直播类型~相关</span>
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
                          <p>直播内容叙述</p>
                          <span class="span1">直播类型~相关</span>
                        </div>
                    </li>
                    </ul>
                  </div>
                </div>
                <div class="ys-lists-two">
                  <div class="yst-title">
                    <span><b class="iconfont icon-bilibili_"></b>独家策划</span>
                  </div>
                  <div class="yst-lis">
                    <ul>
                      <li>
                        <div class="yst-img"><img src="/static/images/banner1.jpeg" alt="" srcset=""></div>
                        <div class="yst-con">
                          <p>banner显示标题</p>
                          <span>banner简单介绍</span>
                        </div>
                      </li>
                      <li>
                        <div class="yst-img"><img src="/static/images/banner1.jpeg" alt="" srcset=""></div>
                        <div class="yst-con">
                          <p>banner显示标题</p>
                          <span>banner简单介绍</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="conlistr5" class="contentlist zhuanlan">
              <div class="lists">
                <div class="zl-banner">
                   <mt-swipe :auto="2000" :stopPropagation = "true" >
                    <mt-swipe-item><img src="/static/images/banner1.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner2.jpeg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="/static/images/banner3.jpeg" alt=""></mt-swipe-item>
                  </mt-swipe>
                </div>
                <div class="zl-nav">
                  <a href="###"><span class="iconfont icon-guangpan"></span>动画</a>
                  <a href="###"><span class="iconfont icon-youxizhongxin"></span>游戏</a>
                  <a href="###"><span class="iconfont icon-dianying-"></span>轻小说</a>
                  <a href="###"><span class="iconfont icon-icon"></span>科技</a>
                  <a href="###"><span class="iconfont icon-qita-copy"></span>其他</a>
                </div>
                
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
        <div class="zhibobtn" v-if="active === 'conlistr1' "><span>我 要 直 播</span></div>
      </div>
      <TabBar />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar/TabBar'
import Listcom from '@/components/Listcom'
export default {
  components: {
    TabBar,
    Listcom
  },
  data () {
    return {
      active: 'conlistr1',
      tjactive: 'tjconlistr1'
    }
  },
  methods: {
    changeActive (index) {
      this.active = 'conlistr' + index
    },
    tolivepage () {
      this.$router.push('/livepage')
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  height: 90%;
  overflow-y: hidden;
  .navlist{
    width: 100%;
    height: 3rem;
    padding: 0 1%;
    background-color: #fb7299;
    overflow: auto;
    // display: flex;
    // align-items: center;
    position: relative;
    a{
      // flex: 1;
      width: 18%;
      margin: 0 1%;
      float: left;
      height: 98.5%;
      // align-self: center;
      text-align: center;
      position: relative;
      padding: 2.5% 0 0 0;
      color: #e6e6e6;
      display: block;
      // border-bottom: 2px solid;
    }
    .white{
      color: #fff;
    }
    span{
      border: 1.5px solid;
      display: block;
      position: absolute;
      color: #fff;
      width: 18%;
      border-radius: 10%;
      bottom: 0;
      transition: all 0.3s;
      transform: translateX(5%);
    }
    .span2{transform: translateX(112.5%);}
    .span3{transform: translateX(220%);}
    .span4{transform: translateX(330%);}
    .span5{transform: translateX(440%);}
  }
  .conlist{
    width: 100%;
    height: 100%;
    overflow: scroll;
    position: relative;
    .contentlist{
        width: 100%;
        height: 100%;
        .lists{
          width: 100%;
          height: 100%;
        }
      }
    .zhibo{
      padding: 0 2.8% 25% 2.8%;
      .search{
        width: 100%;
        padding: 3% 0;
        position: relative;  
        input{
          width: 100%;
          padding: 1.2% 9%;
          border-radius: 5%;
          background-color: #ddd;
          border: none;
          font-size: 1rem;
        }
        span{
          position: absolute;
          top: 50%;
          left: 3%;
          transform: translateY(-50%);
          font-size: 1rem;
        }
      }
      .banner{
        width: 100%;
        height: 12rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .zhibolist{
        width: 100%;
        height: 14%;
        background-color: #fff;
        display: flex;
        a{
          flex: 1;
          width: 20%;
          text-align: center;
          padding: 2.8%;
          span{
            display: block;
            margin: auto;
            font-size: 1.8rem;
            margin-bottom: 5%;
          }
        }
      }
      .Comlist{
        margin-top: 1.5%;
        width: 100%;
        padding: 0 2.8%;
        overflow: auto;
        background-color: #efefef;
        .comtitle{
          width: 100%;
          overflow: auto;
          padding: 1.5% 0;
          .title-one{
            float: left;
            white-space: nowrap;
            span{
              margin-right: 5%;
              color:pink;
            }
          }
          .title-two{
            float: right;
            white-space: nowrap;
            span{
              float: right;
              color: gray;
            }
          }
        }
        .comlis{
          width: 100%;
          ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            overflow: auto;
            flex-wrap: wrap;          
            li{
            width: 48%;
            margin-bottom: 3%;
            background-color: #fff;
            border-radius: 5%;
            height: 14rem;
            .imgs{
              width: 100%;
              height: 55%;
              overflow: auto;
              border-radius: 5%;
              position: relative;
              overflow-y: hidden;
              img{
                width: 100%;
                height: 100%;
              }
              span{
                color: #fff;
                position: absolute;
                left: 5%;
                bottom: 5%;
                font-weight: bold;
                font-size: 1.2rem;
                // width: 100%;
                // background-color: rgba(0, 0, 0, 0.3)
              }
            }
            .content{
              width: 100%;
              height: 45%;
              p{
                width: 100%;
                height: 57%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                padding: 6% 4%;
              }
              span{
                color: #999;
                padding: 5%;
                i{
                  margin-right: 5%;
                }
              }
              .span1{float: left;}
              .span2{float: right;}
            }
            }
          }
          .change{
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 1% 0 2% 0;
            button{
              width: 33%;
              border: solid 1px #fb7299;
              border-radius: 25px;
              cursor: none;
              padding: 2%;
              color: #fb7299;
            }
          }
        }
      }
      .all{
        width: 94%;
        height: 10%;
        border-radius: 5%;
        text-align: center;
        border:solid 1px #999;
        padding: 3% 0;
        margin: 0 3% 2%;
      }
    }
    .tuijian{
      padding: 0 0 25% 0;
      .tjnav{
        width: 100%;
        height: 2.5rem;
        padding: 0 2.8%;
        border-bottom: solid 1px #999;
        overflow: auto;
        a{
            display: inline-block;
            margin: 0 2%;
            height: 100%;
            line-height: 2.4rem;
            color: #999;
        }
        .nav-left{
          float: left;
          width: 65%;
          a:hover{color: #fb7299;}
        }
        .nav-right{
          width: 35%;
          float: right;
          a{float: right;width: 45%;text-align: center;}
          span{color: #fb7299;margin:0 1%;font-size: 1.5rem;}
        }
      }
      .tjlis{
        width: 100%;
        padding: 2% 2.8%;
        ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: auto;
          flex-wrap: wrap;
          li{
            width: 48%;
            margin-bottom: 3%;
            background-color: #fff;
            border-radius: 5%;
            height: 14rem;
            .imgs{
              width: 100%;
              height: 60%;
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
              height: 40%;
              p{
                width: 100%;
                height: 57%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 5% 4%;
              }
              span{
                color: #999;
                padding: 5%;
                i{
                  margin-right: 5%;
                }
              }
              .span1{float: left;}
              .span2{float: right;}
            }
          }
        }
      }
    }
    .zhuifan{
      padding: 0 0 25% 0;
      .zfbtns{
        width: 100%;
        height: 5rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: solid 1px #ddd;
        .btn{
          width: 30%;
          height: 3rem;
          border-radius: 25px;
          color: #fff;
          font-size: 1.3rem;
          line-height: 3rem;
          text-align: center;
          span{font-size: 2rem;margin-right: 7%;}
        }
        .gcbtn{background-color: orangered;}
        .fjbtn{background-color: skyblue;}
      }
      .zfnav{
        width: 100%;
        height: 3rem;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow-y: hidden;
        a{
          width: 33%;
          height: 3rem;
          line-height: 3rem;
          text-align: center;
          span{margin-right: 3%;}
        }
        b{height: 3rem;width: 3px;color: #000;}
      }
      .zflists{
        width: 100%;
        margin-top: .8rem;
        background-color: #fff;
        padding: 0 2.5%; 
        .lists-title{
          width: 100%;
          overflow: auto;
          height: 3rem;
          line-height:3rem;
          span:first-child{float: left;width:30%;font-size:1.2rem;b{margin-right: 5%;color: coral;}}
          span:last-child{float: right;color: #999;}
        }
        .zflis{
          width: 100%;
          overflow: auto;
          ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
            // align-items: center;
            li{
              width: 32%;
              padding: 2% 0;
              .pic{
                width: 100%;
                height: 13rem;
                margin-bottom: 2%;
                img{
                  width: 100%;
                  height: 100%;
                }
              }
              .fjnum{color: #999;margin-top: 3%;}
            }
          }
        }
        .fjbanner{
          padding-bottom: 2%;          
          .fj-banner{
            width: 100%;
            height: 10rem;
            img{
              width: 100%;
              height: 100%;;
              border-radius: 5px;
            }
          }
          .banner-con{
            width: 100%;
            padding: 0 3%;
            background-color: #efefef;
            border-radius: 5px;
            .banner-name{padding: 2%;font-size: 1.1rem;}
            .banner-jj{
              padding: 2% 0;
              color: #999;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
          }
        }
      }
    }
    .yinshi{
      padding: 0 0 25% 0;
      .ys-banner{
        background-color: #fff;
        padding: 3% 2.5% 3% 2.5%;
        width: 100%;
        height: 11rem;
        img{width: 100%;height: 100%;border-radius: 10px;}
      }
      .ys-nav{
        width: 100%;
        background-color: #fff;
        display: flex;
        a{
          flex: 1;
          width: 20%;
          text-align: center;
          padding: 2%;
          span{
            display: block;
            margin: auto;
            font-size: 1.8rem;
            margin-bottom: 5%;
          }
        }
      }
      .ys-lists-one{
        width: 100%;
        margin-top: .8rem;
        background-color: #fff;
        padding: 0 2.5%; 
        .yslis-title{
          width: 100%;
          overflow: auto;
          height: 3rem;
          line-height:3rem;
          span:first-child{float: left;width:30%;font-size:1.1rem;b{margin-right: 5%;color: coral;}}
          span:last-child{float: right;color: #fb7299;width:18%;var{margin-right: 5%;}}
        }
        .ys-lis{
         width: 100%;
         ul{
          width: 100%;
          display: flex;
          justify-content: space-between;
          overflow: auto;
          flex-wrap: wrap;
          padding-bottom: 2%;
          li{
            width: 48%;
            background-color: #fff;
            border-radius: 5%;
            height: 12rem;
            margin-bottom: 2%;
            .imgs{
              width: 100%;
              height: 70%;
              overflow: auto;
              border-radius: 10px;
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
                  right: 4%;
                  bottom: 2%;
                }
              }
            }
            .content{
              width: 100%;
              height: 30%;
              p{
                width: 100%;
                height: 50%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 2% 4%;
              }
              span{
                color: #999;
                padding: 2% 4%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                i{ margin-right: 5%;}
              }
              .span1{float: left;}
            }
          }
         }
        }
      }
      .ys-lists-two{
        width: 100%;
        margin-top: .8rem;
        background-color: #fff;
        padding: 0 2.5%; 
        .yst-title{
          width: 100%;
          overflow: auto;
          height: 3rem;
          line-height:3rem;
          span:first-child{float: left;width:30%;font-size:1.1rem;b{margin-right: 5%;color: coral;}}
        }
        .yst-lis{
          width: 100%;
          li{
            width: 100%;
            padding-bottom: 2%;
            .yst-img{
              width: 100%;
              height: 10rem;;
              img{width: 100%;height: 100%;border-radius: 10px;}
            }
            .yst-con{
              width: 100%;
              p{
                padding: 0.5% 1%;
                font-size: 1.1rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
              }
              span{
                padding: 1%;
                color: #999;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .zhuanlan{
      padding: 0 0 25% 0;
      .zl-banner{
        padding: 3% 2.5% 3% 2.5%;
        width: 100%;
        height: 11rem;
        img{width: 100%;height: 100%;border-radius: 10px;}
      }
      .zl-nav{
        width: 100%;
        display: flex;
        padding-bottom: 2%;
        border-bottom: solid 2px #dddddd;
        a{
          flex: 1;
          width: 20%;
          text-align: center;
          padding: 2%;
          span{
            display: block;
            margin: auto;
            font-size: 2rem;
            margin-bottom: 5%;
          }
        }
      }
    }
  }
  .zhibobtn{
    width: 5rem;
    height: 5rem;
    position: fixed;
    background-color: #fb7299;
    color: #fff;
    right: 6%;
    bottom: 12%;
    z-index: 5;
    border-radius: 50%;
    // text-overflow: ellipsis;
    // padding: 2.2% 3.1%;
    font-size: 1.2rem;
    span{
      display: block;
      height: 3rem;
      width: 3rem;
      text-align: center;
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>

