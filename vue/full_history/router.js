// 三个路由  a标签点击，切换content，显示对应的component
// router.js前端  index.js后端
class Router {
  constructor(options) {
    this.routes = {};  // key -> value
    this.init();
    this.bindEvent();
    options.forEach(item => {
      this.route(item.path, () => {
        document.getElementById('content').innerHTML = item.component;
      })
      
    });
    // console.log(this.routes)
  }
  bindEvent () {
    const _this = this;
    const links = document.getElementsByTagName('a');
    [].forEach.call(links, link => {
      link.addEventListener('click', function() {
        const url = this.getAttribute('data-href');
        _this.push(url)
      });
      
    });
  }
  push(url) {
    window.history.pushState({}, null, url);
    this.updateView();
  }
  route (path, cb) {
    this.routes[path] = cb
  }
  init () {
    window.addEventListener('load', this.updateView.bind(this))
    window.addEventListener('popstate', this.updateView.bind(this))
  }
  updateView () {
    const currentUrl = window.location.pathname || '/';
    this.routes[currentUrl] && this.routes[currentUrl]();
  }
}
