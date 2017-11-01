<template>
  <div id="xxp-menu">
    <div style="height: 55px;"></div>
    <div class="tab-bottom">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home" @click.native="clickMeun('Home')">
          <i slot="icon" class="iconfont f_s24">&#xe64e;</i>
          首页
        </mt-tab-item>
        <mt-tab-item id="essay" @click.native="clickMeun('Essay')">
          <i slot="icon" class="iconfont f_s24">&#xe8b8;</i>
          文章
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="clickMeun('Find')">
          <i slot="icon" class="iconfont f_s24">&#xe608;</i>
          发现
        </mt-tab-item>
        <mt-tab-item id="about" @click.native="clickMeun('About')">
          <i slot="icon" class="iconfont f_s24">&#xe714;</i>
          关于
        </mt-tab-item>
        <mt-tab-item id="my" @click.native="clickMeun('My')">
          <i slot="icon" class="iconfont f_s24">&#xe600;</i>
          胖墩
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
    clickMeun(key){
      window.scrollTo(0, 0);
      let that = this;
      that.$router.push({ name: key });
    }
  }
}
</script>

<style>

.tab-bottom{
  position:fixed;
  left:0px;
  right:0px;
  bottom:0px;
}
</style>
