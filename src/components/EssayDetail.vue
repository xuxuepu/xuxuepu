<template>
  <div class="essaydetail">
    <mint-header title="文章详情">
      <router-link to="/essay" slot="left">
        <mint-button icon="back">返回</mint-button>
      </router-link>
    </mint-header>
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
    'mint-header': Header, 'mint-loadmore': Loadmore, 'mint-cell': Cell, 'mint-popup': Popup
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
