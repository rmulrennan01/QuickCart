import React, { useEffect, useState } from 'react';
   // import "./TableFoot.css"; 
   import CurrencyFormat from 'react-currency-format';

    
    function TableFoot(props) {
        return (
            <tr > 
            <th className="table__header"> </th> 
            <th className="table__header"> </th> 
            <th className="table__header"> </th> 
            <th className="table__header"> </th> 
            <th className="table__header"> Subtotal:</th>       
            <th className="table__header">   
                <CurrencyFormat value={props.subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2}/>   
            </th> 
            <th className="table__header"> </th>       
        </tr> 
        )
    }
    
    export default TableFoot
    