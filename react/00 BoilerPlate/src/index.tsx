import * as React from 'react';//MVVM
import * as ReactDOM from 'react-dom'; //render
import { Header, About } from './components';


// console.log(HelloComponent, '----------------');
ReactDOM.render(
  <div className="container-fluid">
    <Header />
    <About />
  </div>,
  document.getElementById('root')
);
// 根组件的
