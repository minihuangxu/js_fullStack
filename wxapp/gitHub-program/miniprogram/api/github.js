const trendings = () => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: 'https://github-trending-api.now.sh/repositories?language=javascript&since=weekly',
            success: (res) => {
                resolve(res.data);
            },
            fail: (err) => {
                reject(err);
            }
        })
    })
}
module.exports = {
   trendings, 
}