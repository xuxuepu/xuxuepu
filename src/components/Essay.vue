<template>
  <div class="essay">
    <mint-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <mint-cell v-for="item in list" v-bind:title="item.title" is-link href="#/essay/detail">
        <img slot="icon" src="./../assets/123.jpg" width="32" height="32">
      </mint-cell>
    </mint-loadmore>
  </div>
</template>

<script>
import { Loadmore, Cell } from 'mint-ui';
import { essay } from './../service';

export default {
  name: 'essay',
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
    'mint-loadmore': Loadmore, 'mint-cell': Cell
  },
  data () {
    return {
      list: []
    }
  },
  created() {
    this.getEssayList();
  },
  methods: {
    getEssayList() {
      let that = this;
      /*console.log(essay);
      essay.getEssayList(null, null, (req)=>{
        if(!req.code){
            that.$data.list = req.data
          }else{

          }
      });*/
      that.$http({
          method: "GET",
          url: "https://service.xuxuepu.com/api/essay/list"
        })
        .then(
          response => {
            that.$data.list = response.data.data
          },
          error => {
            
          }
        );
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    border-radius:7px;padding:10px 10px 10px 0;
  }
</style>
