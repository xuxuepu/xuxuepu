<template>
  <index></index>
  <div id="app" >
    <tabbar style="position:fixed;">
      <tabbar-item selected v-link="{ path: '/index' }">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item v-link="{ path: '/index.html?m=123' }">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
        <span slot="label">图片</span>
      </tabbar-item>
      <tabbar-item v-link="/index.html">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">简介</span>
      </tabbar-item>
      <tabbar-item v-link="/index.html">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
        <span slot="label">联系</span>
      </tabbar-item>
      <tabbar-item v-link="/index.html">
        <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
        <span slot="label">关于</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from 'vux/dist/components/tabbar'
import TabbarItem from 'vux/dist/components/tabbar-item'
import Index from 'components/Index'

export default {
  components: {
    Tabbar, TabbarItem, Index
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>
