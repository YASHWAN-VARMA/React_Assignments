import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.rollNO}</h1>
        <h1>{props.course}</h1>
    </div>
  )
}

export default Cards