<template>
  <div class="essay">
    <mt-header title="文章"></mt-header>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <mt-cell v-for="item in list" title="1、胖子的奋斗生涯" label="也许不是最感动人心的故事，但呵呵呵！！！..." is-link></mt-cell>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'essay',
  methods: {
    loadTop (id) {
      this.$refs.loadmore.onTopLoaded(id)
    }
  },
  data () {
    return {
      list: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    border-radius:7px;padding:10px 10px 10px 0;
  }
</style>
