import React, { useEffect, useState } from 'react';
import "./TableHeader.css"; 
import CurrencyFormat from 'react-currency-format';


function TableContent(props) {
    //const [displayList, setDisplayList] = useState(props.content); 
   // const displayList = props.content; 

    const removeItem = () => {
        alert("Item Removed from Table"); 
    }
    
    const renderRows = (item) => {
        return(
            <tr>
                <td>{item.productID}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td> 
                <td>{item.unit_measure}</td> 
                <td>
                    <CurrencyFormat value={item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                    
                </td> 
                <td> 
                    <CurrencyFormat value={item.quantity*item.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>
                </td> 
                <td> 
                    <button onClick={removeItem}> Remove </button> 
                </td>  
    
            </tr> 
            
        ); 

    }



    return (
        
        <> {props.content.map(renderRows)} </> 
        
       
    );
}

export default TableContent
