import React from 'react'
import "./TableHeader.css"; 

function TableHeader() {
    return (
        <div className="tableHeader">
            <div className="tableHeader__desc"> Description </div> 
            <div className="tableHeader__qty"> Quantity </div> 
            <div className="tableHeader__price"> Unit Price ($) </div> 
            <div className="tableHeader__subtotal"> Subtotal ($) </div> 
            
          </div>
    )
}

export default TableHeader
