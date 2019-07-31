const { createStore } = require('redux')
/**
 * [
 * {tabname: '推荐', selected: true},
 * {tabname: '关注', selected: false},
 * ]
 * */ 
function reducer(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TABNAME':
      const { tabName, selected } = action;
    return [...state, {
      tabName,
      selected
    }]
    case 'TOGGLE_SELECTED':
      const { index } = action;
      return state.map((tab, i) => {
        if (index === i) {
          return {...tab, selected: true}
        }
        return {...tab, selected: false}
      })
    default: return state
  } 
}
const state = createStore(reducer);
store.subscribe(() => {
  console.log('store', store.getState())
})
// store.dispatch({type: '@@INIT})
//要改变数据的时候 就要设计 type字段
//在reducer 里面 做的判断
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '推荐',
  selected: true
})
store.dispatch({
  type: 'ADD_TABNAME',
  tabName: '关注',
  selected: false
})
//用户点了第0项
store.dispatch({
  type: 'TOGGLE_SELECTED',
  index:0
})