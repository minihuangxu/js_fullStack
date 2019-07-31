import React, {
  unstable_ConcurrentMode
  as ConcurrentMode
} from 'react';
import { flushSync } from 'react-dom'
// flushSync 执行任务的时候 把该任务的优先级 提到最高
import './index.css';
class Parent extends React.Component {
  state = {
    async: true,
    num: 1,
    length: 2000
  }
  componentDidMount() {
    this.interval = setInterval (() => {
      this.updateNum();
    }, 100)
  }
  updateNum = () => {
    const newNum = this.state.num === 5 ? 0 :this.state.num + 1;
    if (this.state.async) {
      this.setState({
        num: newNum
      })
    } else {
      flushSync(() => {
        this.setState({
          num: newNum
        })
      })
    }
  }
  render() {
    let grids = [];
    const { async, num, length} = this.state;
    for (let i = 0; i < length; i ++) {
      grids.push(
        <div className="item" key={i}>
          { num }
        </div>
      )
    }
    return (
      <div className="main">
        async:
        <input type="checkbox" 
        checked={async}
        onChange={() => flushSync(() => {
          this.setState({
            async: !this.state.async
          })
        })}
        />
        <div className="wrapper">
          { grids }
        </div>
      </div>
    )
  }
}
class Index extends React.Component {
  render() {
    return (
      <ConcurrentMode>
        <Parent />
      </ConcurrentMode>
    )
  }
}
export default Index;
