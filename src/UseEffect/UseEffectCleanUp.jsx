import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
 const [count, setCount] = useState(0);
 useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1)
    }, 1000);
    return () => clearInterval(interval);
    
 }, [count])

  return (
    <>
    <h4>Our you tube subscriber</h4>
    <p>{count}</p>
    </>
  )
}

export default UseEffectCleanUp