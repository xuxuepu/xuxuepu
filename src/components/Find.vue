<template>
  <div class="find">
    <mt-header title="发现"></mt-header>
    <div class="img_div">
      <img src="./../assets/123.jpg" alt="" width="320"/>
      <p>未发现好东东</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

export default {
  name: 'find',
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
