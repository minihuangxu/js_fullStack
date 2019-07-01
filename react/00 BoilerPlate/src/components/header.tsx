import * as React from 'react';
//无状态的表示型组件
export const Header:React.StatelessComponent = () => {
  return (
    <div>
      <div className="row">
        <h2>Application Header</h2>
      </div>
    </div>
  )
}