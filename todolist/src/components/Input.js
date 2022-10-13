import React from 'react'

function Input({textHandler}) {
  return (
    <div>
        <input type="text" onChange={textHandler}/>
    </div>
  )
}

export default Input
