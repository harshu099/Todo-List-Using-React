import React from 'react'

function Button ({value,clickHandler}) {
  return (
    <div>
        <button onClick={clickHandler}>{value}</button>
    </div>
  )
}

export default Button 