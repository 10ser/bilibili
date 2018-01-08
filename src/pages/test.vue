<template>
  <div>
    <div class="nav">
        <mt-button  type="default" v-for="n in 3" :key="n" @click="test(n)">tab{{n}}</mt-button>
    </div>
    <div class="page-tab-container" >
        <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" title="tab-container 1" :key="n">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" title="tab-container 2" :key="n">{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" title="tab-container 3" :key="n">{{n}}</mt-cell>
        </mt-tab-container-item>
        </mt-tab-container>
    </div>
  </div>
</template>
<script>
  export default {
    // name: 'page-tab-container',
    data () {
      return {
        active: 'tab-container1'
      }
    },
    methods: {
      test (id) {
        this.active = 'tab-container' + (id)
        console.log(this.active)
      }
    }
  }
</script>