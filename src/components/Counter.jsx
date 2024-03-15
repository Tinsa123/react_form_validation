import React, { useState } from 'react'

const Counter = ({initalCount}) => {
    const[counter,setCounter]=useState(initalCount)
    const handleIncrement=()=>{
        setCounter((prev)=>counter+1)
    }
    const handleDecrement=()=>{
        setCounter((prev)=>prev-1)
    }
    const handleRestart=()=>{
        setCounter(0)
    }
  return (
    <div>
        <h1 data-testid="count">{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleRestart}>Restart</button>
         {/* <button onClick={handleIncrement}>Increment</button> */}
      
    </div>
  )
}

export default Counter
