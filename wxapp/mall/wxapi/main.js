//API 封装模块 wx.request 也请封装一下，不要每次都去重复代码
// method  get | post |PUT RESTFUL
//通用的数据请求
//needSubDomain book.doban.com 子域名
const CONFIG = require('./config.js')
const API_BASE_URL = 'https:api.it120.cc'
const request = (url, needSubDomain, method, data) => {
    return new Promise((resolve, reject) => {
        const _url = API_BASE_URL + (needSubDomain?'/' + CONFIG.subDomain:'') + url;
        console.log(_url);
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/w-www-form-urlencoded'
            },
            success: function(res) {
                resolve(res.data);
            },
            fail: function(error) {
                reject(error)
            },
            complete() {}
        })
    });
}

module.exports = {
    //{page: 1, category_id: 1}
    goods: (data) => { //商品列表
        //pormise
        return request('/shop/goods/list', true, 'post', data);
    },
    //后台添加, 一个页面很长， 多个接口的
    banners: (data) => {
        return request('/banner/list', true, 'get', data);
    }
}