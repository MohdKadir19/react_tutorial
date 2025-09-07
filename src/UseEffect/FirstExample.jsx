import React, { useEffect } from 'react'

const FirstExample = () => {
useEffect(() =>{
    console.log("Effect call")
}, []) // render only first time
  return (
    <div>Use Effect Example 1</div>
  )
}

export default FirstExample