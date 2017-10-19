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
import { Loadmore, Cell } from 'mint-ui'

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
      list: [{title: '我想带一个靠谱的人回家', label: '又快到了春节，想到一年一度的催婚大戏即将上演...'},
      {title: '贪婪是因为看到了太多', label: '小时候去河滩放牛，我发现牛很痛苦...'},
      {title: '家乡的油茶树', label: '我的家乡盛产茶油，漫山遍野的油茶树是我记忆中...'},
      {title: '有些人是山川河流', label: '生命太长，过客太多。悲欢离合、喜怒哀乐才是...'},
      {title: '有开始，就有惯例', label: '人们总爱拿第一个吃螃蟹的人为例。难以成为主食...'},
      {title: '毕竟，螃蟹数量有限', label: '其实，吃螃蟹虽然够狠，但并没带来全民性的响应...'},
      {title: '第一个吃大米的人才最可爱', label: '是他，让后世子子孙孙有了吃大米的惯例'},
      {title: '我想带一个靠谱的人回家', label: '又快到了春节，想到一年一度的催婚大戏即将上演...'},
      {title: '贪婪是因为看到了太多', label: '小时候去河滩放牛，我发现牛很痛苦...'},
      {title: '家乡的油茶树', label: '我的家乡盛产茶油，漫山遍野的油茶树是我记忆中...'},
      {title: '有些人是山川河流', label: '生命太长，过客太多。悲欢离合、喜怒哀乐才是...'},
      {title: '有开始，就有惯例', label: '人们总爱拿第一个吃螃蟹的人为例。难以成为主食...'},
      {title: '毕竟，螃蟹数量有限', label: '其实，吃螃蟹虽然够狠，但并没带来全民性的响应...'},
      {title: '第一个吃大米的人才最可爱', label: '是他，让后世子子孙孙有了吃大米的惯例'},
      {title: '我想带一个靠谱的人回家', label: '又快到了春节，想到一年一度的催婚大戏即将上演...'},
      {title: '贪婪是因为看到了太多', label: '小时候去河滩放牛，我发现牛很痛苦...'},
      {title: '家乡的油茶树', label: '我的家乡盛产茶油，漫山遍野的油茶树是我记忆中...'},
      {title: '有些人是山川河流', label: '生命太长，过客太多。悲欢离合、喜怒哀乐才是...'},
      {title: '有开始，就有惯例', label: '人们总爱拿第一个吃螃蟹的人为例。难以成为主食...'},
      {title: '毕竟，螃蟹数量有限', label: '其实，吃螃蟹虽然够狠，但并没带来全民性的响应...'},
      {title: '第一个吃大米的人才最可爱', label: '是他，让后世子子孙孙有了吃大米的惯例'},
      {title: '我想带一个靠谱的人回家', label: '又快到了春节，想到一年一度的催婚大戏即将上演...'},
      {title: '贪婪是因为看到了太多', label: '小时候去河滩放牛，我发现牛很痛苦...'},
      {title: '家乡的油茶树', label: '我的家乡盛产茶油，漫山遍野的油茶树是我记忆中...'},
      {title: '有些人是山川河流', label: '生命太长，过客太多。悲欢离合、喜怒哀乐才是...'},
      {title: '有开始，就有惯例', label: '人们总爱拿第一个吃螃蟹的人为例。难以成为主食...'},
      {title: '毕竟，螃蟹数量有限', label: '其实，吃螃蟹虽然够狠，但并没带来全民性的响应...'},
      {title: '第一个吃大米的人才最可爱', label: '是他，让后世子子孙孙有了吃大米的惯例'},
      {title: '我想带一个靠谱的人回家', label: '又快到了春节，想到一年一度的催婚大戏即将上演...'},
      {title: '贪婪是因为看到了太多', label: '小时候去河滩放牛，我发现牛很痛苦...'},
      {title: '家乡的油茶树', label: '我的家乡盛产茶油，漫山遍野的油茶树是我记忆中...'},
      {title: '有些人是山川河流', label: '生命太长，过客太多。悲欢离合、喜怒哀乐才是...'},
      {title: '有开始，就有惯例', label: '人们总爱拿第一个吃螃蟹的人为例。难以成为主食...'},
      {title: '毕竟，螃蟹数量有限', label: '其实，吃螃蟹虽然够狠，但并没带来全民性的响应...'},
      {title: '第一个吃大米的人才最可爱', label: '是他，让后世子子孙孙有了吃大米的惯例'}]
    }
  },
  created() {
    //this.getEssayList();
  },
  methods: {
    getEssayList() {
      let that = this;
      that.$http({
          method: "GET",
          url: "https://service.xuxuepu.com/api/essay/list"
        })
        .then(
          response => {
            console.log(response);
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
