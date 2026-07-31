import React from 'react'
import { useState } from 'react'
const Counter = () => {
  let [count,setCount] = useState(0);
  function add(){
    if(count<10){
      setCount(count+1);
    }
  }
  function sub(){
    if(count>0){
      setCount(count-1);
    }
  }
    return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{add()}}>Add</button>
      <button onClick={()=>{sub()}}>Sub</button>
    </div>
    
  )
}

export default Counter