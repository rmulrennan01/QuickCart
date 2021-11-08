import React, { useEffect, useState } from 'react';
import "./Modal.css"; 

function Modal(props) {
    const [formSubmission, setFormSubmission] 
    = useState([{}]); 
       // [{productID: null, description: null, quantity: null, unit_price: null, unit_measure: null, subtotal:null}]);  
        
    const [subtotal,setSubtotal] = useState(0); 


 
    
    const handleSubmit = () => {
       // e.preventDefault(); //review this
        //alert("Submitted"); 
        updateFormData("subtotal",subtotal); 
        props.addItem(formSubmission); //TODO
        setFormSubmission([{}]); 
    }

    const updateFormData = (a,b) => {
        const tempList = formSubmission; 
        tempList[a] = b;
        setFormSubmission(tempList); 
        updateSubtotal(); 
    }

    const updateSubtotal = () => {
        setSubtotal(formSubmission.quantity*formSubmission.unit_price); 

    }

    

    if(props.visibility===true){
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__head">
                    Add a product
                </div> 
                <div className="modal__body"> 
                    <form >
                        <label>
                            Product ID: <input type="number" required onChange={e=>updateFormData("productID",e.target.value)}/>
                        </label> <br></br> 
                        <label>
                            Description:<input type="text" onChange={e=>updateFormData("description",e.target.value)}/>
                        </label> <br></br> 
                        <label>
                            Quantity:<input type="number" onChange={e=>updateFormData("quantity",e.target.value)}/>
                        </label> <br></br> 
                        <label>
                            Unit:<input type="text" onChange={e=>updateFormData("unit_measure",e.target.value)}/>
                        </label> <br></br> 
                        <label>
                            Unit Price:<input type="number" onChange={e=>updateFormData("unit_price",e.target.value)}/>
                        </label> <br></br> 
                        <label> 
                            Subtotal: {subtotal}
                            
                        </label> <br></br> 
                        
                        
                    </form>
                    <button onClick={() => handleSubmit()}> Submit </button> 
                </div> 
                <div className="modal__foot">
                    <button onClick={()=> props.close()}> Close </button>

                </div> 
            </div> 


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
