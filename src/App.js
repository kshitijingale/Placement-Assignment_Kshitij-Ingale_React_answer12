import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count = count + 1)}>Increase Counter</button>
      <button onClick={() => setCount(count = count - 1)}>Decrease Counter</button>
    </>
  );
}

export default App;
