<template>
  <div class="home">
    <div class="imgs_div">
      <div v-for="item in imgs" @click="clickDiv()">
        <ul>
          <li class="li1">{{item.str}}</li>
          <li><img v-bind:src="item.src" alt=""/></li>
        </ul>
      </div>
    </div>
    <xxp-menu/>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import Menu from './Menu';

export default {
  name: "home",
  components: {
    "xxp-menu": Menu
  },
  created() {
    //this.getList();
  },
  methods: {
    clickDiv() {
      MessageBox.alert('新功能待开发...', '胖墩提示')
    },
    getList() {
      let that = this;
      that.$http({
          method: "GET",
          url: "https://service.xuxuepu.com/api/home"
        })
        .then(
          res => {
            //MessageBox('测试连接数据库', res.data.data.msg)
          },
          error => {

          }
        );
    }
  },
  data() {
    return {
      selected: "home",
      value: "adfsdf",
      imgs: [
        { str: "前端工程化", src: require("./../assets/a1.jpg") },
        { str: "前端组件化", src: require("./../assets/a2.jpg") },
        { str: "前端性能优化", src: require("./../assets/a3.jpg") }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgs_div {
  overflow: hidden;
}
.imgs_div > div {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.imgs_div > div > ul {
  position: relative;
}
.imgs_div > div img {
  width: 100%;
}
.imgs_div > div > ul > .li1 {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  text-align: center;
  width: 100%;
  bottom: 2px;
  padding: 6px 0;
  font-size: 24px;
}
</style>
