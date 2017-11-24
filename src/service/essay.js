import { Config, Request } from './../util';

export default {
    /**
     * 获取文章列表
     * @param {*上送数据} data 
     */
    getEssayList(data){
        return Request.requestGet(Config.api.getEssayList, data);
    },
    /**
     * 获取文章详情
     */
    getEssayDetail(data){
        return Request.requestGet(Config.api.getEssayDetail, data);
    }
}