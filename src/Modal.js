import React from 'react';
import "./Modal.css"; 

function Modal(props) {
    if(props.visibility===true){
    return (
        <div className="modal">
            Hey there dudes
            <br></br> 
            Some more info for you

            <button onClick={()=> props.close()}> Close </button>
        </div>
    )
    } 
    else{
        return(
            null
        )
    }
}

export default Modal
