import React, { useState } from 'react'

export default function AddRemoveValue() {

    const [counter, setCounter] = useState(1)
    // let counter = 15
    const addValue = () =>{
      setCounter (counter+1)
    }
    const removeValue =() =>{
        setCounter(counter-1)
    }
  return (
    <div>
      <h1>Reacr couese</h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      <p>footer{counter}</p>
    </div>
  )
}
