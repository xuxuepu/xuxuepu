<template>
  <div class="resume">
    <div class="title">
      <div class="title-content">{{detail.title}}</div>
      <div class="title-author">
        <span>最后更新时间：{{detail.create_date}}</span>
      </div>
    </div>
    <div class="content">
      <div v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
import { Indicator, MessageBox } from 'mint-ui';
import { my } from './../service';
import Menu from './Menu';

export default {
  name: 'resume',
  created(){
    this.isAuthorizationResume();//判断是否可授权
  },
  methods: {
    //判断是否可授权
    isAuthorizationResume(){
      let that = this;
      Indicator.open({
        text: '请稍候...',
        spinnerType: 'fading-circle'
      });
      my.isAuthorizationResume({
        vueComponent: that
      }).then(res =>{
        if(!res.code){
            that.getResumeDetail();//获取简历
        }else{
          Indicator.close();
          MessageBox.alert('您没有授权查看', '胖墩提示').then(action => {
            window.history.go(-1);
          });
        }
      });
    },
    //获取简历
    getResumeDetail(){
      let that = this;
      my.getResumeDetail({
        vueComponent: that,
        id: 1
      }).then(res =>{
          Indicator.close();
          if(!res.code){
              that.$data.detail = res.data;
          }else{
            
          }
        });
    }
  },
  data () {
    return {
      detail: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume{
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
