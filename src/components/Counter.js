import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount, componentDidUpdate and componentWillUnmount combined:
  useEffect(() => {
    // The Effect Hook lets you perform side effects in function components
    // React runs the effects after every render
    // Update the document title using the browser API
    document.title = `You clicked ${count} times.`; // <-- this function is the actual effect!
  })

  return (
    <div>
      <p>Number of clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}

export default Counter;