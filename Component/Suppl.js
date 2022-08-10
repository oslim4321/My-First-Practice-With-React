
import React from 'react';

function Suppl(prop) {
    let {Styling, content}=prop
    return <div>
        <h1 style={Styling}>{content} </h1>
    </div>;
}



export default Suppl;