<template>
  <div class="essaydetail">
    <sfc-header title="文章详情">
      <router-link to="/essay" slot="left">
        <sfc-button icon="back">返回</sfc-button>
      </router-link>
    </sfc-header>
  </div>
</template>

<script>
import { Header, Loadmore, Cell, Popup } from 'sfc-ui'

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
    'sfc-header': Header, 'sfc-loadmore': Loadmore, 'sfc-cell': Cell, 'sfc-popup': Popup
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
