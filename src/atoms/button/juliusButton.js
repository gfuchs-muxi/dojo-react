import React from 'react'

const JuliusButton = (props) => {
    return (
        <div>
            Julius
            <button className="btn btn-primary">{ props.children }</button>   
        </div>
    );
}

export default JuliusButton;