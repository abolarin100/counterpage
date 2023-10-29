import React from 'react';
import "../css/Counter.css"
import {useCounter } from './useCounter'

function Counter() {
    const { count, increament, decreament, reset, setValue} = useCounter();
    return (
        <div>
           <h1 className='page'>Counter Page</h1>
           <p>Your count is : {count}</p>
           <button onClick={increament}>Increament</button>
           <button onClick={decreament}>Decreament</button>
           <button onClick={reset}>Reset</button>

           
            
        </div>
    );
}

export default Counter;
