import React, { useEffect, useState } from 'react';
import "./TableContent.css"; 
import CurrencyFormat from 'react-currency-format';


function TableContent(props) {
    //const [displayList, setDisplayList] = useState(props.content); 
   // const displayList = props.content; 


    
    const renderRows = (item) => {
        return(
            <tr key={item.productID} className= "tableContent__row">
                <td>{item.productID}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td> 
                <td>{item.unit_measure}</td> 
                <td>
                    <CurrencyFormat value={item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                    
                </td> 
                <td> 
                    <CurrencyFormat value={item.subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </td> 
                <td> 
                    <button onClick={() => removeRow(item)}> Remove </button> 
                </td>  
    
            </tr> 
            
        ); 

    }

    const removeRow = (n) => {
        props.removeItem(props.content.indexOf(n));
    }



    return (
        
        <> 
            {props.content.map(renderRows)} 
            {props.content.map(props.updateSubtotal)} 
            {props.updateTotal()} 
        </> 
        
       
    );
}

export default TableContent
