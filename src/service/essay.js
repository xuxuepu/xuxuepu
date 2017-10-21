import { config, request } from './../util';

export default {
    /**
     * 获取文章列表
     * @param {*上送数据} data 
     */
    getEssayList(data){
        return request.requestGet(config.api.getEssayList, data);
    },
    /**
     * 获取文章详情
     */
    getEssayDetail(data){
        return request.requestGet(config.api.getEssayDetail, data);
    }
}