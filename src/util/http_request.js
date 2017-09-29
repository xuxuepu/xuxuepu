/**
* ajax请求模块
* xuxuepu create 2016-3-12
*/
//JSON.parse(jsonstr); //可以将json字符串转换成json对象
//JSON.stringify(jsonobj); //可以将json对象转换成json字符串
import reqwest from 'reqwest';
import config from './config';

let request_http = config.request_http;//请求http
let request_urls = config.request_urls;//请求url集合
let timeout_time = 20000;//服务器超时间2秒

//登出事件
let f_logout = function( return_data ){
  localStorage.removeItem("auto_login_cookie");//删除自动登录
  sessionStorage.clear();//删除所有sessionStorage
  window.location.href="/index.html?m=NotFound&error_msg="+return_data.message;//转到首页
};

//返回错误状态码
let f_get_textStatus = function( ts ){
  let return_data;
  if(ts && ts.indexOf("timeout") >= 0){
    return_data={code:"timeout",message:"服务器响应超时"};
  }else if(ts && ts.indexOf("error")>=0){
    return_data={code:"error",message:"服务器错误"};
  }else if(ts && ts.indexOf("abort")>=0){
    return_data={code:"中止",message:"中止"};
  }else if(ts && ts.indexOf("parsererror")>=0){
    return_data={code:"parsererror",message:"解析错误"};
  }else{
    return_data={code:500,message:"服务器错误"};
  }
  return return_data;
};

module.exports = {
  //get请求数据（请求的req_data，提交的数据集，发送前回调，完成后回调(返回的数据)），
  f_request_get:function(req_data,data,f_beforesend,f_complete){
    //发送前
    typeof f_beforesend=="function"? f_beforesend():true;

    let obj = this,
      request_url = request_http + request_urls[req_data.request_url || req_data],
      return_data, async_return_data;
    config.is_show_log ? console.log( "【上送url】：\n",request_url,"\n【上送的数据】：\n",data):true;
    async_return_data = reqwest({
      method : 'get',
      url : request_url,
      type : req_data.data_type || 'json',
      contentType : req_data.content_type || 'application/json;charset=utf-8',
      data : data,
      async:(req_data.async || typeof  req_data.async =="undefined" ? true : false),
      timeout:timeout_time,
      success : function(data) {
        //请求成功
        return_data = data;
      },
      error : function(jqXHR, textStatus, errorThrown) {
        //请求异常
        return_data = f_get_textStatus(textStatus);
      },
      complete : function() {
        //请求完成
        if(typeof return_data == "undefined"){
          return_data = {
            code:'undefined',message:"服务器错误"
          };
        }
        config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
        typeof f_complete=="function" ? f_complete(return_data):true;
        Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
      }
    });
    if( req_data.async == false){
      return_data = JSON.parse(async_return_data.request.response);
      config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
      typeof f_complete=="function" ? f_complete( return_data ):true;
      Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
    }
  },
  //post请求数据（请求的req_data，提交的数据集，发送前回调，完成后回调(返回的数据)）
  f_request_post:function(req_data,data,f_beforesend,f_complete){
    //发送前
    typeof f_beforesend=="function"? f_beforesend():true;

    let obj = this,
      request_url = request_http+ request_urls[req_data.request_url || req_data],
      return_data, async_return_data;
    config.is_show_log ? console.log( "【上送url】：\n",request_url,"\n【上送的数据】：\n",data):true;
    async_return_data = reqwest({
      method : 'post',
      url:request_url,
      type : req_data.data_type || 'json',
      contentType : req_data.content_type || 'application/json;charset=utf-8',
      data : JSON.stringify(data),
      async:req_data.async || true,
      timeout:timeout_time,
      success : function(data) {
        //请求成功
        return_data = data;
      },
      error : function(jqXHR, textStatus, errorThrown) {
        //请求异常
        return_data = f_get_textStatus(textStatus);
      },
      complete : function() {
        //请求完成
        if(typeof return_data == "undefined"){
          return_data = {
            code:'undefined',message:"服务器错误"
          };
        }
        config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
        typeof f_complete=="function" ? f_complete(return_data):true;
        Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
      }
    });
    if( req_data.async == false ){
      return_data = JSON.parse(async_return_data.request.response);
      config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
      typeof f_complete=="function" ? f_complete(return_data):true;
      Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
    }
  },
  //post请求数据(参数拼入url)（请求的req_data，提交的数据集，发送前回调，完成后回调(返回的数据)）
  f_request_post_urldata:function(req_data,data,f_beforesend,f_complete){
    //发送前
    typeof f_beforesend=="function"? f_beforesend():true;

    let obj = this,
      request_url = request_http+ request_urls[req_data.request_url || req_data] + "/" + data.id,
      return_data, async_return_data;
    config.is_show_log ? console.log( "【上送url/数据】：\n",request_url):true;
    async_return_data = reqwest({
      method : 'post',
      url:request_url,
      type : req_data.data_type || 'json',
      async:req_data.async || true,
      timeout:timeout_time,
      contentType : req_data.content_type || 'application/json;charset=utf-8',
      success : function(data) {
        //请求成功
        return_data = data;
      },
      error : function(jqXHR, textStatus, errorThrown) {
        //请求异常
        return_data = f_get_textStatus(textStatus);
      },
      complete : function() {
        //请求完成
        if(typeof return_data == "undefined"){
          return_data = {
            code:'undefined',message:"服务器错误"
          };
        }
        config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
        typeof f_complete=="function" ? f_complete(return_data):true;
        Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
      }
    });
    if( req_data.async == false ){
      return_data = JSON.parse(async_return_data.request.response);
      config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
      typeof f_complete=="function" ? f_complete(return_data):true;
      Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
    }
  },
  //get请求数据(参数拼入url)（请求的req_data，提交的数据集，发送前回调，完成后回调(返回的数据)）
  f_request_get_urldata:function(req_data,data,f_beforesend,f_complete){
    //发送前
    typeof f_beforesend=="function"? f_beforesend():true;

    let obj = this,
      request_url = request_http+ request_urls[req_data.request_url || req_data] + "/" + data.id,
      return_data, async_return_data;
    config.is_show_log ? console.log( "【上送url/数据】：\n",request_url):true;
    async_return_data = reqwest({
      method : 'get',
      url:request_url,
      async:req_data.async || true,
      timeout:timeout_time,
      type : req_data.data_type || 'json',
      contentType : req_data.content_type || 'application/json;charset=utf-8',
      success : function(data) {
        //请求成功
        return_data = data;
      },
      error : function(jqXHR, textStatus, errorThrown) {
        //请求异常
        return_data = f_get_textStatus(textStatus);
      },
      complete : function() {
        //请求完成
        if(typeof return_data == "undefined"){
          return_data = {
            code:'undefined',message:"服务器错误"
          };
        }
        config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
        typeof f_complete=="function" ? f_complete(return_data):true;
        Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
      }
    });
    if( req_data.async == false ){
      return_data = JSON.parse(async_return_data.request.response);
      config.is_show_log ? console.log( "【返回的数据】：\n",return_data):true;
      typeof f_complete=="function" ? f_complete(return_data):true;
      Number(return_data.code)==401 ? f_logout(return_data) : true;//登出
    }
  }
}
