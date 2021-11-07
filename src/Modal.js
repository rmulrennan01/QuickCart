import React from 'react';
import "./Modal.css"; 

function Modal(props) {
    if(props.visibility===true){
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__head">
                    Add a product
                </div> 
                <div className="modal__body"> 
                    <form>
                        <label>
                        Product ID:
                        <input type="int" />
                        </label> <br></br> 
                        <label>
                        Description:
                        <input type="text" />
                        </label> <br></br> 
                        <label>
                        Quantity:
                        <input type="int" />
                        </label> <br></br> 
                        <label>
                        Unit:
                        <input type="text" />
                        </label> <br></br> 
                        <label>
                        Unit Price:
                        <input type="int" />
                        </label> <br></br> 
                        <label>
                        Subtotal:
                        <input type="int" value={100} />
                        </label> <br></br> 
                        
                        <input type="submit" value="Submit" />
                    </form>
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
