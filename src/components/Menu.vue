<template>
  <div id="xxp-menu">
    <div class="tab-bottom">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home" href="#/">
          <i slot="icon" class="iconfont f_s24">&#xe600;</i>
          首页
        </mt-tab-item>
        <mt-tab-item id="essay" href="#/essay">
          <i slot="icon" class="iconfont f_s24">&#xe603;</i>
          文章
        </mt-tab-item>
        <mt-tab-item id="find" href="#/find">
          <i slot="icon" class="iconfont f_s24">&#xe604;</i>
          发现
        </mt-tab-item>
        <mt-tab-item id="about" href="#/about">
          <i slot="icon" class="iconfont f_s24">&#xe601;</i>
          关于
        </mt-tab-item>
        <mt-tab-item id="my" href="#/my">
          <i slot="icon" class="iconfont f_s24">&#xe602;</i>
          我
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'

export default {
  name: 'xxp-menu',
  components: {
    'mt-tabbar': Tabbar, 'mt-tab-item': TabItem
  },
  data () {
    let wlh = window.location.hash;
    return {
      selected: wlh.substring(2, wlh.length) || 'home'
    }
  },
  methods: {
    
  }
}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id："169033" */
  src: url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.eot');
  src: url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.eot') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_h5et0ney0yg5jyvi.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

.tab-bottom{
  position:fixed;
  left:0px;
  right:0px;
  bottom:0px;
}
</style>
