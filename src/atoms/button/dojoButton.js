import React from 'react'

const DojoButton = (props) => {
    return (
        <button className="btn btn-primary">{ props.children }</button>   
    );
}

export default DojoButton;