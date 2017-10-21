<template>
  <div class="find">
    <div class="img_div">
      <img src="./../assets/123.jpg" alt="" width="320"/>
      <p>未发现好东东</p>
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
  methods: {},
  data () {
    return {
      list: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_div{
    text-align:center;
    margin-top:20px;
  }
  .img_div > p {
    font-size:18px;
    color:#999;
    margin-top:20px;
  }
</style>
