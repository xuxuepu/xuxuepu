/**
* 配置信息
* xuxuepu create 2016-3-25
*/
module.exports = {
  // 是否打印日志
  is_show_log: false,
  // 七牛地址
  qiniu_path: 'http://7xk0ie.com1.z0.glb.clouddn.com',
  // ajax_http locals
  request_http: '/api',
  // ajax_http请求url
  request_urls: {
    user: '/user'
  },
  // web_socket
  request_ws: 'ws://192.168.1.192:8888',
  // web_socket_url
  request_wsurls: {
    ws: '/ws'
  }
}
