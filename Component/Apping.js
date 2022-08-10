import React, {useState} from 'react';
import Button from './Button';

import './Style.css';
import Suppl from './Suppl';




function Apping() {
  // 
  const [state, setstate] = useState(true)
    function clicked(){
       setstate(!state)
    }
   
  return (
    <div>
      <div className='butt'>
          <Button label="Click Me"/>
          <Button mystyle={{background:'black', color:'white', padding:'4px 20px'}} label='nice!' />
        
        <button onClick={clicked}>Remove</button>
        <div className={state ? 'rem' : 'ok'}>lol</div>
        <Suppl Styling={{color:'red'}} content='Coding is good'  />
        <Suppl Styling={{color:'green'}} content='I love Coding at night' />
        <Suppl Styling={{color:'orange'}} content='Programming is fun' />
        <Suppl Styling={{color:'purple'}} content='Hope you enjoy it' />
    
      </div>
       
        
    </div>
  );
}

export default Apping;
