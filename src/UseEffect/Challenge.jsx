import React, { useEffect, useState } from 'react'

const Challenge = () => {
    const [count, setCount] =  useState(0);
    const [name, setName] =  useState("");

    useEffect(() =>{
        document.title = `Count - (${count})`
        console.log(count);
    }, [count])

    useEffect(() =>{
        console.log(name);
    }, [name])
  return (
    <>
      <h4>Use Effect Challenge</h4>
      <p>{count}</p>
      <div className='counter' style={{margin:"10px 0"}}>
         <button onClick={() => setCount(count + 1)} style={{color:"#333"}}>Counter</button>
      </div>
      <p style={{margin:"10px 0"}}>{name}</p>
      <input type='text'  onChange={(e) => setName(e.target.value)} style={{color:"black"}}/>
    </>
  )
}

export default Challenge