const { createStore, combineReducers } = require('redux');
// action.type常量 决定了 这次 dispatch 
// 要干什么
// reducer 可以收到 action 的信息
const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}
// 第一步设置默认值 第二步要干的事
// 加 ADD_FILM
function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film ];
    default :
      return state;
  }
}
function reducer(state, action) {
  console.log('reducer->>>>>>', action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer,
})
// createStore 只接受 reducer
const store = createStore(index);
// dispatch一次 subscribe触发一次
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(add);
store.dispatch(add);
store.dispatch(reduce);