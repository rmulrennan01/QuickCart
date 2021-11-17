import React, { useEffect, useState } from 'react';

function Modal_Add_Product(props) {
    const [formSubmission, setFormSubmission] 
    = useState([{}]); 
     
        
    const [subtotal,setSubtotal] = useState(0); 


 
    
    const handleSubmit = () => {
       // e.preventDefault(); //review this
        //alert("Submitted"); 
        //updateFormData("subtotal",subtotal); 
        props.addItem(formSubmission); //TODO
        setFormSubmission([{}]); 
        setSubtotal(0); 
        props.close(); 

    }

    const updateFormData = (a,b) => {
        const tempList = formSubmission; 
        tempList[a] = b;
        setFormSubmission(tempList); 
    }


    

    if(props.visibility===true){
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__head">
                    Add a product to the database
                </div> 
                <div className="modal__body"> 
                    <form >
                        <label> 
                            Description: <input type="text" required onChange={e=>updateFormData("description",e.target.value)}/>
                        </label> <br/> 
                        <label> 
                            Material: <select> 
                                            <option value={true} onChange={e=>updateFormData("material",e.target.value)}> True </option> 
                                            <option value={false} onChange={e=>updateFormData("material",e.target.value)}> False </option> 
                                            
                                    </select> 
                        </label> <br/> 

                        <label> 
                            Taxed: <select> 
                                    <option value={true} onChange={e=>updateFormData("taxed",e.target.value)}> True </option> 
                                    <option value={false} onChange={e=>updateFormData("taxed",e.target.value)}> False </option>       
                                    </select>                        
                         </label> <br/> 

                         <label> 
                            Unit of Measure: <input type="text" required onChange={e=>updateFormData("unit_measure",e.target.value)}/>
                        </label> <br/> 
                        <label> 
                            Unit Price: <input type="text" required onChange={e=>updateFormData("unit_price",e.target.value)}/>
                        </label> <br/> 
 
                        
                        
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

export default Modal_Add_Product
