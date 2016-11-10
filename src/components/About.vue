<template>
  <div class="about">
    <mt-header title="关于网站"></mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'

Vue.component(Header.name, Header)

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

</style>
