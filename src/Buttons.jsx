import React from 'react'
const Buttons = ({setCount}) => {
  return (
    <div>
      <button onClick={()=>{setCount((p)=>p+1)}}>Add</button>
      <button onClick={()=>{setCount((p)=>p-1)}}>Sub</button>
    </div>
  )
}

export default Buttons