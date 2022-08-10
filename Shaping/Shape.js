


// import React, {useState} from 'react';
import React, {useRef} from 'react';
import './Shape.css'

// function Shape () {
//     /* Function for button clicked */
//       function clicked(){
//           setisCircle(!isCircle)
//       }

//     let [isCircle,setisCircle]=useState(true)
//     return <div>

//     <div className='shapeHead'>
//         <div className={isCircle ? 'circle' : 'triangle'}></div>
//         <button onClick={clicked}>Change Shape</button>
//     </div>

//     </div>;
//     }


    function Shape () {
        let nameInp=useRef();
        let EmailInp=useRef()
        let p=useRef();
        let p2=useRef();
        let writing=useRef();
        let show=useRef();
        let number=useRef()
        
        function clicking(){
            //  nameInp.current.value=''
            p.current.innerHTML+=nameInp.current.value;
            p2.current.innerHTML=EmailInp.current.value
            nameInp.current.value=''
            EmailInp.current.value=''
        }
        
        function write(){
            show.current.innerHTML=writing.current.value
        }
        function numberWrit(){
           show.current.innerHTML= number.current.value
        }

        return <div>
            <input type='text' placeholder='Input your Name...' ref={nameInp}/>
            <input type='text' placeholder='Input your Email...' ref={EmailInp}/>
            <button onClick={clicking}>Submit</button>
            <p ref={p}></p>
            <p ref={p2}></p>
            <input onInput={write} type='text' placeholder='Write text...' ref={writing}/>
            <p  ref={show} ></p>


            <input onInput={numberWrit} type='number' placeholder='Enter Your Number...' ref={number}/>
        </div>;
    }





export default Shape;