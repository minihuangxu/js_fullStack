var Drawer = /** @class */ (function () {
    function Drawer(options) {
        this._duration = 2;
        this._ease = "ease";
        this.enterDOM = options.enterDOM;
        this.leaveDOM = options.enterDOM;
        this.initDOMStyle();
        this.updateTransition();
    }
    Drawer.prototype.initDOMStyle = function () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style', "transition:left " + this.duration + "s " + this.ease + ";");
            this.leaveDOM.setAttribute('style', "transition: margin-left " + this.duration + "s " + this.ease + ";");
        }
    };
    Drawer.prototype.updateTransition = function () {
        this.enterTransition = "left: 0px transition: left " + this.duration + "s " + this.ease + ";";
        this.leaveTransition = "transition: margin-left " + this.duration + "s " + this.ease + "; margin-left: 200px;";
    };
    Object.defineProperty(Drawer.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (duration) {
            this._duration = duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Drawer.prototype, "ease", {
        get: function () {
            return this._ease;
        },
        set: function (ease) {
            this._ease = ease;
        },
        enumerable: true,
        configurable: true
    });
    Drawer.prototype.enter = function () {
        this.enterDOM.setAttribute('style', this.enterTransition);
        this.leaveDOM.setAttribute('style', this.leaveTransition);
    };
    Drawer.prototype.leave = function () {
        this.initDOMStyle();
    };
    return Drawer;
}());
