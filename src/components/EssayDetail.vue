<template>
  <div class="essaydetail" v-if="detail.id">
    <div class="title">
      <div class="title-content">{{detail.title}}</div>
      <div class="title-author">
        <a href="javascript:void(0);">{{detail.author}}</a>
        <span>{{detail.create_date}}</span>
      </div>
    </div>
    <div class="content">
      <div v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui';
import { essay } from './../service';

export default {
  name: 'essaydetail',
  created(){
    document.getElementById('root_bg').style.cssText = "background-color: #fff";
    this.getEssayDetail();
  },
  beforeDestroy(){
    document.getElementById('root_bg').style.cssText = "background-color: none";
  },
  methods: {
    //获取文章详情
    getEssayDetail(){
      let that = this;
      let id = this.$route.params.id;
      if(id){
        let that = this;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        let res = essay.getEssayDetail({
          id: id
        }).then(res =>{
          Indicator.close();
          if(!res.code){
              that.$data.detail = res.data;
              documentTitle(res.data.title);
          }else{
            MessageBox.alert(res.message, '胖墩提示');
          }
        });
      }
    }
  },
  data () {
    return {
      detail: {
        id: '',
        author: '',
        title: '',
        content: '',
        create_date: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .essaydetail{
    background: #fff;
  }
  .title{
    text-align: center;
    padding: 15px 0 10px;
  }

.title .title-content{
    color: #333;
    font-size: 24px;
    margin-bottom: 8px;
}

.title .title-author a{
    color: #999;
    font-size: 12px;
}
.title .title-author span{
    color: #ccc;
    font-size: 12px;
    margin-left: 5px;
}

.content{
    margin: 0 10px;
    padding-bottom: 10px;
}
</style>
