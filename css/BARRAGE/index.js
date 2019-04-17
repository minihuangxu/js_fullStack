let data = [
    { value: '把你捧在手上！', time: 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '虔诚的焚香！', time: 6, color: 'blue', speed: 1.1, fontSize: 24 },
    { value: '默默祈求上苍！', time: 7, color: 'green', speed: 1.2, fontSize: 26 },
    { value: '指引我方向！', time: 8, color: 'black', speed: 1.3, fontSize: 28 },
    { value: '不去荡气回肠！', time: 9, color: 'white', speed: 1.4, fontSize: 30 },
    { value: '只求爱一场！', time: 10, color: 'yellow', speed: 1.5, fontSize: 32 },
    { value: '爱到最后受了伤！', time: 11, color: 'pink', speed: 1.6, fontSize: 34 },
    { value: '哭得好绝望！', time: 12, color: 'lightskyblue', speed: 1.7, fontSize: 36 },
    { value: '我用尽一生一世来将你供养！', time: 13, color: 'lightgreen', speed: 1.8, fontSize: 38 },
    { value: '只期盼你停住流转的目光！', time: 14, color: 'lightyellow', speed: 1.9, fontSize: 40 },
    { value: '请赐予我无限爱与被爱的力量！', time: 15, color: 'gray', speed: 2, fontSize: 40 },
]

// 获取所有的dom结构
let doc = document;
let canvas = doc.getElementById('canvas');
let video = doc.getElementById('video');
let $txt = doc.getElementById('text');
let $btn = doc.getElementById('btn');
let $color = doc.getElementById('color');
let $range = doc.getElementById('range');

// 创建一个CanvasBarrage类
class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
        //如果canvas和video都没有传的话
        if (!canvas || !video) {
            return;
        }

        // 增加属性，挂载到this上
        this.video = video;
        this.canvas = canvas;

        this.canvas.width = video.width;
        this.canvas.height = video.height;
        // 获取画布
        this.ctx = canvas.getContext('2d');

        // 设置默认参数，如果没有传就用默认值
        let defOpts = {
            color: 'lightskyblue',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        };

        //合并对象全部挂载到this实例上
        Object.assign(this, defOpts, opts);
        //添加属性，用来判断播放状态，默认true是暂停
        this.isPaused = true;
        //获取所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this));
        //渲染
        this.render();
    }
    //function render () {}
    render() {
        //渲染的第一步是清除原来的画布
        this.clear();
        //渲染弹幕
        this.renderBarrage();
        //如果没有暂停的话就继续渲染
        if (this.isPaused === false) {
            requestAnimationFrame(this.render.bind(this));
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    renderBarrage() {
        //要根据当前视频播放的时间和弹幕展示的时间作比较，来判断是否展示弹幕
        let time = this.video.currentTime;

        //
        this.barrages.forEach(barrage => {
            //只有当视频播放时间大于等于弹幕展示的时间，才做处理
            if (!barrage.flag && time >= barrage.time) {
                //判断当前弹幕是否初始化
                if (!barrage.isInit) {
                    barrage.init();
                    barrage.isInit = true;
                }

                // 弹幕从右往左渲染，所以X坐标减去当前弹幕的速度
                barrage.x -= barrage.speed;
                barrage.render(); //渲染当前弹幕

                //如果当前弹幕的x坐标比自身的宽度还小，就代表渲染结束了
                if (barrage.x < -barrage.width) {
                    barrage.flag = true;
                }
            }
        })
    }
    add(obj) {
        this.barrage.push(new Barrage(obj, this))
    }
}


//创建barrage类用来实例化
class Barrage {
    constructor(obj, ctx) {
        this.value = obj.value
        this.time = obj.time
        //把我的obj和ctx都挂载到this上，方便获取
        this.obj = obj
        this.context = ctx
    }
    //初始化弹幕
    init() {
        //如果数据没有涉及到下面4种参数，就取默认值
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize

        //为了计算每条弹幕的宽度，我们必须创建一个元素p，然后计算文字的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p)
        this.width = p.clientWidth
        document.body.removeChild(p)

        //设置弹幕出现的位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random();

        //做一下超出范围的处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize;
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
        }
    }
    //渲染每一条弹幕
    render() {
        //设置画布文字和字体
        this.context.ctx.font = `${this.fontSize}px Arial`
        //设置画布的文字颜色
        this.context.ctx.fillStyle = this.color;
        //绘制文字
        this.context.ctx.fillText(this.value, this.x, this.y)
    }
}

let canvasBarrage = new CanvasBarrage(canvas, video, { data })
//设置video的play事件来调用CanvasBarrage实例的render方法
video.addEventListener('play', () => {
    canvasBarrage.isPaused = false;
    canvasBarrage.render() //触发弹幕
})
// 发送弹幕的方法
function send() {
    let value = $txt.value;  // 输入的内容
    let time = video.currentTime; // 当前视频时间
    let color = $color.value;   // 选取的颜色值
    let fontSize = $range.value; // 选取的字号大小
    let obj = { value, time, color, fontSize };
    // 添加弹幕数据
    canvasBarrage.add(obj);
    $txt.value = ''; // 清空输入框
}
// 点击按钮发送弹幕
$btn.addEventListener('click', send);
// 回车发送弹幕
$txt.addEventListener('keyup', e => {
    let key = e.keyCode;
    key === 13 && send();
});


