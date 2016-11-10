<template>
  <div class="home">
    <mt-header title="胖墩 - 胖子的神奇生涯">
      <router-link to="/" slot="left">
        <img src="http://7xk0ie.com1.z0.glb.clouddn.com/123.jpg/min100" width="24" height="24" alt="" style="border-radius:3px;"/>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="banner_div">
      <mt-swipe :auto="4000">
        <mt-swipe-item><div class="banner_item1"></div></mt-swipe-item>
        <mt-swipe-item><div class="banner_item2"></div></mt-swipe-item>
        <mt-swipe-item><div class="banner_item3"></div></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Search, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Search.name, Search)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  name: 'home',
  methods: {
    onFlipped: function () {
      console.log('sdf')
    }
  },
  data () {
    return {
      selected: 'home',
      value: 'adfsdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner_div{
    height:200px;
  }
  .banner_item1,.banner_item2,.banner_item3{
    height:100%;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
  }
  .banner_item1{
    background-image:url(../assets/my_bg.jpg);
  }
  .banner_item2{
    background-image:url(../assets/my_bg.jpg);
  }
  .banner_item3{
    background-image:url(../assets/my_bg.jpg);
  }
</style>
