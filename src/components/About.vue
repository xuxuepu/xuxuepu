<template>
  <div class="about">
    <sfc-header title="关于网站"></sfc-header>
    <p>前端</p>
    <sfc-cell title="vue、sfc-ui、webpack"></sfc-cell>
    <p>服务端</p>
    <sfc-cell title="Node、express、socket.io"></sfc-cell>
    <p>数据库</p>
    <sfc-cell title="MySQL"></sfc-cell>
    <p>工具</p>
    <sfc-cell title="WebStorm、Navicat、git"></sfc-cell>
  </div>
</template>

<script>
import { Header, Cell } from 'sfc-ui'

export default {
  name: 'about',
  components: {
    'sfc-header': Header, 'sfc-cell': Cell
  },
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
