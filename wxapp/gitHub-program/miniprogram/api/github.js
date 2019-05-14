const pageAble = require('./pageAble.js')
const trendings = (data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://github-trending-api.now.sh/repositories',
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}
const events = () => {
  return {
    get() {
      const promise = new Promise((resolve, reject) => {
        wx.request({
          url: 'https://api.github.com/events',
          success: res => {
            resolve({
              data: res.data,
              headers: res.header,
            });
          },
          fail: err => {
            reject(err);
          }
        })
      })
      //符合
      //Link:<https://api.github.com/events?page=2>; rel="next", <https://api.github.com/events?page=10>; rel="last"
      //风格api 返回 next （下一页数据请求方法） data （当前页面数据）
      return pageAble.wrap(promise)
      //return promise;
    }
  }
}
module.exports = {
  trendings,
  events
}