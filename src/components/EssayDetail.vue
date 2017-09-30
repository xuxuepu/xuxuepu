<template>
  <div class="essaydetail">
    空的
  </div>
</template>

<script>
import { Loadmore, Cell, Popup } from 'mint-ui'

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
    'mint-loadmore': Loadmore, 'mint-cell': Cell, 'mint-popup': Popup
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
