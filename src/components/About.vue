<template>
  <div class="about">
    <div class="introduce">
      一个自主研发的个人网站，纯属探索技术，包含：移动web端、PC端后台管理系统、接口服务器、数据库、CDN服务器；github地址：https://github.com/xuxuepu；欢迎喜欢技术的童鞋一起交流。
    </div>
    <p>移动前端</p>
    <mint-cell title="vue技术栈、mint-ui、webpack"></mint-cell>
    <p>PC前端</p>
    <mint-cell title="react技术栈、antd、webpack"></mint-cell>
    <p>接口服务端</p>
    <mint-cell title="Node、express、socket.io"></mint-cell>
    <p>数据库</p>
    <mint-cell title="MySQL"></mint-cell>
    <p>工具</p>
    <mint-cell title="VScode、Navicat、git、photoshop"></mint-cell>
    <p>环境</p>
    <mint-cell title="Linux、Nginx、Node、github、七牛、iconfont"></mint-cell>
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
  created() {
    documentTitle('关于网站');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p{
    margin:20px 10px 10px;
  }
  .introduce{
    background: #fff;
    padding: 20px 10px;
    font-size: 14px;
    line-height: 20px;
  }
</style>
