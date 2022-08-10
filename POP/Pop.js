import React, { useState } from 'react';
import './Pop.css'

const Pop = () => {
    const [state, setstate] = useState(true);
    const [add, Notadd] = useState(true)

    function clicked(){
        setstate(!state)
        Notadd(!add)
    }

    return <div className='pop'>
        <button className={add ? 'lol' : 'red'} onClick={clicked}>=</button>
        <div className={state ? 'block' : 'none'} >
       <div className='popop'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Specification</li>
            </ul>
       </div>
       </div>
    </div>;
}

export default Pop;