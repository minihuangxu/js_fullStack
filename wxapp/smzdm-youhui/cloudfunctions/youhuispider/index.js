// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request');
const cheerio = require('cheerio');

cloud.init()
function spiderYouhui() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if (err) {
        reject(err);
      }
      if (!err) {
        // console.log(res.body);
        // decodeEntities 要不要解析 html entity
        console.log(2);
        const $ = cheerio.load(res.body, {
          decodeEntities: false
        })
        let list = [];
        $('.list.list_preferential').each(function() {
          // 限制
          // innerHTml 
          let title = $('.itemName a', this).html();
          // <span>44元</span>
          title = title.replace(/<.*>.*<\/.*>/g, '');
          const price = $('.listTitle .red', this).text();
          const img = $('.picLeft img', this).attr('src');
          const desc = $('.lrInfo', this).text().trim();
          console.log({
            title, price, img, desc
          });
          list.push({
            title, price, img, desc
          });
        })
        resolve(list);
      }
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();
  // await 后面接 promise 返回 promise resolve 时候的值
  // 执行爬虫 
  // 书写顺序 执行顺序
  try {
    const youhuiLists = await spiderYouhui();
    return {
      code: 200,
      youhuiLists
    }
  }
  catch(err) {
    return {
      code: 500
    }
  }
}
