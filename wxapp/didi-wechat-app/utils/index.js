// req  工具类
const DEFAULT_OPT = {
    url: '',
    data: {},
    header: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json'
  }
  // {a:1, b: 2}
  // 'Content-Type': 'form-encode'  a=1&b=2
  // 'Content-Type': 'application/json' {a:1, b: 2}
  // 'Content-Type': 'form-data'
  let util = {
    request(opt) {
      const options = {
        ...DEFAULT_OPT,
        ...opt
      };
      const { url, data, header, method, dataType } = options;
      return new Promise((resolve, reject) => {
        wx.request({
          url,
          data,
          header,
          method,
          dataType,
          success: (res) => {
            resolve(res.data);
          },
          fail: (err) => {
            reject(err)
          }
        })
      })
    }
  }
  
  export default util;