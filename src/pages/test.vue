<template>
  <div class="main">
    <nav>
      <a href="###" @click="go(1)">slide 1</a>
      <a href="###" @click="go(2)">slide 2</a>
      <a href="###" @click="go(3)">slide 3</a>
      <a href="###" @click="go(4)">slide 4</a>
    </nav>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper" @slideChange="callback">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'carrousel',
    data () {
      return {
        swiperOption: {
          loop: true
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      callback () {
        console.log('滑动了')
      },
      go (index) {
        this.swiper.slideTo(index, 400, false)
      }
    }
  }
</script>
<style lang="less" scoped>
nav{
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  a{
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    background-color: #999;
  }
}
.swiper{
  width: 100%;
  background-color: #fff;
  height: 200px;;
}
</style>
