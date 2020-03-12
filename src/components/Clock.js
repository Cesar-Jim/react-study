import React, { useState } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000)
  }


  return (
    <div>
      <h1>Clock!</h1>
      <h3>It is {date.toLocaleTimeString()}. {tick()}</h3>
    </div>
  )
}

export default Clock;