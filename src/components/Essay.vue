<template>
  <div class="essay">
    <mint-loadmore :topMethod="loadTop" :bottomMethod="loadBottom" :bottomAllLoaded="true" ref="loadmore">
      <mint-cell v-for="item in list" v-bind:title="item.title" is-link @click.native="skipEssayDetail(item.id)">
        <span slot="icon" class="dotList" v-if="!judgeRead(item.id)"></span>
        <span slot="icon" class="dotList read" v-if="judgeRead(item.id)"></span>
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
    documentTitle('文章列表');
    this.getEssayList();
  },
  methods: {
    loadTop(id) {
      this.$refs.loadmore.onTopLoaded(id)
    },
    loadBottom(id) {
    },
    //判断是否已读
    judgeRead(id){
      let readList = localStorage.getItem("essayEeadList");
      if(!readList || (readList && readList.indexOf(','+id+',') < 0)){
        return false;
      }else{
        return true;
      }
    },
    //跳转
    skipEssayDetail(id){
      let readList = localStorage.getItem("essayEeadList");
      if(!readList || (readList && readList.indexOf(','+id+',') < 0)){
        localStorage.setItem("essayEeadList", readList + ','+id+',');
      }
      this.$router.push({ name: 'EssayDetail', params: {id: id} });
    },
    //获取文章列表
    getEssayList() {
      let that = this;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      let res = essay.getEssayList().then(res =>{
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
    width: 8px;
    height: 8px;
    display: inline-block;
  }
  .read{
    background: #ccc;
  }
</style>
