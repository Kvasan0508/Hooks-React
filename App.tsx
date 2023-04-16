import * as React from 'react';
import { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const handleState = () => {
    setState(state + 1);
  };
  const handleStatedec = () => {
    setState(state - 1);
  };
  const handleRef = () => {
    console.log('ref');
    ref.current++;
  };
  return (
    <div>
      <p>usestate</p> {state} <br />
      <button onClick={handleState}> Click Me increment</button>
      <br />
      <button onClick={handleStatedec}> Click Me decrement</button>
      <br />
      <p>useref</p>
      {ref.current}
      <br />
      <button onClick={handleRef}> Click Me increment</button>
      <br />
    </div>
  );
}
