import React, { useState } from 'react';
import  './Counter.css';


const Counter = () => {
    const [state, setstate] = useState(3)
    function decrement(){
        setstate(state -1)
    }
    function increment(){
        setInterval(() => {
            setstate(state +1)
        }, 100);
    }


    return <div className='ButtCEnter'>
        <button onClick={decrement}>-</button>
        <span>{ state }</span>
        <button onClick={increment}>+</button>
    </div>;
}


export default Counter;