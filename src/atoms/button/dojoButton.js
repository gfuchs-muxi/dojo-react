import React from 'react'

const DojoButton = (props) => {
    return (
        <button 
        className="btn btn-primary"
        onClick={props.onClick}>
            { props.children }
        </button>   
    );
}



export default DojoButton;