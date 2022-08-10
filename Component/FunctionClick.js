import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';




const functionClick = () => {
    function Clicking(){
        console.log('ok')
    }
    return <div>
        <button onClick={Clicking}>Click this</button>
    </div>;
}



export default functionClick;