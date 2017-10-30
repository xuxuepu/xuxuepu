<template>
  <div class="find">
    <div class="img_div">
      <i slot="icon" class="iconfont" style="color:#ccc;font-size:120px;">&#xe6ae;</i>
      <p>更多功能正玩命开发中...</p>
    </div>
    <xxp-menu/>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  name: 'find',
  components: {
    'xxp-menu': Menu,
  },
  created() {
    documentTitle('发现更多');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_div{
    text-align:center;
    margin-top:120px;
  }
  .img_div > p {
    font-size:18px;
    color:#999;
    margin-top:20px;
  }
</style>
