
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import { useState } from 'react';


function App() {
  const [numClicks, setNumClicks] = useState(0);
  const manageClick = ()=>{
    setNumClicks(numClicks + 1);
    };
    
  const resetCounter = ()=>{
    setNumClicks(0);
    };

  return (
    <div className='App'>
      <div className='main-container'> 
        <h1>My Click Counter</h1>
        <div className='click-counter-container'>
          <Counter
            counter = {numClicks} />
          <Button          
            text = 'click'
            isClickButton = {true}
            manageClick = {manageClick} />

          
          <Button
            text = 'reset'
            isClickButton = {false}
            manageClick = {resetCounter} />          
        </div>
      </div>
     
    </div>
  );
};

export default App;
