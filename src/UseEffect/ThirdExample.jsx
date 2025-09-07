import React, { useEffect, useState } from 'react'

const ThirdExample = () => {
  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000)

  }, [])

  return (
    <div>
      <p>{date}</p>
    </div>
  )
}

export default ThirdExample