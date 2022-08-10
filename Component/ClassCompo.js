import React from 'react';

// #region component
const propTypes = {};

const defaultProps = {};


class ClassCompo extends React.Component {
    clicked(){
        alert()
    }
constructor(props) {
    super(props);

    this.state = {
       
    };
}

    render() {
        return <div>
            <button onClick={this.clicked}>Click me aga </button>
        </div>;
    }
}


export default ClassCompo;