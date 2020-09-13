import React, { useState, useCallback } from 'react';
import PlayGround from './Components/Playground'
import FunModeButton from './Components/FunModeButton'
import './App.css';

function App() {
  const [isTypeMode, setTypeMode] = useState(true)

  const handleOnClick = useCallback(() => {
    setTypeMode(!isTypeMode)
  }, [setTypeMode, isTypeMode])

  return (
    <div className="App">
      <FunModeButton onClick={handleOnClick} isTypeMode={isTypeMode} />
      <PlayGround
        isTypeMode={isTypeMode}
        fontSize={80}
      />
    </div>
  );
}

export default App;
