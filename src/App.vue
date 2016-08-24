<template>
  <div>
	  <tabbar>
		<tabbar-item>
		  <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_button.png">
		  <span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item show-dot>
		  <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_msg.png">
		  <span slot="label">图片</span>
		</tabbar-item>
		<tabbar-item selected>
		  <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
		  <span slot="label">简介</span>
		</tabbar-item>
		<tabbar-item selected>
		  <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_article.png">
		  <span slot="label">联系</span>
		</tabbar-item>
		<tabbar-item>
		  <img slot="icon" src="https://o84lhz5xo.qnssl.com/master/src/assets/demo/icon_nav_cell.png">
		  <span slot="label">关于</span>
		</tabbar-item>
	  </tabbar>
	</div>
</template>

<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'
import Tabbar from 'vux/dist/components/tabbar'
import TabbarItem from 'vux/dist/components/tabbar-item'

export default {
  components: {
    Group, Cell, Tabbar, TabbarItem
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>
