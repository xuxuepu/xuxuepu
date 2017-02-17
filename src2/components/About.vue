<template>
  <div class="about">
    <mt-header title="关于网站"></mt-header>
    <p>前端</p>
    <mt-cell title="vue、mint-ui、webpack"></mt-cell>
    <p>服务端</p>
    <mt-cell title="Node、express、socket.io"></mt-cell>
    <p>数据库</p>
    <mt-cell title="MySQL"></mt-cell>
    <p>工具</p>
    <mt-cell title="WebStorm、Navicat、git"></mt-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)

export default {
  name: 'about',
  methods: {
    test: function () {
      console.log('test')
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    margin:20px 10px 10px;
  }
</style>
