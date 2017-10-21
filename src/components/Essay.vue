<template>
  <div class="essay">
    <mint-loadmore :topMethod="loadTop" :bottomMethod="loadBottom" :bottomAllLoaded="true" ref="loadmore">
      <mint-cell v-for="item in list" v-bind:title="item.title" is-link v-bind:to="{name: 'EssayDetail', params: {id: item.id}}">
        <span slot="icon" class="dotList"></span>
      </mint-cell>
    </mint-loadmore>
    <xxp-menu/>
  </div>
</template>

<script>
import { Loadmore, Cell, Indicator, MessageBox } from 'mint-ui';
import { essay } from './../service';
import Menu from './Menu';

export default {
  name: 'essay',
  components: {
    'xxp-menu': Menu,
    'mint-loadmore': Loadmore,
    'mint-cell': Cell
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
    loadTop(id) {
      this.$refs.loadmore.onTopLoaded(id)
    },
    loadBottom(id) {
    },
    //获取文章列表
    getEssayList() {
      let that = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      let res = essay.getEssayList({
        vueComponent: that
      }).then(res =>{
        Indicator.close();
        if(!res.code){
            that.$data.list = res.data;
        }else{
          MessageBox.alert(res.message, '胖墩提示');
        }
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dotList{
    border-radius:50%;
    background: #26a2ff;
    width: 10px;
    height: 10px;
    display: inline-block;
  }
</style>
