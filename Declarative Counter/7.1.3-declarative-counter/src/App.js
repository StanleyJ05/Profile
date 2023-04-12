
import './App.css';

import React, { useState } from 'react';

function App() {
  let [counter, changeCounter] = useState(10000)
  window.changeCounter = changeCounter

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {counter}
        </h1>
        <h4>{counter} </h4>
        
      </header>
    </div>
  );
}

export default App;
