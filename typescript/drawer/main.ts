// 静态类型
// interface
// 1. 写Drawer类
// 2.构造函数的参数约束
// 3.enter， leave方法
interface IDrawerConfig {
  enterDOM: HTMLElement | null;
  leaveDOM: HTMLElement | null;
  duration?: number;
  ease?: string;
}
class Drawer implements IDrawerConfig {
  enterDOM: HTMLElement
  leaveDOM: HTMLElement
  _duration:number = 2
  _ease:string = "ease"
  enterTransition: string
  leaveTransition: string
  constructor(options) {
    this.enterDOM = options.enterDOM;
    this.leaveDOM = options.enterDOM;
    this.initDOMStyle();
    this.updateTransition();
  }
  initDOMStyle () {
    if(this.enterDOM && this.leaveDOM)
    {
      this.enterDOM.setAttribute('style', `transition:left ${this.duration}s ${this.ease};`);
      this.leaveDOM.setAttribute('style', `transition: margin-left ${this.duration}s ${this.ease};`);
    }
  }
  updateTransition() {
    this.enterTransition = `left: 0px transition: left ${this.duration}s ${this.ease};`;
    this.leaveTransition = `transition: margin-left ${this.duration}s ${this.ease}; margin-left: 200px;`;
  }
  get duration() {
    return this._duration;
  }
  set duration(duration: number) {
    this._duration = duration;
  }
  get ease() {
    return this._ease;
  }
  set ease(ease: string) {
    this._ease = ease;
  }
  enter() {
    this.enterDOM.setAttribute('style', this.enterTransition);
    this.leaveDOM.setAttribute('style', this.leaveTransition);
  }
  leave() {
    this.initDOMStyle();
  }
}
