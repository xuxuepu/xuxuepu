<template>
  <div class="essaydetail">
    <mt-header title="文章详情">
      <router-link to="/essay" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<script>
import { Header, Loadmore, Cell, Popup } from 'mint-ui'

export default {
  name: 'essaydetail',
  methods: {
    loadTop (id) {
      this.$refs.loadmore.onTopLoaded(id)
    },
    loadBottom (id) {
    },
    allLoaded (id) {
    }
  },
  components: {
    'mt-header': Header, 'mt-loadmore': Loadmore, 'mt-cell': Cell, 'mt-popup': Popup
  },
  data () {
    return {
      popupVisible: true
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
