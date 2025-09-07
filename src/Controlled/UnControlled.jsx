import React from 'react'

const UnControlled = () => {
const handleSubmit = (e) =>{
e.preventDefault();
let name = document.querySelector('#name').value;
console.log(name)
}
  return (
    <div>
        <h3>Uncontrolled Components</h3>
        <form onSubmit={handleSubmit}>
            <input type='text' id="name" name='name'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UnControlled