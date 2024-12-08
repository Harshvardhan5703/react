import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id='para'>u have clicked {count} times</p>
        <button id='btn'onClick={()=>{setCount(count+1)}} >Click me</button>
      
    </div>
  )
}

export default Counter
