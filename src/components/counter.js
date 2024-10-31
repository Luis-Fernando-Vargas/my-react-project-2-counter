import React from "react";
import '../styles/counter.css'

function Counter ({ counter }){
  return(
    <div className='counter'>
      {counter}
    </div>
  );
};

export default Counter;