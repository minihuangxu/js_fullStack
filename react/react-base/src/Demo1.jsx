import React, { Component} from 'react'
class Demo1 extends Component {
  render () {
    console.log(this.props);
    return (
      <div style={{backgroundColor: 'lightblue'}} onClick= {() => {
        const { onClick } = this.props;
        onClick('内容来自子组件');
      }}>
        Demo1
      </div>
    )
  }
}
export default Demo1;