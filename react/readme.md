# context
跨组件之间数据传递
this.props
父 -> 子 -> 孙
父 -> 孙
被 react-router react-redux 广泛使用
16.0
cnpm i prop-types -S 约束类型时需要使用的包
## 问题
shouleComponentUpdate
尽可能少渲染
return true
return false 不更新
如果中间某个组件 shouleComponentUpdate false 后代组件不会更新
## context 16