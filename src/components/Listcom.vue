<template>
  <div class="dplists">
    <div class="dptitle">
      <span><b class="iconfont icon-xing1"></b>{{listname}}</span>
      <span>查看全部&gt;</span>
    </div>
    <div class="dplis">
      <ul>
        <li>
          <div class="dp-name">点评的标题总览</div>
          <div class="dp-img"><img src="/static/images/fm.jpg" alt="" srcset=""></div>
          <div class="dp-con">点评的主要内容：会感受到并参考上一条无法思考层面徐小凤社团法人女女变得非常的轮廓分明常发股份</div>
          <div class="dp-user">
            <div class="dp-head"><img src="/static/images/timg.1.jpg" alt="" srcset=""></div>
            <div class="dp-username">用户名</div>
            <div class="dp-time">xx小时前</div>
            <div class="dp-pl"><span class="iconfont icon-pinglun"></span>99</div>
            <div class="dp-zan"><span class="iconfont icon-praise"></span>99</div>
          </div>
        </li>
        <li>
          <div class="dp-name">点评的标题总览</div>
          <div class="dp-img"><img src="/static/images/fm.jpg" alt="" srcset=""></div>
          <div class="dp-con">点评的主要内容：会感受到并参考上一条无法思考层面徐小凤社团法人女女变得非常的轮廓分明常发股份</div>
          <div class="dp-user">
            <div class="dp-head"><img src="/static/images/timg.1.jpg" alt="" srcset=""></div>
            <div class="dp-username">用户名</div>
            <div class="dp-time">xx小时前</div>
            <div class="dp-pl"><span class="iconfont icon-pinglun"></span>99</div>
            <div class="dp-zan"><span class="iconfont icon-praise"></span>99</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['listname', 'classname']
}
</script>
<style lang="less" scoped>
// .box{
//   position: absolute;
//   top:0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #efefef;
//   overflow-y:scroll;
//   font-size: 1rem;
// }
.dplists{
  width: 100%;
  margin-top: .8rem;
  background-color: #fff;
  // padding: 0 2.5%; 
  .dptitle{
    width: 100%;
    overflow: auto;
    height: 3rem;
    line-height:3rem;
    padding: 0 2.5%; 
    span:first-child{float: left;width:30%;font-size:1.2rem;b{margin-right: 5%;color: coral;}}
    span:last-child{float: right;color: #999;}
  }
  .dplis{
    width: 100%;
    overflow: hidden;
    ul{
      width: 100%;
      overflow: auto;
      li{
        border-bottom: solid 1px #999;
        padding: 2% 2.5%;
        overflow: auto;
        .dp-name{
          font-size: 1.1rem;
          padding: 1% 0 2% 2%;
          width: 82%;
          float: left;
          font-weight: bold;
        }
        .dp-con{
          color: #999;
          float: left;
          width: 82%;
          padding: 0% 0 2% 2%;
        }
        .dp-img{
          width: 17%;
          float: right;
          img{width: 100%;height: 100%;border-radius: 5px;}
        }
        .dp-user{
          position: relative;
          width: 100%;
          float: left;
          height: 3rem;
          line-height: 3rem;
          padding-left: 10%;    
          div{
            display: inline-block;
            line-height: 3rem;    
          }
          .dp-head{
            width: 2rem;
            height: 2rem;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            img{width: 100%;height: 100%;border-radius: 50%;}
          }
          .dp-time{margin-left: 3%;}
          .dp-zan,.dp-pl{
            width: 15%;
            margin: 0 2%;
            float: right;
            span{padding: 0 10%;}
          }
        }
      }
    }
  }
}
</style>

