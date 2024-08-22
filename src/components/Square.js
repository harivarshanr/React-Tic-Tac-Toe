import React from 'react';
import '../App.css';
function Square({val,chooseSq}) {
  return (
    <div className='square' onClick={chooseSq}>{val}</div>
  )
}
export default Square

