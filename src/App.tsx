import { useState } from 'react'

import { incremented, addingMore } from './features/counter/counter-slice';
import { useAppSelector, useAppDispatch } from './app/hooks';


import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick(){

    //Increment by a chosen amount.
    dispatch(addingMore(2))//Action with payload field

    // Increment by 1.
    // dispatch(incremented())//Action with no payload field
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          {/* <button type="button" onClick={() => setCount((count) => count + 1)}> */}
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
