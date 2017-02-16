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
    <div class="imgs_div">
      <div v-for="item in imgs">
        <ul>
          <li class="li1">{{item.str}}</li>
          <li><img v-bind:src="item.src" alt=""/></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import config from '../util/config'
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
      value: 'adfsdf',
      imgs: [{str: '鱿鱼卷一锅炖', src: config.qiniu_path + '/1.jpg'},
      {str: '这是牛肉还是羊肉？', src: config.qiniu_path + '/2.jpg'},
      {str: '不晓得什么东东', src: config.qiniu_path + '/3.jpg'},
      {str: '撸串', src: config.qiniu_path + '/4.jpg'},
      {str: '白萝卜红萝卜...', src: config.qiniu_path + '/5.jpg'},
      {str: '貌似是红烧鱼啥的', src: config.qiniu_path + '/6.jpg'},
      {str: '不晓得哪里的肉圈', src: config.qiniu_path + '/7.jpg'},
      {str: '红烧猪蹄', src: config.qiniu_path + '/8.jpg'},
      {str: '烧鸭叉烧双拼', src: config.qiniu_path + '/9.jpg'},
      {str: '红烧肉', src: config.qiniu_path + '/10.jpg'}]
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
    background-image:url(http://7xk0ie.com1.z0.glb.clouddn.com/a1.jpg/w.min500);
  }
  .banner_item2{
    background-image:url(http://7xk0ie.com1.z0.glb.clouddn.com/a2.jpg/w.min500);
  }
  .banner_item3{
    background-image:url(http://7xk0ie.com1.z0.glb.clouddn.com/a3.jpg/w.min500);
  }
  .imgs_div{
    overflow:hidden;
  }
  .imgs_div > div{
    float: left;
    width:50%;
    text-align:center;
  }
  .imgs_div > div > ul{
    margin:10px;
    position:relative;
  }
  .imgs_div > div img{
    width:100%;
  }
  .imgs_div > div > ul > .li1{
    position:absolute;
    background:rgba(0,0,0,.5);
    color:#fff;
    text-align:center;
    width:100%;
    bottom:2px;
    padding:5px 0;
    font-size:12px;
  }
</style>
