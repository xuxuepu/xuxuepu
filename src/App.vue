<template>
  <div id="app">
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;
}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, div, dl, dt, dd, ul, ol, li, pre, form, fieldset, lengend, button, input, textarea, th, td { margin: 0; padding: 0;}
/*body*/
body { font:14px "Microsoft YaHei",微软雅黑,"Arail"; /* letter-spacing: 1px; */overflow-x:hidden;background:#F0F0F0;}
fieldset, img { border: 0; }
::-webkit-input-placeholder { /* WebKit browsers */ color:#b2b2b2;}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */color:#b2b2b2;}
::-moz-placeholder { /* Mozilla Firefox 19+ */color:#b2b2b2;}
:-ms-input-placeholder { /* Internet Explorer 10+ */color:#b2b2b2;}
::-ms-clear { display: none; }
::-ms-reveal { display: none; }
.remove_scrollbar::-webkit-scrollbar{width:0px}/*去除滚动条,依然可滚动*/
input, button, select, textarea { outline: none; }
ul, li { list-style-type: none; }
a { text-decoration: none;  color: #666;}
a:active { color: #26A2FF;}
table { border-collapse: collapse; border-spacing: 0;font-size: 14px;table-layout:fixed; }

/*字体大小*/
.f_s8 { font-size: 8px !important; }
.f_s10 { font-size: 10px !important; }
.f_s11 { font-size: 11px !important; }
.f_s12 { font-size: 12px !important; }
.f_s13 { font-size: 13px !important; }
.f_s14 { font-size: 14px !important; }
.f_s16 { font-size: 16px !important; }
.f_s18 { font-size: 18px !important; }
.f_s20 { font-size: 20px !important; }
.f_s24 { font-size: 24px !important; }
.f_s36 { font-size: 36px !important; }

/*文本自动换行*/
.pre { white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word; }
/*不换行*/
.no_pre { white-space: nowrap; }
/*文字太宽加....*/
.add_dot { overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;}
.add_dot2 {overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

@font-face {
  font-family: 'iconfont';  /* project id 453619 */
  src: url('//at.alicdn.com/t/font_453619_5fd4hqxb19gousor.eot');
  src: url('//at.alicdn.com/t/font_453619_5fd4hqxb19gousor.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_453619_5fd4hqxb19gousor.woff') format('woff'),
  url('//at.alicdn.com/t/font_453619_5fd4hqxb19gousor.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_453619_5fd4hqxb19gousor.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>
