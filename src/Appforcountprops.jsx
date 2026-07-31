import React from 'react'
import { useState } from 'react'
import Buttons from './Buttons';
import DisplayCount from './DisplayCount';
const Appforcountprops = () => {
    let [count,setCount] = useState(0);
  return (
    <>
    <DisplayCount count={count}/>
    <Buttons setCount={setCount}/>
    </>
  )
}

export default Appforcountprops