import React, {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const handleDecrement= ()=>{
    if (count === 0) {
      alert('Decrement is not possible');
    }
    else {
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <h1 className='h1'>The Number of count are: {count}</h1>
      <button  className='increment' onClick={() => setCount(count + 1)}>Increment</button>
      <button  className='decrement' onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
