

import React, {useRef} from 'react';
import   './Contact.css'


const Contact = () => {
    
    
    let name=useRef()
    let Email=useRef()
    let pasword=useRef()
    let retypePass=useRef()

    function Submit(){
        let ok=true
        let personName=name.current.value;
        let PersonEmail=Email.current.value
        let Reapasword=pasword.current.value
        let RetypePass=retypePass.current.value

        console.log(personName)
        console.log(PersonEmail)
        if (Reapasword === RetypePass) {
            console.log(Reapasword)
        }else{
            console.log('Invalid')
        }
    }

    return <div className='Contact'>
        <div className='center'>
       <div className='form'>
           <h1>Sign up</h1>
         <input type='text' placeholder='Enter Your Name...' ref={name} />
         <input type='text' placeholder='Enter Your Email...' ref={Email}/>
         <input type='text' placeholder='Create Your Password...' ref={pasword} />
         <input type='text' placeholder='Reswrite Your Password...' ref={retypePass}/>
         <button className='SunButt' onClick={Submit}>Submit</button>
         </div >
        </div>
    </div>;
}



export default Contact;