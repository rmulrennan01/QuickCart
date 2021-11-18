import React, { useEffect, useState } from 'react';
import "./Modal.css"; 


function Modal_Template(props) {
   // const [visible, setVisible] = useState(props.visibility); 
    console.log(props.modalVisible); 
    if(props.modalVisible==true){
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__head">
                    {props.modalTitle()}
                </div> 
                <div className="modal__body"> 
                    {props.modalBody()}
                </div> 
                <div className="modal__foot">
                    <button onClick={()=> props.close()}> Close </button>
                </div> 
            </div> 
        </div> 

    );
    } 
    else{
        return(
            null
        );
    }
}

export default Modal_Template
