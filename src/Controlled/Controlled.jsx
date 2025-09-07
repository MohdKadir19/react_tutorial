import React, { useState } from 'react'

const Controlled = () => {
const [name, setName] = useState("")
const handleSubmit = (event) =>{
event.preventDefault();
console.log(name);

}
  return (
    <div>
        <h3>Controlled Components</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Controlled