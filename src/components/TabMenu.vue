<template>
  <div class="tab-menu">
    <div class="tab-content">
      <home v-if="selected=='home'"></home>
      <essay v-if="selected=='essay'"></essay>
      <about v-if="selected=='about'"></about>
      <my v-if="selected=='my'"></my>
    </div>
    <div class="tab-bottom">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <i slot="icon" class="iconfont f_s24">&#xe600;</i>
          首页
        </mt-tab-item>
        <mt-tab-item id="essay">
          <i slot="icon" class="iconfont f_s24">&#xe603;</i>
          文章
        </mt-tab-item>
        <mt-tab-item id="发现">
          <i slot="icon" class="iconfont f_s24">&#xe604;</i>
          发现
        </mt-tab-item>
        <mt-tab-item id="about">
          <i slot="icon" class="iconfont f_s24">&#xe601;</i>
          关于
        </mt-tab-item>
        <mt-tab-item id="my">
          <i slot="icon" class="iconfont f_s24">&#xe602;</i>
          我
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import Home from './Home'
import Essay from './Essay'
import About from './About'
import My from './My'

export default {
  name: 'tab-menu',
  components: {
    Home, Essay, About, My
  },
  methods: {
    onFlipped: function () {
      console.log('sdf')
    }
  },
  data () {
    return {
      selected: 'home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.tab-content{
  margin-bottom:55px;
}
.tab-bottom{
  position:fixed;
  left:0px;
  right:0px;
  bottom:0px;
}
</style>
