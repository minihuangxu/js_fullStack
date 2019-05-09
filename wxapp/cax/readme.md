小程序 canvas 找 cax

引入 cax 组件
new cax.Stage()
cax.Rect
add
update

- countdown 组件
    文案， 获取验证码？
    开始计时 start false|true
    Page 为组件的调用者 properties
    组件 data(内部) + properties(外界传入)
    <countdown start="{{start}}>

- properties 有个observer选项
    当外界的值改变时， 会执行
    组件是构成页面的， 是为页面打工的

- start 由外传到内properties
    有利于页面操作关键状态
    由外到内通过properties，
    内部组件通知页面？ 可以做