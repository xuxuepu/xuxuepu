import config from './config';

//处理发送前事件
function beforesendHandling(url, data){
    config.isPrintLog ? console.log("【上送url】：\n", url, "\n【上送的数据】：\n", data) : true;
}

//处理完成事件
function completeHandling(data) {
    config.isPrintLog ? console.log("【返回的数据】：\n", data) : true;
    Number(data.code) == 200 ? logout() : true;//登出
    return data;
}

//处理错误事件
function errHandling(err){
    config.isPrintLog ? console.log("【错误信息】：\n", err) : true;
    return {
        code: 520,
        message: '服务器异常，正在努力抢修中'
    };
}

//登出事件
function logout() {
    config.accreditLogin();//重新授权登录
}

/**
 * get请求
 * @param api
 * @param data
 * @returns {Promise.<Response>}
 */
function requestGet(api, data) {
    let url = config.requestHttp + api + '?time=' + new Date().getTime();

    for (let item in data) {
        if(item != "vueComponent"){
            url = url + "&" + item + "=" + data[item];
        }
    }

    beforesendHandling(url, data);

    return data.vueComponent.$http({
        method: "GET",
        credentials: 'include',
        url: url
      })
      .then(response => {
          return completeHandling(response.data);
        },
        error => {
          return errHandling(error);
        }
      );
}

/**
 * post请求
 * @param url
 * @param data
 * @returns {Promise.<Response>}
 */
function requestPost(url, data, beforesend, complete) {
    url = config.requestHttp + config.api[url] + '?time=' + new Date().getTime();

    beforesendHandling(url, data, beforesend );//处理发送前事件

    let options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json;charset=utf-8',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };
    fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => completeHandling(data, complete))
        .catch(err => errHandling(err, complete));
}

/**
 * post请求(form提交)
 * @param url
 * @param data
 * @returns {Promise.<Response>}
 */
function requestPostForm(url, data, beforesend, complete) {
    url = config.requestHttp + config.api[url] + '?time=' + new Date().getTime();

    beforesendHandling(url, data, beforesend );//处理发送前事件

    let formData = new FormData();
    for (let item in data) {
        formData.append(item, data[item]);
    }
    let options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: formData
    };
    fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => completeHandling(data, complete))
        .catch(err => errHandling(err, complete));
}

export default {requestGet, requestPost, requestPostForm};
