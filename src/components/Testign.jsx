import React from 'react';
import React, { useState } from 'react';

const Testign = () => {
  // Declare a state variable called 'count' and a function to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
        Decrement
      </button>
    </div>
  );
};

export default Testign;
