<template>
  <div class="about">
    <p>前端</p>
    <mint-cell title="vue、mint-ui、webpack"></mint-cell>
    <p>服务端</p>
    <mint-cell title="Node、express、socket.io"></mint-cell>
    <p>数据库</p>
    <mint-cell title="MySQL"></mint-cell>
    <p>工具</p>
    <mint-cell title="VScode、Navicat、git"></mint-cell>
    <xxp-menu/>
  </div>
</template>

<script>
import { Cell } from 'mint-ui';
import Menu from './Menu';

export default {
  name: 'about',
  components: {
    'xxp-menu': Menu,
    'mint-cell': Cell
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
