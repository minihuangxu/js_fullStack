import React from 'react'

function Demo2 (props) {
  const {names, from} = props
  return (
    <div style = {{ backgroundColor: '#eee'}}>
      {names}
      {from}
    </div>
  )
}

export default Demo2;