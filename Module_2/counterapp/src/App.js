import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const[counter, setCounter] = useState(0)

  const decrement = () => {
    setCounter(prev => prev-1)
  }
  const increment = () => {
    setCounter(prev => prev+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h1 className='my-5'>{counter}</h1>
        <div className='d-flex gap-5'>
          <button className="btn btn-danger" onClick={decrement}>Decrement</button>
          <button className="btn btn-success" onClick={increment}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default App;
