import React from 'react';


function Greet (prop)  {
    let {title, name,talent}=prop
    return <div>
        <h1>{title} {name} got a {talent} talent</h1>
    </div>;
}



export default Greet;