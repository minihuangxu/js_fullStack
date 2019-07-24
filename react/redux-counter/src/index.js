import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import index from './reducer/index'
import Count from './App'

const store = createStore(index);
ReactDOM.render(
<Provider store={store}>
<Count />
</Provider>
, document.getElementById('root'))
// store.subscribe(() => {
//   ReactDOM.render(<Count />, document.getElementById('root'))
// })
